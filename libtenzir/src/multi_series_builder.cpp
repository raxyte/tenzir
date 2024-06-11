//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/aliases.hpp"
#include "tenzir/data.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/modules.hpp"
#include "tenzir/record_builder.hpp"
#include "tenzir/series_builder.hpp"
#include "tenzir/try.hpp"
#include "tenzir/type.hpp"
#include "tenzir/view.hpp"

#include <tenzir/multi_series_builder.hpp>

#include <caf/none.hpp>
#include <caf/sum_type.hpp>
#include <fmt/core.h>

#include <http_parser.h>
#include <memory>
#include <optional>
#include <string_view>
#include <variant>

namespace tenzir {
namespace {
using signature_type = detail::multi_series_builder::signature_type;
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

void append_name_to_signature(std::string_view x, signature_type& out) {
  out.push_back(std::byte{255});
  auto name_bytes = as_bytes(x);
  out.insert(out.end(), name_bytes.begin(), name_bytes.end());
}

void append_to_signature(const data& x, signature_type& out) {
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

auto record_generator::field(std::string_view name) -> field_generator {
  const auto visitor
    = detail::overload{[&](tenzir::record_ref& rec) {
                         return field_generator{rec.field(name)};
                       },
                       [&](raw_pointer raw) {
                         return field_generator{raw->field(name)};
                       }};
  return std::visit(visitor, var_);
}

template <tenzir::detail::record_builder::non_structured_data_type T>
void field_generator::data(T d) {
  const auto visitor = detail::overload{[&](tenzir::builder_ref& b) {
                                          b.data(d);
                                        },
                                        [&](raw_pointer raw) {
                                          raw->data(d);
                                        }};
  return std::visit(visitor, var_);
}

auto field_generator::record() -> record_generator {
  const auto visitor
    = detail::overload{[&](tenzir::builder_ref& b) {
                         return record_generator{b.record()};
                       },
                       [&](raw_pointer raw) {
                         return record_generator{raw->record()};
                       }};
  return std::visit(visitor, var_);
}

auto field_generator::list() -> list_generator {
  const auto visitor = detail::overload{[&](tenzir::builder_ref& b) {
                                          return list_generator{b.list()};
                                        },
                                        [&](raw_pointer raw) {
                                          return list_generator{raw->list()};
                                        }};
  return std::visit(visitor, var_);
}

void field_generator::null() {
  return this->data(caf::none);
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
    complete_last_event();
    return record_generator{builder_raw_.record()};
  }
}

void multi_series_builder::remove_last() {
  if (get_policy<policy_merge>()) {
    merging_builder_.remove_last();
    return;
  }
  if (not builder_raw_.is_empty()) {
    builder_raw_.clear();
    return;
  }
  if (active_index_ != invalid_index) {
    entries_[active_index_].builder.remove_last();
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
  if (builder_raw_.is_empty()) {
    return; // an empty raw field does not need to be written back
  }
  size_t new_index = invalid_index;
  // TODO technically we only need this to be a full string in selector mode
  // for all other cases it could be a view
  std::string schema_name;
  if (auto p = get_policy<policy_selector>()) {
    const std::string_view selector = p->field_name;
    auto* selected_schema
      = builder_raw_.find_value_typed<std::string>(selector);
    if (selected_schema) {
      if (p->naming_prefix) {
        schema_name = fmt::format("{}.{}", p->naming_prefix, *selected_schema);
      } else {
        schema_name = *selected_schema;
      }
    }
  } else if (auto p = get_policy<policy_default>()) {
    if (p->seed_schema) {
      schema_name = *(p->seed_schema);
    }
  }
  if (schema_name.empty()) {
    schema_name = settings_.default_name;
  }
  signature_raw_.clear();
  append_name_to_signature(schema_name, signature_raw_);
  const auto schema_type = type_for_schema(schema_name);
  builder_raw_.reseed(schema_type); // re-seed
  builder_raw_.append_signature_to(signature_raw_,schema_type);
  auto free_index = next_free_index();
  auto [it, inserted] = signature_map_.try_emplace(
    std::move(signature_raw_), free_index.value_or(entries_.size()));
  if (inserted) { // the signature wasn't in the map yet
    if (not free_index) {
      entries_.emplace_back(std::move(schema_name), schema_type);
    } else {
      entries_[it->second].unused = false;
    }
  }
  new_index = it->second;
  if (settings_.ordered and new_index != active_index_) {
    // Because it's the ordered mode, we know that that only this single
    // series builder can be active and hold elements. Since the active
    // builder changed, we flush the previous one.
    append_ready_events(entries_[active_index_].flush());
  }
  active_index_ = new_index;
  auto& entry = entries_[new_index];
  builder_raw_.commit_to(entry.builder);
}

void multi_series_builder::clear_raw_event() {
  builder_raw_.clear();
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

auto multi_series_builder::type_for_schema(std::string_view name)
  -> std::optional<std::reference_wrapper<const type>> {
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
  }
  for (auto it = signature_map_.begin(); it != signature_map_.end(); ++it) {
    auto& entry = entries_[it.value()];
    if (pred(entry)) {
      TENZIR_ASSERT(entry.builder.length() == 0,
                    "The predicate for garbage collection should be strictly "
                    "wider than the predicate for yielding in call cases. GC "
                    "should never remove collect builders that still have "
                    "events in them.");
      entry.unused = true;
      it = signature_map_.erase(it);
    }
  }
}
} // namespace tenzir
