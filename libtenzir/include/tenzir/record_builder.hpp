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
#include "tenzir/detail/flat_map.hpp"
#include "tenzir/series_builder.hpp"

#include <caf/detail/type_list.hpp>

#include <cstddef>
#include <string>
#include <utility>
#include <variant>
#include <vector>

namespace tenzir {

class record_builder;

namespace detail::record_builder {
// clang-format off
using atomic_types = caf::detail::type_list<
  caf::none_t,
  bool,
  int64_t,
  uint64_t,
  double,
  duration,
  time,
  std::string,
  pattern,
  ip,
  subnet,
  enumeration,
  blob
>;
// clang-format on

template <typename T>
concept non_structured_data_type
  = caf::detail::tl_contains<atomic_types, T>::value;

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
  auto is_dead() const -> bool;
  auto is_alive() const -> bool;
  auto affects_signature() const -> bool;
  auto clear() -> void;
  state state_;
};

class node_record;
class node_field;
class node_list;
// clang-format off
using field_type_list = caf::detail::tl_union_t<
    atomic_types,
    caf::detail::type_list<node_list,node_record, std::monostate>
  >;
// clang-format on

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
  auto field(std::string_view name) -> node_field*;

private:
  // tries to get a field with the given name. Does not affect any field state
  auto try_field(std::string_view name) -> node_field*;
  // (re-)seeds the field to match the given type. If the field is alive, this
  // has no effect
  auto reseed(const tenzir::record_type& t) -> void;
  // does lookup of a (nested( key
  auto at(std::string_view key) -> node_field*;
  // writes the record into a series builder
  auto commit_to(tenzir::record_ref r) -> void;
  // append the signature of this record to `sig`.
  // including sentinels is important for signature computation
  auto append_to_signature(signature_type& sig, const tenzir::record_type* seed
                                                = nullptr) -> void;
  // clears the record by marking everything as dead
  auto clear() -> void;

  // record entry. contains a string for the key and a field
  // its defined out of line because field cannot be defined at this point
  struct entry_type;
  // this stores added fields in order of their appearance
  // this order is used for committing to the series builder
  std::vector<entry_type> data_;
  // this is a SORTED key -> index map. this is used for signature computation
  // if this map is not sorted, the signature computation algorithm breaks
  flat_map<std::string, size_t> lookup_;
};

// TODO support structured data by pulling it apart in `field.data` and
// `list.data` calls

class node_list : public node_base {
  friend class node_record;
  friend class node_field;

public:
  /// reserves storage for at least N elements in the record.
  /// this function can be used to get temporary pointer stability on the
  /// records elements
  auto reserve(size_t N) -> void;
  /// adds a new value to the list
  template <non_structured_data_type T>
  auto data(T data) -> void;
  /// adds a null value to the list
  auto null() -> void;
  /// adds a new record to the list
  /// @note the returned pointer is not permanently stable. If the underlying
  /// vector reallocates, the pointer becomes invalid
  /// @ref reserve can be used to ensure stability for a given number of elements
  auto record() -> node_record*;
  /// adds a new list to the list
  /// @note the returned pointer is not permanently stable. If the underlying
  /// vector reallocates, the pointer becomes invalid
  /// @ref reserve can be used to ensure stability for a given number of elements
  auto list() -> node_list*;

private:
  /// finds an element marked as dead. This is part of the reallocation optimization.
  auto find_free() -> node_field*;

  // (re-)seeds the field to match the given type. If the field is alive, this
  // has no effect
  auto reseed(const tenzir::list_type&) -> void;
  // writes the list into a series builder
  auto commit_to(tenzir::builder_ref r) -> void;
  // append the signature of this list to `sig`.
  // including sentinels is important for signature computation
  auto append_to_signature(signature_type& sig, const tenzir::list_type* seed
                                                = nullptr) -> void;
  auto clear() -> void;

  size_t type_index_;
  std::vector<node_field> data_;
};

class node_field : public node_base {
  friend class node_record;
  friend class node_list;
  friend struct node_record::entry_type;
  friend class ::tenzir::record_builder;

public:
  template <non_structured_data_type T>
  auto data(T data) -> void;
  auto null() -> void;
  auto record() -> node_record*;
  auto list() -> node_list*;

  node_field() : data_{std::in_place_type<std::monostate>} {
  }
  template <non_structured_data_type T>
  node_field(T data) : data_{std::in_place_type<T>, data} {
  }

private:
  auto current_index() const -> size_t {
    return data_.index();
  }
  template <typename T>
  auto is() const -> bool {
    return std::holds_alternative<T>(data_);
  }
  auto is_incomplete() const -> bool {
    return is<std::monostate>();
  }
  template <typename T>
  auto get_if() -> T* {
    return std::get_if<T>(&data_);
  }
  // (re-)seeds the field to match the given type. If the field is alive, this
  // has no effect
  auto reseed(const tenzir::type&) -> void;
  // writes the field into a series builder
  auto commit_to(tenzir::builder_ref r) -> void;
  // append the signature of this field to `sig`.
  // including sentinels is important for signature computation
  auto append_to_signature(signature_type& sig, const tenzir::type* seed
                                                = nullptr) -> void;
  auto clear() -> void;

  // clang-format off
  using field_variant_type = caf::detail::tl_apply_t<
   field_type_list,
    std::variant
  >;
  // clang-format on

  field_variant_type data_;
};

struct node_record::entry_type {
  std::string key;
  node_field value;

  entry_type(std::string_view name) : key{name} {
  }
};

} // namespace detail::record_builder

class record_builder {
public:
  // starts a new record in this builder
  auto record() -> detail::record_builder::node_record*;

  auto is_empty() -> bool {
    return root_.state_ != detail::record_builder::state::dead;
  }

  auto type() -> tenzir::type; // TODO implement this. Maybe.

  // (re-)seeds the record builder with a given type. Already existant fields
  // are not removed, only possible conflict resolved towards string
  auto reseed(std::optional<tenzir::type> seed) -> void;

  /// tries to find a field with the given (nested) key
  auto
  find_field_raw(std::string_view key) -> detail::record_builder::node_field*;

  /// tries to find a field with the given (nested) key for a data type
  template <detail::record_builder::non_structured_data_type T>
  auto find_value_typed(std::string_view key) -> T*;

  /// TODO it may still be possible to compute the signature "live"
  /// each node would need a pointer to the builder to write to a member there.
  /// overwrites would then trigger a recompute
  /// this depends on whether we have an insertion order stable map
  using signature_type = typename detail::record_builder::signature_type;
  /// computes the "signature" of the currently built record.
  auto append_signature_to(signature_type&,
                           std::optional<tenzir::type> seed) -> void;

  /// clears the builder
  void clear();
  /// clears the builder and frees all memory
  void free();

  /// materializes the currently build record
  auto materialize() const -> tenzir::record; // TODO implement this
  /// commits the current record into the series builder
  void commit_to(series_builder&);

private:
  detail::record_builder::node_record root_;
};
} // namespace tenzir