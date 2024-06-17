//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/defaults.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/record_builder.hpp"
#include "tenzir/series.hpp"
#include "tenzir/series_builder.hpp"
#include "tenzir/type.hpp"

#include <arrow/type_fwd.h>
#include <caf/error.hpp>
#include <tsl/robin_map.h>

#include <chrono>
#include <concepts>
#include <optional>
#include <string>
#include <string_view>
#include <utility>
#include <variant>

namespace tenzir {

class multi_series_builder;

namespace detail::multi_series_builder {

using signature_type = std::vector<std::byte>;

class list_generator;
class field_generator;

class record_generator {
  using raw_pointer = detail::record_builder::node_record*;

public:
  explicit record_generator(tenzir::record_ref builder) : var_{builder} {
  }
  explicit record_generator(raw_pointer raw) : var_{raw} {
  }
  /// adds a new field to the record and returns a generator for that field
  auto field(std::string_view name) -> field_generator;

private:
  std::variant<tenzir::record_ref, raw_pointer> var_;
};

class field_generator {
  using raw_pointer = detail::record_builder::node_field*;

public:
  field_generator(builder_ref origin) : var_{origin} {
  }
  field_generator(raw_pointer raw) : var_{raw} {
  }

  /// sets the value of the field to some data
  template <tenzir::detail::record_builder::non_structured_data_type T>
  void data(T d) {
    const auto visitor = detail::overload{
      [&](tenzir::builder_ref& b) {
        b.data(d);
      },
      [&](raw_pointer raw) {
        raw->data(d);
      },
    };
    return std::visit(visitor, var_);
  }

  /// sets the value of the field an empty record and returns a generator for
  /// the record
  auto record() -> record_generator;

  /// sets the value of the field an empty list and returns a generator for the
  /// list
  auto list() -> list_generator;

  /// sets the value of the field to null
  void null();

private:
  std::variant<tenzir::builder_ref, raw_pointer> var_;
};

class list_generator {
  using raw_pointer = detail::record_builder::node_list*;

public:
  list_generator(builder_ref origin) : var_{origin} {
  }
  list_generator(raw_pointer raw) : var_{raw} {
  }

  /// appends a data value T to the list
  template <tenzir::detail::record_builder::non_structured_data_type T>
  void data(T d) {
    const auto visitor = detail::overload{
      [&](tenzir::builder_ref& b) {
        b.data(d);
      },
      [&](raw_pointer raw) {
        raw->data(d);
      },
    };
    return std::visit(visitor, var_);
  }
  /// appends a record to the list and returns a generator for the record
  auto record() -> record_generator;

  /// appends a list to the list and returns a generator for the list
  auto list() -> list_generator;

  /// append a null value to the list
  void null();

private:
  std::variant<tenzir::builder_ref, raw_pointer> var_;
};
} // namespace detail::multi_series_builder

class multi_series_builder {
public:
  friend class detail::multi_series_builder::record_generator;
  friend class detail::multi_series_builder::field_generator;
  friend class detail::multi_series_builder::list_generator;
  using record_generator = detail::multi_series_builder::record_generator;

  /// @returns a vector of all currently finished series
  [[nodiscard("The result of a flush must be handled")]]
  auto yield_ready() -> std::vector<series>;

  [[nodiscard("The result of a flush must be handled")]]
  auto last_errors() -> std::vector<caf::error>; // FIXME implement this

  /// adds a record to the currently active builder
  [[nodiscard]] auto record() -> record_generator;

  /// drops the last event from active builder
  void remove_last();

  [[nodiscard("The result of a flush must be handled")]]
  auto finalize() -> std::vector<series>;

  // this policy will merge all events into a single schema
  struct policy_merge {
    // whether to reset/clear the schema on yield
    bool reset_on_yield = false;
    // a schema name to seed with. If this is given
    std::optional<std::string> seed_schema = {};
  };

  // this policy will keep all schemas in separate batches
  struct policy_default {
    // If this is given, all resulting events will have exactly this schema
    // * all fields in the schema but not in the event will be null
    std::optional<std::string> seed_schema = {};
  };

  // this policy will keep all schemas in batches according to selector
  struct policy_selector {
    // the field name to use for selection
    std::string field_name;
    // a naming prefix, doing the following transformation on the name:
    // selector("event_type", "suricata")
    // => {"event_type": "flow"}
    // => "suricata.flow"
    std::optional<std::string> naming_prefix = {};
  };

