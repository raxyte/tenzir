//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/aliases.hpp"
#include "tenzir/data.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/modules.hpp"
#include "tenzir/series_builder.hpp"
#include "tenzir/type.hpp"
#include "tenzir/view.hpp"

#include <tenzir/multi_series_builder.hpp>

#include <caf/sum_type.hpp>
#include <fmt/core.h>

#include <http_parser.h>
#include <memory>
#include <optional>
#include <string_view>
#include <variant>

namespace tenzir {
namespace {
data materialize(const data_view2& v) {
  constexpr static auto view_to_data = []<typename T>(const T& alt) {
    return tenzir::data{materialize(alt)};
  };
  return std::visit(view_to_data, v);
}

data materialize(data_view2&& v) {
  constexpr static auto view_to_data = []<typename T>(T&& alt) {
    return tenzir::data{materialize(std::move(alt))};
  };
  return std::visit(view_to_data, std::move(v));
}

void append_to_signature(std::string_view x, std::vector<std::byte>& out) {
  auto name_bytes = as_bytes(x);
  out.insert(out.end(), name_bytes.begin(), name_bytes.end());
}

void append_to_signature(const data& x, std::vector<std::byte>& out) {
  caf::visit(
    [&]<typename T>(const T& x) {
      if constexpr (caf::detail::is_one_of<T, pattern, enumeration, map>::value) {
        // Such values are not produced by `json_to_data`.
        TENZIR_UNREACHABLE();
      } else {
        using Type = data_to_type_t<T>;
        // Write out the type index. For complex types, this marks the start.
        out.push_back(static_cast<std::byte>(Type::type_index));
        if constexpr (basic_type<Type>) {
          // We are done, no need for recursion.
        } else {
          // We have already written out the type index as a prefix and now do
          // recursion with the inner types.
          if constexpr (std::same_as<T, record>) {
            for (auto& [name, value] : x) {
              // Start a new field with a special marker.
              out.push_back(std::byte{255});
              // The field name is part of the type signature.
              auto name_bytes = as_bytes(name);
              out.insert(out.end(), name_bytes.begin(), name_bytes.end());
              // And then, of course, the type of the field.
              append_to_signature(value, out);
            }
          } else if constexpr (std::same_as<T, list>) {
            for (auto& item : x) {
              append_to_signature(item, out);
            }
          } else {
            static_assert(detail::always_false_v<T>, "unhandled type");
          }
          // We write out the type index once more to mark the end.
          out.push_back(static_cast<std::byte>(Type::type_index));
        }
      }
    },
    x);
}
} // namespace

namespace detail::multi_series_builder {

void field_generator::data(tenzir::data d) {
  const auto visitor = detail::overload{
    [&](tenzir::builder_ref& b) {
      b.data(std::move(d));
    },
    [&](raw_type raw) {
      TENZIR_ASSERT(raw.raw == tenzir::data{},
                    "field must not have a value when settings it value.");
      raw.raw = std::move(d);
      append_to_signature(d, raw.sig);
    }};
  return std::visit(visitor, var_);
}

void field_generator::data(data_view2 d) {
  return data(materialize(std::move(d)));
}

auto field_generator::record() -> record_generator {
  const auto visitor = detail::overload{
    [&](tenzir::builder_ref& b) {
      return record_generator{b.record()};
    },
    [&](raw_type raw) {
      const bool is_empty = raw.raw == tenzir::data{};
      const bool is_record
        = caf::holds_alternative<tenzir::record>(raw.raw.get_data());
      TENZIR_ASSERT(is_empty or is_record);
      if (is_empty) {
        raw.raw = tenzir::record{};
      }
      auto& rec = caf::get<tenzir::record>(raw.raw.get_data());
      return record_generator{rec, raw.sig};
    }};
  return std::visit(visitor, var_);
}

auto record_generator::field(std::string_view name) -> field_generator {
  const auto visitor = detail::overload{
    [&](tenzir::record_ref& rec) {
      return field_generator{rec.field(name)};
    },
    [&](raw_type raw) {
      const auto [it, success]
        = raw.raw.insert({std::string{name}, data{record{}}});
      TENZIR_ASSERT(success, fmt::format("Field `{}` already exists.", name));
      append_to_signature(name, raw.sig);
      return field_generator{it->second, raw.sig};
    }};
  return std::visit(visitor, var_);
}

void record_generator::field(std::string_view name, data data) {
  return field(name).data(std::move(data));
}
} // namespace detail::multi_series_builder

auto multi_series_builder::yield_ready() -> std::vector<series> {
  const auto now = std::chrono::steady_clock::now();
  if (now - last_yield_time_ < settings_.timeout) {
    return {};
  }
  last_yield_time_ = now;
  if (get_policy<policy_merge>()) {
    return merging_builder_.finish();
  }
  make_events_available_where(
    [now, timeout = settings_.timeout,
     target_size = settings_.desired_batch_size](const entry_data& e) {
      return e.builder.length()
               >= static_cast<int64_t>(target_size) // batch size hit
             or now - e.flushed < timeout;          // timeout hit
    });
  garbage_collect_where(
    [now, timeout = settings_.timeout](const entry_data& e) {
      return now - e.flushed > 10 * timeout;
    });
  return std::exchange(ready_events_, {});
}

auto multi_series_builder::record() -> record_generator {
  if (get_policy<policy_merge>()) {
    return record_generator{merging_builder_.record()};
  } else {
    return record_generator{record_raw_, signature_raw_};
  }
}

auto multi_series_builder::finalize() -> std::vector<series> {
  if (get_policy<policy_merge>()) {
    return merging_builder_.finish();
  }
  make_events_available_where([](const auto&) {
    return true;
  });
  return std::exchange(ready_events_, {});
}

template <typename T>
T* multi_series_builder::get_policy() {
  return std::get_if<T>(&policy_);
}

void multi_series_builder::complete_last_event() {
  if (get_policy<policy_merge>()) {
    return; // merging mode just writes directly into a series builder
  }

  size_t new_index = invalid_index;
  if (auto p = get_policy<policy_selector>()) {
    const std::string_view selector = p->field_name;
    auto schema_name_precise = get<std::string>(record_raw_, selector);
    auto free_index = next_free_index();
    auto [it, inserted] = schema_map_.try_emplace(
      schema_name_precise, free_index.value_or(entries_.size()));
    if (inserted) { // the schema wasn't in the map yet
      std::string schema_name;
      if (p->naming_prefix) {
        schema_name
          = fmt::format("{}.{}", p->naming_prefix, schema_name_precise);
      } else {
        schema_name = schema_name_precise;
      }
      if (not free_index) {
        entries_.emplace_back(
          std::move(schema_name),
          type_for_schema(std::string_view{
            schema_name})); // TODO should this error in selector mode
      } else {
        entries_[it->second].unused = false;
      }
    }
    new_index = it->second;
  } else if (auto p = get_policy<policy_default>()) {
    auto free_index = next_free_index();
    auto [it, inserted] = signature_map_.try_emplace(
      std::move(signature_raw_), free_index.value_or(entries_.size()));
    if (inserted) { // the signature wasn't in the map yet
      if (not free_index) {
        entries_.emplace_back(p->seed_schema.value_or(settings_.default_name),
                              type_for_schema(p->seed_schema));
      } else {
        entries_[it->second].unused = false;
      }
    }
    new_index = it->second;
  }
  if (settings_.ordered and new_index != active_index_) {
    // Because it's the ordered mode, we know that that only this single series
    // builder can be active and hold elements. Since the active builder
    // changed, we flush the previous one.
    append_ready_events(entries_[active_index_].flush());
  }
  active_index_ = new_index;
  auto& entry = entries_[new_index];
  entry.builder.data(
    record_raw_); // TODO moving into the builder may be possible
  record_raw_.clear();
  signature_raw_.clear();
}

std::optional<size_t> multi_series_builder::next_free_index() const {
  for (size_t i = 0; i < entries_.size(); ++i) {
    if (entries_[i].unused) {
      return i;
    }
  }
  return std::nullopt;
}

auto multi_series_builder::type_for_schema(
  const std::optional<std::string>& name)
  -> std::optional<std::reference_wrapper<const type>> {
  if (name) {
    return type_for_schema(std::string_view{*name});
  }
  return std::nullopt;
}

auto multi_series_builder::type_for_schema(std::string_view name)
  -> std::optional<std::reference_wrapper<const type>> {
  if (schemas_.empty()) {
    schemas_ = modules::schemas();
  }

  const auto it = std::ranges::find(schemas_, name, [](const tenzir::type& t) {
    return t.name();
  });

  if (it == std::ranges::end(schemas_)) {
    return std::nullopt;
  } else {
    return *it;
  }
}

void multi_series_builder::make_events_available_where(
  std::predicate<const entry_data&> auto pred) {
  complete_last_event();
  for (auto& entry : entries_) {
    if (pred(entry)) {
      append_ready_events(entry.flush());
    }
  }
}

void multi_series_builder::append_ready_events(
  std::vector<series>&& new_events) {
  ready_events_.reserve(ready_events_.size() + new_events.size());
  ready_events_.insert(ready_events_.end(),
                       std::make_move_iterator(new_events.begin()),
                       std::make_move_iterator(new_events.end()));
  new_events.clear();
}

void multi_series_builder::garbage_collect_where(
  std::predicate<const entry_data&> auto pred) {
  if (get_policy<policy_merge>()) {
    return;
  } else if (get_policy<policy_default>()) {
    for (auto it = signature_map_.begin(); it != signature_map_.end(); ++it) {
      auto& entry = entries_[it.value()];
      if (pred(entry)) {
        TENZIR_ASSERT(entry.builder.length() == 0,
                      "The predicate for garbage collection should be strictly "
                      "wider than the predicate for yielding in call cases. GC "
                      "should never remove collect builders that still have "
                      "events in them.");
        entry.unused = true;
        it = signature_map_.erase(it); // TODO is this fine for robin_map ???
      }
    }
  } else if (get_policy<policy_selector>()) {
    for (auto it = schema_map_.begin(); it != schema_map_.end(); ++it) {
      auto& entry = entries_[it.value()];
      if (pred(entry)) {
        TENZIR_ASSERT(entry.builder.length() == 0,
                      "The predicate for garbage collection should be strictly "
                      "wider than the predicate for yielding in call cases. GC "
                      "should never remove collect builders that still have "
                      "events in them.");
        entry.unused = true;
        it = schema_map_.erase(it); // TODO is this fine for robin_map ???
      }
    }
  }
}
} // namespace tenzir