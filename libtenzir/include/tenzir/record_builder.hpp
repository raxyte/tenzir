//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once
#include "tenzir/fwd.hpp"

#include "tenzir/aliases.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/detail/flat_map.hpp"
#include "tenzir/series_builder.hpp"

#include <caf/detail/type_list.hpp>
#include <caf/error.hpp>
#include <caf/expected.hpp>

#include <cstddef>
#include <iostream>
#include <string>
#include <utility>
#include <variant>
#include <vector>

namespace tenzir {

class record_builder;
namespace detail::record_builder {

template <typename P>
concept data_parsing_function
  = requires(P parser, std::string str, const tenzir::type* seed) {
      { parser(str, seed) } -> std::same_as<caf::expected<tenzir::data>>;
    };

class node_record;
class node_field;
class node_list;

struct map_dummy {};
struct pattern_dummy {};
struct enriched_dummy {};
// The indices in this MUST line up with the tenzir type indices, hence the
// dummies
// clang-format off
using field_type_list = caf::detail::type_list<
  caf::none_t, 
  bool, 
  int64_t, 
  uint64_t,
  double, 
  duration, 
  time, 
  std::string,
  pattern_dummy,
  ip, 
  subnet, 
  enumeration, 
  node_list,
  map_dummy, 
  node_record, 
  enriched_dummy,
  blob
>;
// clang-format on

template <typename T>
concept non_structured_data_type
  = caf::detail::tl_contains<field_type_list, T>::value
    and not caf::detail::tl_contains<
      caf::detail::type_list<node_record, node_list, pattern_dummy, map_dummy,
                             enriched_dummy>,
      T>::value;

using signature_type = std::vector<std::byte>;

enum class state { alive, sentinel, dead };

class node_base {
  friend class node_record;
  friend class node_field;
  friend class node_list;
  friend class ::tenzir::record_builder;

private:
  auto mark_this_relevant() -> void {
    if (state_ != state::alive) {
      state_ = state::sentinel;
    }
  }
  auto mark_this_dead() -> void {
    state_ = state::dead;
  }
  auto mark_this_alive() -> void {
    state_ = state::alive;
  }
  auto is_dead() const -> bool;
  auto is_alive() const -> bool;
  auto affects_signature() const -> bool;
  state state_ = state::alive;
};

class node_record : public node_base {
  friend class node_list;
  friend class node_field;
  friend class ::tenzir::record_builder;

public:
  /// reserves storage for at least N elements in the record.
  /// this function can be used to get temporary pointer stability on the
  /// records elements
  auto reserve(size_t N) -> void;
  /// adds a field to the record.
  /// @note the returned pointer is not permanently stable. If the underlying
  /// vector reallocates, the pointer becomes invalid
  /// @ref reserve can be used to ensure stability for a given number of elements
  [[nodiscard]] auto field(std::string_view name) -> node_field*;

private:
  // tries to get a field with the given name. Does not affect any field state
  auto try_field(std::string_view name) -> node_field*;
  // (re-)seeds the field to match the given type. If the field is alive, this
  // has no effect
  auto reseed(const tenzir::record_type& t) -> void;
  // does lookup of a (nested( key
  auto at(std::string_view key) -> node_field*;
  // writes the record into a series builder
  auto commit_to(tenzir::record_ref r, bool mark_dead = true) -> void;
  auto commit_to(tenzir::record& r, bool mark_dead = true) -> void;
  // append the signature of this record to `sig`.
  // including sentinels is important for signature computation
  template <data_parsing_function Parser>
  auto
  append_to_signature(signature_type& sig, Parser& p,
                      const tenzir::record_type* seed = nullptr) -> caf::error;
  // clears the record by marking everything as dead
  auto clear() -> void;