  using policy_type
    = std::variant<policy_merge, policy_default, policy_selector>;

  struct settings {
    // the default name given to a schema
    std::string default_name = "tenzir.unknown";
    // whether the output should adhere to the input order
    bool ordered = true;
    // timeout after which events will be yielded regardless of whether the
    // desired batch size has been reached
    std::chrono::steady_clock::duration timeout
      = defaults::import::batch_timeout;
    // batch size after which the events should be yielded
    size_t desired_batch_size = defaults::import::table_slice_size;
  };

  multi_series_builder(policy_type policy, settings s,
                       std::vector<type> schemas = {})
    : policy_{std::move(policy)},
      settings_{std::move(s)},
      schemas_{std::move(schemas)} {
    if (auto p = get_policy<policy_merge>()) {
      settings_.ordered = true; // merging mode is necessarily ordered
      merging_builder_ = series_builder{
        type_for_schema(p->seed_schema.value_or(settings_.default_name))};
    }
  }

  multi_series_builder(const multi_series_builder&) = delete;
  multi_series_builder& operator=(const multi_series_builder&) = delete;
  multi_series_builder(multi_series_builder&&) = delete;
  multi_series_builder& operator=(multi_series_builder&&) = delete;

  ~multi_series_builder() {
    const auto remaining_events = finalize();
    TENZIR_ASSERT(remaining_events.size() == 0,
                  "Please 'co_yield 'msb.finish_all_events()'"
                  " at before the end of msb's lifetime.");
  }

private:
  /// gets a pointer to the active policy, if its the given one.
  /// the implementation is in the source file, since its a private/internal
  /// function and thus will only be instantiated by other member functions
  template <typename T>
  T* get_policy();

  // called internally once an event is complete.
  // this function is responsible for committing
  // the currently built event to its respective `series_builder`
  // this is only relevant for the precise mode
  void complete_last_event();

  // clears the currently build raw event
  void clear_raw_event();

  // gets the next free index into `entries_`.
  std::optional<size_t> next_free_index() const;

  auto type_for_schema(std::string_view str)
    -> std::optional<std::reference_wrapper<const type>>;

  struct entry_data {
    explicit entry_data(std::string name,
                        std::optional<std::reference_wrapper<const type>> schema
                        = std::nullopt)
      : name{std::move(name)},
        builder{schema},
        flushed{std::chrono::steady_clock::now()} {
    }

    auto flush() -> std::vector<series> {
      flushed = std::chrono::steady_clock::now();
      return builder.finish();
    }

    std::string name;
    series_builder builder;
    std::chrono::steady_clock::time_point flushed;
    bool unused = false;
  };

  /// finishes all events that satisfy the predicate.
  /// these events are moved out of their respective series_builders and into
  /// `ready_events_`
  /// the implementation is in the source file, since its a private/internal
  /// function and thus will only be instantiated by other member functions
  void make_events_available_where(std::predicate<const entry_data&> auto pred);

  /// appends `new_events` to `ready_events_`
  void append_ready_events(std::vector<series>&& new_events);

  /// GCs `series_builders` from `entries_` that satisfy the predicate
  /// the implementation is in the source file, since its a private/internal
  /// function and thus will only be instantiated by other member functions
  void garbage_collect_where(std::predicate<const entry_data&> auto pred);

  constexpr static size_t invalid_index = static_cast<size_t>(-1);
  using signature_type = typename record_builder::signature_type;

  policy_type policy_;
  settings settings_;
  std::function<caf::expected<tenzir::data>(std::string,const tenzir::type*)> parser_;
  std::vector<type> schemas_;

  record_builder builder_raw_;
  signature_type signature_raw_;
  tsl::robin_map<signature_type, size_t, detail::hash_algorithm_proxy<>>
    signature_map_;
  series_builder merging_builder_;
  std::vector<entry_data> entries_;
  std::vector<series> ready_events_;
  std::vector<caf::error> errors_;
  std::chrono::steady_clock::time_point last_yield_time_
    = std::chrono::steady_clock::now();
  size_t active_index_ = invalid_index;
};

} // namespace tenzir
