//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/data.hpp"
#include "tenzir/defaults.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/series.hpp"
#include "tenzir/series_builder.hpp"
#include "tenzir/type.hpp"
#include "tenzir/variant.hpp"
#include "tenzir/view.hpp"

#include <arrow/type_fwd.h>
#include <tsl/robin_map.h>

#include <chrono>
#include <concepts>
#include <iterator>
#include <memory>
#include <optional>
#include <string>
#include <string_view>
#include <type_traits>
#include <utility>
#include <variant>

namespace tenzir {
namespace detail::multi_series_builder {

using signature_type = std::vector<std::byte>;

class record_generator;

class field_generator {
public:
  field_generator(builder_ref origin) : var_{origin} {
  }
  field_generator(tenzir::data& raw, signature_type& sig)
    : var_{std::in_place_type<raw_type>, raw, sig} {
  }
  void data(data_view2 d);
  void data(tenzir::data d);
  auto record() -> record_generator;

private:
  struct raw_type {
    tenzir::data& raw;
    signature_type& sig;
  };

  std::variant<tenzir::builder_ref, raw_type> var_;
};

class record_generator {
public:
  explicit record_generator(tenzir::record_ref builder) : var_{builder} {
  }
  explicit record_generator(tenzir::record& raw, signature_type& sig)
    : var_{std::in_place_type<raw_type>, raw, sig} {
  }

  auto field(std::string_view name) -> field_generator;
  void field(std::string_view name, data data);

private:
  struct raw_type {
    tenzir::record& raw;
    signature_type& sig;
  };

  std::variant<tenzir::record_ref, raw_type> var_;
};
} // namespace detail::multi_series_builder

class multi_series_builder {
public:
  using record_generator = detail::multi_series_builder::record_generator;

  /// @returns a vector of all currently finished series
  [[nodiscard("The result of a flush must be handled")]]
  auto yield_ready() -> std::vector<series>;

  /// adds a record to the currently active builder
  [[nodiscard]] auto record() -> record_generator;

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

  multi_series_builder(policy_type policy, settings s)
    : policy_{std::move(policy)}, settings_{std::move(s)} {
      if ( auto p = get_policy<policy_merge>() ) {
        settings_.ordered = true; // merging mode is necessarily ordered
        merging_builder_= series_builder{ type_for_schema(p->seed_schema) };
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
  template <typename T>
  T* get_policy();
  // called internally once an event is complete.
  // this function is responsible for committing
  // the currently built event to its respective `series_builder`
  // this is only relevant for the precise mode
  void complete_last_event();

  // gets the next free index into `entries_`.
  std::optional<size_t> next_free_index() const;

  auto type_for_schema(const std::optional<std::string>&)
    -> std::optional<std::reference_wrapper<const type>>;
  auto type_for_schema(std::optional<std::string_view>)
    -> std::optional<std::reference_wrapper<const type>>;
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
  void append_ready_events( std::vector<series>&& new_events );

  /// GCs `series_builders` from `entries_` that satisfy the predicate
  /// the implementation is in the source file, since its a private/internal
  /// function and thus will only be instantiated by other member functions
  void garbage_collect_where(std::predicate<const entry_data&> auto pred);

  constexpr static size_t invalid_index = static_cast<size_t>(-1);
  using signature_type = typename detail::multi_series_builder::signature_type;

  policy_type policy_;
  settings settings_;

  std::vector<type> schemas_;

  // used when building a raw record in precise mode
  tenzir::record record_raw_;
  // used when building a raw record in precise mode
  signature_type signature_raw_;
  tsl::robin_map<signature_type, size_t, detail::hash_algorithm_proxy<>>
    signature_map_;
  tsl::robin_map<std::string, size_t, detail::hash_algorithm_proxy<>>
    schema_map_;
  series_builder merging_builder_;
  std::vector<entry_data> entries_;
  std::vector<series> ready_events_;
  std::chrono::steady_clock::time_point last_yield_time_
    = std::chrono::steady_clock::now();
  size_t active_index_ = invalid_index;
};

} // namespace tenzir