  // record entry. contains a string for the key and a field
  // its defined out of line because node_field cannot be defined at this point
  struct entry_type;
  // this stores added fields in order of their appearance
  // this order is used for committing to the series builder
  // Using the appearance order to commit, ensures that fields outside of a
  // possible seed schema retain their order from first appearance The order of
  // fields in a seed/selector on the other hand is then practically ensured
  // because the multi_series_builder first seeds the respective series_builder
  std::vector<entry_type> data_;
  // this is a SORTED key -> index map. this is used for signature computation
  // if this map is not sorted, the signature computation algorithm breaks
  flat_map<std::string, size_t> lookup_;
};

class node_list : public node_base {
  friend class node_record;
  friend class node_field;

public:
  /// reserves storage for at least N elements in the record.
  /// this function can be used to get temporary pointer stability on the
  /// records elements
  auto reserve(size_t N) -> void;
  /// appends a new typed value to this list
  /// if its type mismatches with the seed during the later parsing/signature
  /// computation, an error is returned
  template <non_structured_data_type T>
  auto data(T data) -> void;
  /// unpacks the tenzir::data into a new element at the end of th list
  auto data(tenzir::data) -> void;
  /// adds an unparsed data value to this field. It is later parsed during the
  /// signature computation step
  auto data_unparsed(std::string) -> void;
  /// adds a null value to the list
  auto null() -> void;
  /// adds a new record to the list
  /// @note the returned pointer is not permanently stable. If the underlying
  /// vector reallocates, the pointer becomes invalid
  /// @ref reserve can be used to ensure stability for a given number of elements
  [[nodiscard]] auto record() -> node_record*;
  /// adds a new list to the list
  /// @note the returned pointer is not permanently stable. If the underlying
  /// vector reallocates, the pointer becomes invalid
  /// @ref reserve can be used to ensure stability for a given number of elements
  [[nodiscard]] auto list() -> node_list*;

private:
  /// finds an element marked as dead. This is part of the reallocation
  /// optimization.
  auto find_free() -> node_field*;
  auto back() -> node_field&;

  auto update_new_structural_signature() -> void;

  // (re-)seeds the field to match the given type. If the field is alive, this
  // has no effect
  auto reseed(const tenzir::list_type&) -> void;
  // writes the list into a series builder
  auto commit_to(tenzir::builder_ref r, bool mark_dead = true) -> void;
  auto commit_to(tenzir::list& r, bool mark_dead = true) -> void;
  // append the signature of this list to `sig`.
  // including sentinels is important for signature computation
  template <data_parsing_function Parser>
  auto
  append_to_signature(signature_type& sig, Parser& p,
                      const tenzir::list_type* seed = nullptr) -> caf::error;
  auto clear() -> void;

  size_t type_index_;
  signature_type current_structural_signature_;
  signature_type new_structural_signature_;
  std::vector<node_field> data_;
};

class node_field : public node_base {
  friend class node_record;
  friend class node_list;
  friend struct node_record::entry_type;
  friend class ::tenzir::record_builder;

public:
  /// sets this field to a parsed, typed data value
  /// if its type mismatches with the seed during the later parsing/signature
  /// computation, an error is returned
  template <non_structured_data_type T>
  auto data(T data) -> void;
  /// unpacks the tenzir::data into this field
  auto data(tenzir::data) -> void;
  /// adds an unparsed data value to this field. It is later parsed during the
  /// signature computation step
  auto data_unparsed(std::string raw_text) -> void;
  auto null() -> void;
  [[nodiscard]] auto record() -> node_record*;
  [[nodiscard]] auto list() -> node_list*;

  node_field() : data_{std::in_place_type<caf::none_t>} {
  }
  template <non_structured_data_type T>
  node_field(T data) : data_{std::in_place_type<T>, data} {
  }

private:
  auto current_index() const -> size_t {
    return data_.index();
  }
  template <typename T>
  auto get_if() -> T* {
    return std::get_if<T>(&data_);
  }
  // (re-)seeds the field to match the given type. If the field is alive, this
  // has no effect
  auto reseed(const tenzir::type&) -> void;
  // parses the current un-parsed value if any
  template <data_parsing_function Parser>
  auto parse(Parser&, const tenzir::type* seed) -> caf::error;
  // append the signature of this field to `sig`.
  // including sentinels is important for signature computation
  template <data_parsing_function Parser>
  auto append_to_signature(signature_type& sig, Parser& p,
                           const tenzir::type* seed = nullptr) -> caf::error;
  // writes the field into a series builder
  auto commit_to(tenzir::builder_ref r, bool mark_dead = true) -> void;
  auto commit_to(tenzir::data& r, bool mark_dead = true) -> void;
  auto clear() -> void;

  // clang-format off
  using field_variant_type = caf::detail::tl_apply_t<
   field_type_list,
    std::variant
  >;
  // clang-format on

  field_variant_type data_;
  bool is_raw_ = false;
};

struct node_record::entry_type {
  std::string key;
  node_field value;

  entry_type(std::string_view name) : key{name} {
  }
};

constexpr static std::byte record_start_marker{0xfa};
constexpr static std::byte record_end_marker{0xfb};

constexpr static std::byte list_start_marker{0xfc};
constexpr static std::byte list_end_marker{0xfd};

} // namespace detail::record_builder

class record_builder {
public:
  record_builder() {
    root_.mark_this_dead();
  }
  // accesses the currently building record
  [[nodiscard]] auto record() -> detail::record_builder::node_record*;

  [[nodiscard]] auto has_elements() -> bool {
    return root_.is_alive();
  }

