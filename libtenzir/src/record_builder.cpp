//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/record_builder.hpp"

#include "tenzir/fwd.hpp"

#include "tenzir/as_bytes.hpp"
#include "tenzir/data.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/detail/overload.hpp"
#include "tenzir/index.hpp"
#include "tenzir/series_builder.hpp"
#include "tenzir/type.hpp"

#include <arrow/compute/expression.h>
#include <caf/detail/type_list.hpp>
#include <caf/none.hpp>

#include <algorithm>
#include <ranges>
#include <string>
#include <string_view>
#include <utility>
#include <variant>

#define PARENS ()
#define EXPAND(...) EXPAND4(EXPAND4(EXPAND4(EXPAND4(__VA_ARGS__))))
#define EXPAND4(...) EXPAND3(EXPAND3(EXPAND3(EXPAND3(__VA_ARGS__))))
#define EXPAND3(...) EXPAND2(EXPAND2(EXPAND2(EXPAND2(__VA_ARGS__))))
#define EXPAND2(...) EXPAND1(EXPAND1(EXPAND1(EXPAND1(__VA_ARGS__))))
#define EXPAND1(...) __VA_ARGS__

#define FOR_EACH(macro, ...)                                                   \
  __VA_OPT__(EXPAND(FOR_EACH_HELPER(macro, __VA_ARGS__)))
#define FOR_EACH_HELPER(macro, a1, ...)                                        \
  macro(a1) __VA_OPT__(FOR_EACH_AGAIN PARENS(macro, __VA_ARGS__))
#define FOR_EACH_AGAIN() FOR_EACH_HELPER

/// types that can be `data` but aren't nested/recursive
#define NON_STRUCTURED_TYPES                                                   \
  caf::none_t, bool, int64_t, uint64_t, double, duration, time, std::string,   \
    ip, subnet, enumeration, blob

namespace tenzir {

auto record_builder::record() -> detail::record_builder::node_record* {
  return &root_;
}

auto record_builder::reseed(std::optional<tenzir::type> seed) -> void {
  if (seed) {
    root_.reseed(caf::get<record_type>(*seed));
  }
}

auto record_builder::find_field_raw(std::string_view key)
  -> detail::record_builder::node_field* {
  return root_.at(key);
}

template <detail::record_builder::non_structured_data_type T>
auto record_builder::find_value_typed(std::string_view key) -> T* {
  if (auto p = find_field_raw(key)) {
    return p->get_if<T>();
  }
  return nullptr;
}

#define INSTANTIATE_record_builder_find_value_typed(T)                         \
  template auto record_builder::find_value_typed<T>(std::string_view)->T*;

FOR_EACH(INSTANTIATE_record_builder_find_value_typed, NON_STRUCTURED_TYPES)

auto record_builder::clear() -> void {
  root_.clear();
}

auto record_builder::append_signature_to(
  signature_type& sig, std::optional<tenzir::type> seed) -> void {
  if (seed) {
    auto rs = caf::get_if<tenzir::record_type>(&*seed);
    root_.append_to_signature(sig, rs);
  } else {
    root_.append_to_signature(sig);
  }
}

auto record_builder::free() -> void {
  root_.data_.clear();
  root_.data_.shrink_to_fit();
  root_.lookup_.clear();
  root_.lookup_.shrink_to_fit();
}

auto record_builder::commit_to(series_builder& builder) -> void {
  root_.commit_to(builder.record());
}

namespace detail::record_builder {
namespace {

constexpr static size_t type_index_empty
  = caf::detail::tl_size<field_type_list>::value;
constexpr static size_t type_index_generic_number
  = caf::detail::tl_index_of<field_type_list, double>::value;
constexpr static size_t type_index_string
  = caf::detail::tl_index_of<field_type_list, std::string>::value;
constexpr static size_t type_index_list
  = caf::detail::tl_index_of<field_type_list, node_list>::value;
constexpr static size_t type_index_record
  = caf::detail::tl_index_of<field_type_list, node_record>::value;
bool is_null(size_t idx) {
  return idx == caf::detail::tl_index_of<field_type_list, caf::none_t>::value;
}
bool is_number_like(size_t idx) {
  switch (idx) {
    case caf::detail::tl_index_of<field_type_list, bool>::value:
    case caf::detail::tl_index_of<field_type_list, int64_t>::value:
    case caf::detail::tl_index_of<field_type_list, uint64_t>::value:
    case caf::detail::tl_index_of<field_type_list, double>::value:
    case caf::detail::tl_index_of<field_type_list, enumeration>::value:
      return true;
    default:
      return false;
  }
}

auto update_type_index(size_t& old_index, size_t new_index) -> void {
  if (old_index == new_index) {
    return;
  }
  if (old_index == type_index_empty) {
    old_index = new_index;
    return;
  }
  if (is_null(old_index)) {
    old_index = new_index;
    return;
  }
  if (is_null(new_index)) {
    return;
  }
  if (is_number_like(old_index) and is_number_like(new_index)) {
    old_index = type_index_generic_number;
    return;
  }
  old_index = type_index_string;
}
} // namespace

auto node_base::is_dead() const -> bool {
  return state_ == state::dead;
}
auto node_base::is_alive() const -> bool {
  return state_ == state::alive;
}
auto node_base::affects_signature() const -> bool {
  switch (state_) {
    case state::alive:
    case state::sentinel:
      return true;
    case state::dead:
      return false;
  }
  TENZIR_UNREACHABLE();
}

auto node_base::clear() -> void {
  state_ = state::dead;
}
auto node_record::try_field(std::string_view name) -> node_field* {
  auto [it, inserted] = lookup_.try_emplace(name, data_.size());
  node_field* res;
  if (not inserted) {
    res = &data_[it->second].value;
  } else {
    res = &data_.emplace_back(it->first).value;
  }
  return res;
}

auto node_record::reserve( size_t N ) -> void {
  lookup_.reserve(N);
  data_.reserve(N);
}

auto node_record::field(std::string_view name) -> node_field* {
  state_ = state::alive;
  auto* f = try_field(name);
  f->state_ = state::alive;
  return f;
}

auto node_record::at(std::string_view key) -> node_field* {
  for (const auto& [field_name, index] : lookup_) {
    const auto [field_name_mismatch, key_mismatch]
      = std::ranges::mismatch(field_name, key);
    if (field_name_mismatch == field_name.end()) {
      if (key_mismatch == key.end()) {
        return &data_[index].value;
      }
      if (*key_mismatch == '.') {
        continue;
      }
      if (auto* r = data_[index].value.get_if<node_record>()) {
        if (auto* result = r->at(key.substr(1 + key_mismatch - key.begin()))) {
          return result;
        } else {
          continue;
        }
      }
    }
  }
  return nullptr;
}

auto node_record::commit_to(record_ref r) -> void {
  mark_this_dead();
  for (auto& [k, v] : data_) {
    if (v.is_alive()) {
      v.commit_to(r.field(k));
    }
  }
}

auto node_record::clear() -> void {
  node_base::clear();
  for (auto& [k, v] : data_) {
    v.clear();
  }
}

auto node_record::reseed(const tenzir::record_type& type) -> void {
  if (is_dead()) {
    state_ = state::sentinel;
  }
  for (const auto& [k, v] : type.fields()) {
    try_field(k)->reseed(v);
  }
}

auto node_record::append_to_signature(signature_type& sig,
                                      const tenzir::record_type* seed) -> void {
  constexpr static std::byte record_start{0b10101010};
  sig.push_back(record_start);

  // if we have a seed, we need too ensure that all fields exist first
  if (seed) {
    for (const auto& [k, v] : seed->fields()) {
      try_field(k)->mark_this_relevant();
    }
  }
  // we are intentionally traversing `lookup_` here, because that is sorted by
  // name. this ensures that the signature computation will be the same
  for (const auto& [k, index] : lookup_) {
    if (data_[index].value.affects_signature()) {
      tenzir::type field_seed;
      if (seed) { // TODO is this a good idea????? I dont see any other way to
                  // find the type for a field with a given name
                  // a non-generator based API to get these would be ideal, so
                  // we dont have to iterate for every key
        for (auto [seed_key, seed_type] : seed->fields()) {
          if (seed_key == k) {
            field_seed = std::move(seed_type);
            break;
          }
        }
      }
      const auto key_bytes = as_bytes(k);
      sig.insert(sig.end(), key_bytes.begin(), key_bytes.end());
      data_[index].value.append_to_signature(sig, seed ? &field_seed : nullptr);
    }
  }
}

template <non_structured_data_type T>
auto node_field::data(T data) -> void {
  state_ = state::alive;
  data_ = data;
}

#define INSTANTIATE_field_data(T) template auto node_field::data(T)->void;

FOR_EACH(INSTANTIATE_field_data, NON_STRUCTURED_TYPES)

auto node_field::record() -> node_record* {
  state_ = state::alive;
  if (auto* p = get_if<node_record>()) {
    return p;
  }
  return &data_.emplace<node_record>();
}

auto node_field::list() -> node_list* {
  state_ = state::alive;
  if (auto* p = get_if<node_list>()) {
    return p;
  }
  return &data_.emplace<node_list>();
}

auto node_field::reseed(const tenzir::type& seed) -> void {
  if (is_dead()) {
    state_ = state::sentinel;
  }
  const auto visitor = detail::overload{
    [&]<basic_type T>(const T&) {
      data(T::construct());
    },
    [&](const enumeration_type&) {
      data(enumeration{});
    },
    [&](const record_type&) {
      auto r = record();
      r->reseed(caf::get<record_type>(seed));
    },
    [&](const list_type&) {
      auto l = list();
      l->reseed(caf::get<list_type>(seed));
    },
    [&](const auto&) {
      TENZIR_UNREACHABLE();
    },
  };
  caf::visit(visitor, seed);
}

auto node_field::commit_to(builder_ref r) -> void {
  mark_this_dead();
  const auto visitor = detail::overload{
    [&r](node_list& v) {
      if (v.is_alive()) {
        v.commit_to(r.list());
      }
    },
    [&r](node_record& v) {
      if (v.is_alive()) {
        v.commit_to(r.record());
      }
    },
    [](std::monostate) {
      TENZIR_WARN("unfinished field in record builder");
    },
    [](tenzir::pattern) {
      TENZIR_UNIMPLEMENTED();
    },
    [&r](auto& v) {
      r.data(v);
    },
  };
  std::visit(visitor, data_);
}

auto node_field::append_to_signature(signature_type& sig,
                                     const tenzir::type* seed) -> void {
  // FIXME handle conflict between seed and held type here.
  const auto visitor = detail::overload{
    [&sig, seed](node_list& v) {
      auto* ls = caf::get_if<list_type>(seed);
      if (v.affects_signature() or ls) {
        v.append_to_signature(sig, ls);
      }
    },
    [&sig, seed](node_record& v) {
      auto* rs = caf::get_if<record_type>(seed);
      if (v.affects_signature() or rs) {
        v.append_to_signature(sig, rs);
      }
    },
    [](std::monostate) {
      TENZIR_WARN("unfinished field in record builder");
    },
    [](tenzir::pattern) {
      TENZIR_UNIMPLEMENTED();
    },
    [&sig, seed]<typename T>(const T&) {
      using Type = data_to_type_t<T>;
      sig.push_back(static_cast<std::byte>(Type::type_index));
    },
  };
  std::visit(visitor, data_);
}

auto node_field::clear() -> void {
  node_base::clear();
  const auto visitor = detail::overload{
    [](node_list& v) {
      v.clear();
    },
    [](node_record& v) {
      v.clear();
    },
    [](auto&) { /* no-op */ },
  };
  std::visit(visitor, data_);
}

auto node_list::find_free() -> node_field* {
  for (auto& value : data_) {
    if (not value.is_alive()) {
      return &value;
    }
  }
  return nullptr;
}

auto node_list::reserve( size_t N ) -> void {
  data_.reserve(N);
}


template <non_structured_data_type T>
auto node_list::data(T data) -> void {
  state_ = state::alive;
  if (auto* free = find_free()) {
    free->data_ = std::move(data);
    update_type_index(type_index_, free->current_index());
  } else {
    data_.emplace_back(data);
    update_type_index(type_index_, data_.back().current_index());
  }
}

#define INSTANTIATE_list_data(T) template auto node_list::data(T)->void;

FOR_EACH(INSTANTIATE_list_data, NON_STRUCTURED_TYPES)

auto node_list::record() -> node_record* {
  state_ = state::alive;
  update_type_index(type_index_, type_index_record);
  if (auto* free = find_free()) {
    if (auto* r = free->get_if<node_record>()) {
      return r;
    } else {
      return &free->data_.emplace<node_record>();
    }
  } else {
    return data_.emplace_back().record();
  }
}

auto node_list::list() -> node_list* {
  state_ = state::alive;
  update_type_index(type_index_, type_index_record);
  if (auto* free = find_free()) {
    if (auto* r = free->get_if<node_list>()) {
      return r;
    } else {
      return &free->data_.emplace<node_list>();
    }
  } else {
    return data_.emplace_back().list();
  }
}

auto node_list::reseed(const tenzir::list_type& seed) -> void {
  const auto& value_type = seed.value_type();
  const auto visitor = detail::overload{
    [&]<basic_type T>(const T&) {
      update_type_index(
        type_index_, caf::detail::tl_index_of<field_type_list,
                                              tenzir::type_to_data<T>>::value);
    },
    [&](const enumeration_type&) {
      update_type_index(
        type_index_,
        caf::detail::tl_index_of<field_type_list, tenzir::enumeration>::value);
    },
    [&](const tenzir::record_type&) {
      update_type_index(
        type_index_,
        caf::detail::tl_index_of<field_type_list, node_record>::value);
    },
    [&](const tenzir::list_type&) {
      update_type_index(
        type_index_,
        caf::detail::tl_index_of<field_type_list, node_list>::value);
    },
    [&](const auto&) {
      TENZIR_UNREACHABLE();
    },
  };
  caf::visit(visitor, value_type);
}

auto node_list::commit_to(builder_ref r) -> void {
  mark_this_dead();
  for (auto& v : data_) {
    if (v.is_alive()) {
      v.commit_to(r);
    } else {
      break;
    }
  }
}

auto node_list::append_to_signature(signature_type& sig,
                                    const tenzir::list_type* seed) -> void {
  constexpr static std::byte list_start{0b01010101};
  sig.push_back(list_start);
  if (data_.empty() and not seed) {
    return;
  }
  if (seed) {
    reseed(*seed);
  }
  sig.push_back(static_cast<std::byte>(type_index_));
}

auto node_list::clear() -> void {
  node_base::clear();
  type_index_ = type_index_empty;
  for (auto& v : data_) {
    v.clear();
  }
}

} // namespace detail::record_builder
} // namespace tenzir