  [[nodiscard]] auto type() -> tenzir::type; // TODO implement this. Maybe.

  // (re-)seeds the record builder with a given type. Already existant fields
  // are not removed, only possible conflict resolved towards string
  auto reseed(std::optional<tenzir::type> seed) -> void;

  /// tries to find a field with the given (nested) key
  [[nodiscard]] auto
  find_field_raw(std::string_view key) -> detail::record_builder::node_field*;

  /// tries to find a field with the given (nested) key for a data type
  template <detail::record_builder::non_structured_data_type T>
  [[nodiscard]] auto find_value_typed(std::string_view key) -> T*;

  using signature_type = typename detail::record_builder::signature_type;
  /// computes the "signature" of the currently built record.
  template <detail::record_builder::data_parsing_function Parser>
  auto append_signature_to(signature_type&, Parser& p,
                           std::optional<tenzir::type> seed
                           = std::nullopt) -> caf::error;

  /// clears the builder
  void clear();
  /// clears the builder and frees all memory
  void free();

  /// materializes the currently build record
  /// @param mark_dead whether to mark nodes in the record builder as dead
  [[nodiscard]] auto materialize(bool mark_dead = true) -> tenzir::record;
  /// commits the current record into the series builder
  /// @param mark_dead whether to mark nodes in the record builder as dead
  auto commit_to(series_builder&, bool mark_dead = true) -> void;

private:
  detail::record_builder::node_record root_;
};

template <detail::record_builder::non_structured_data_type T>
auto record_builder::find_value_typed(std::string_view key) -> T* {
  if (auto p = find_field_raw(key)) {
    return p->get_if<T>();
  }
  return nullptr;
}

template <detail::record_builder::data_parsing_function Parser>
auto record_builder::append_signature_to(signature_type& sig, Parser& p,
                                         std::optional<tenzir::type> seed)
  -> caf::error {
  if (seed) {
    auto* seed_as_record_type = caf::get_if<tenzir::record_type>(&*seed);
    TENZIR_ASSERT(seed_as_record_type);
    return root_.append_to_signature(sig, p, seed_as_record_type);
  }
  return root_.append_to_signature(sig, p);
}

namespace detail::record_builder {
template <data_parsing_function Parser>
auto node_record::append_to_signature(signature_type& sig, Parser& p,
                                      const tenzir::record_type* seed)
  -> caf::error {
  sig.push_back(record_start_marker);

  // if we have a seed, we need too ensure that all fields exist first
  if (seed) {
    for (const auto& [k, v] : seed->fields()) {
      try_field(k)->mark_this_relevant();
    }
  }
  // we are intentionally traversing `lookup_` here, because that is sorted by
  // name. this ensures that the signature computation will be the same
  for (const auto& [k, index] : lookup_) {
    auto& field = data_[index].value;
    if (field.affects_signature()) {
      if (seed) {
        bool handled_by_seed = false;
        // TODO is this a good idea????? I dont see any other way to
        // find the type for a field with a given name
        // a non-generator based API to get these would be ideal, so
        // we dont have to iterate for every key
        for (auto [seed_key, seed_type] : seed->fields()) {
          if (seed_key == k) {
            handled_by_seed = true;
            const auto key_bytes = as_bytes(k);
            sig.insert(sig.end(), key_bytes.begin(), key_bytes.end());
            auto e = field.append_to_signature(sig, p, &seed_type);
            if (e) {
              return e;
            }
            break;
          }
        }
        if (handled_by_seed) {
          continue;
        }
      }
      const auto key_bytes = as_bytes(k);
      sig.insert(sig.end(), key_bytes.begin(), key_bytes.end());
      auto e = field.append_to_signature(sig, p);
      if (e) {
        return e;
      }
    }
  }
  sig.push_back(record_end_marker);
  return {};
}

template <non_structured_data_type T>
auto node_field::data(T data) -> void {
  mark_this_alive();
  is_raw_ = false;
  data_.emplace<T>(std::move(data));
}

template <data_parsing_function Parser>
auto node_field::parse(Parser& p, const tenzir::type* seed) -> caf::error {
  if (not is_raw_) {
    return {};
  }
  TENZIR_ASSERT(std::holds_alternative<std::string>(data_));
  std::string& raw = std::get<std::string>(data_);
  auto res = p(std::move(raw), seed);
  if (res) {
    data(*res);
    return {};
  }
  return res.error();
}

template <data_parsing_function Parser>
auto node_field::append_to_signature(signature_type& sig, Parser& p,
                                     const tenzir::type* seed) -> caf::error {
  if (is_raw_) {
    auto e = parse(p, seed);
    if (e != caf::error{}) {
      return e;
    }
  }
  const auto visitor = detail::overload{
    [&sig, &p, seed](node_list& v) {
      const auto* ls = caf::get_if<list_type>(seed);
      if (seed and not ls) {
        return caf::make_error(ec::type_clash,
                               "field holds list but seed is not a list");
      }
      if (v.affects_signature() or ls) {
        return v.append_to_signature(sig, p, ls);
      }
      return caf::error{};
    },
    [&sig, &p, seed](node_record& v) {
      const auto* rs = caf::get_if<record_type>(seed);
      if (seed and not rs) {
        return caf::make_error(ec::type_clash,
                               "field holds record but seed is not a record");
      }
      if (v.affects_signature() or rs) {
        return v.append_to_signature(sig, p, rs);
      }
      return caf::error{};
    },
    [&sig, p, seed, this](caf::none_t&) {
      // none could be the result of pre-seeding or being built with a true null
      // via the API for the first case we need to ensure we continue doing
      // seeing if we have a seed
      if (seed) {
        if (auto sr = caf::get_if<tenzir::record_type>(seed)) {
          return record()->append_to_signature(sig, p, sr);
        }
        if (auto sl = caf::get_if<tenzir::list_type>(seed)) {
          return list()->append_to_signature(sig, p, sl);
        }
        sig.push_back(static_cast<std::byte>(seed->type_index()));
        return caf::error{};
      } else {
        constexpr static auto type_idx
          = caf::detail::tl_index_of<field_type_list, caf::none_t>::value;
        sig.push_back(static_cast<std::byte>(type_idx));
        return caf::error{};
      }
    },
    [&sig, seed]<non_structured_data_type T>(T&) {
      size_t type_idx = caf::detail::tl_index_of<field_type_list, T>::value;
      if (seed and type_idx != seed->type_index()) {
        // FIXME are there cases where we may want to still reconcile this?
        // technically if we run into this case, its an issue of the calling
        // parsers implementation, which did early parsing before knowing a seed
        return caf::make_error(ec::type_clash, "type mismatch between parsed "
                                               "event and selected schema");
      }
      sig.push_back(static_cast<std::byte>(type_idx));
      return caf::error{};
    },
    [](auto&) {
      TENZIR_UNREACHABLE();
      return caf::make_error(ec::unimplemented);
    },
  };
  return std::visit(visitor, data_);
}

static inline auto is_structural(size_t idx) -> bool {
  switch (idx) {
    case caf::detail::tl_index_of<field_type_list, node_list>::value:
    case caf::detail::tl_index_of<field_type_list, node_record>::value:
      return true;
    default:
      return false;
  }
}

constexpr static size_t type_index_empty
  = caf::detail::tl_size<field_type_list>::value;
  constexpr static size_t type_index_mismatch
  = caf::detail::tl_size<field_type_list>::value + 1;
constexpr static size_t type_index_list
  = caf::detail::tl_index_of<field_type_list, node_list>::value;
constexpr static size_t type_index_record
  = caf::detail::tl_index_of<field_type_list, node_record>::value;

static inline auto is_null(size_t idx) -> bool {
  return idx == caf::detail::tl_index_of<field_type_list, caf::none_t>::value;
}

static inline auto
update_type_index(size_t& old_index, size_t new_index) -> void {
  if ( old_index == type_index_mismatch ) {
    return;
  }
  if (old_index == new_index) {
    return;
  }
  if (is_null(new_index)) {
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
  old_index = type_index_mismatch;
}

template <non_structured_data_type T>
auto node_list::data(T data) -> void {
  mark_this_alive();
  if (auto* free = find_free()) {
    free->data(std::move(data));
    update_type_index(type_index_, free->current_index());
  } else {
    TENZIR_ASSERT(data_.size() <= 20'000, "Upper limit on list size reached.");
    data_.emplace_back(std::move(data));
    update_type_index(type_index_, data_.back().current_index());
  }
}

template <data_parsing_function Parser>
auto node_list::append_to_signature(
  signature_type& sig, Parser& p, const tenzir::list_type* seed) -> caf::error {
  sig.push_back(list_start_marker);
  if (data_.empty() and not seed) {
    ; // noop
  }
  else if ( type_index_ == type_index_mismatch ) {
    // FIXME implement manual type inference
  }
  else if ( is_structural(type_index_)) {
    if (seed) {
      const auto s = seed->value_type();
      auto e = data_.front().append_to_signature(sig, p, &s);
      if ( e ) {
        return e;
      }
    }
  }
  else {
    sig.push_back(static_cast<std::byte>(type_index_));
  }
  sig.push_back(list_end_marker);
  return {};
}
} // namespace detail::record_builder
} // namespace tenzir
