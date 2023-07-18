//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/expression.hpp"
#include "tenzir/operator_control_plane.hpp"
#include "tenzir/table_slice.hpp"
#include "tenzir/tag.hpp"

#include <caf/binary_serializer.hpp>
#include <caf/detail/stringification_inspector.hpp>
#include <caf/fwd.hpp>
#include <caf/save_inspector.hpp>
#include <fmt/core.h>

#include <memory>
#include <type_traits>
#include <variant>

namespace tenzir {

/// Variant of all pipeline operator input parameter types.
using operator_input
  = std::variant<std::monostate, generator<table_slice>, generator<chunk_ptr>>;

/// Variant of all pipeline operator output return types.
using operator_output
  = std::variant<generator<std::monostate>, generator<table_slice>,
                 generator<chunk_ptr>>;

/// Variant of all types that can be used for operators.
///
/// @note During instantiation, a type `T` normally corresponds to
/// `generator<T>`. However, an input type of `void` corresponds to
/// sources (which receive a `std::monostate`) and an otuput type of `void`
/// corresponds to sinks (which return a `generator<std::monostate>`).
using operator_type = tag_variant<void, table_slice, chunk_ptr>;

/// Concept for pipeline operator input element types.
template <class T>
concept operator_input_batch
  = std::is_same_v<T, table_slice> || std::is_same_v<T, chunk_ptr>;

inline auto to_operator_type(const operator_input& x) -> operator_type {
  return std::visit(
    []<class T>(const T&) -> operator_type {
      if constexpr (std::is_same_v<T, std::monostate>) {
        return tag_v<void>;
      } else {
        return tag_v<typename T::value_type>;
      }
    },
    x);
}

inline auto to_operator_type(const operator_output& x) -> operator_type {
  return std::visit(
    []<class T>(const generator<T>&) -> operator_type {
      if constexpr (std::is_same_v<T, std::monostate>) {
        return tag_v<void>;
      } else {
        return tag_v<T>;
      }
    },
    x);
}

/// User-friendly name for the given pipeline batch type.
template <class T>
constexpr auto operator_type_name() -> std::string_view {
  if constexpr (std::is_same_v<T, void> || std::is_same_v<T, std::monostate>) {
    return "void";
  } else if constexpr (std::is_same_v<T, table_slice>) {
    return "events";
  } else if constexpr (std::is_same_v<T, chunk_ptr>) {
    return "bytes";
  } else {
    static_assert(detail::always_false_v<T>, "not a valid element type");
  }
}

/// @see `operator_type_name<T>()`.
inline auto operator_type_name(operator_type type) -> std::string_view {
  return std::visit(
    []<class T>(tag<T>) {
      return operator_type_name<T>();
    },
    type);
}

/// @see `operator_type_name<T>()`.
inline auto operator_type_name(const operator_input& x) -> std::string_view {
  return operator_type_name(to_operator_type(x));
}

/// @see `operator_type_name<T>()`.
inline auto operator_type_name(const operator_output& x) -> std::string_view {
  return operator_type_name(to_operator_type(x));
}

/// Returns a trivially-true expression. This is a workaround for having no
/// empty conjunction (yet). It can also be used in a comparison to detect that
/// an expression is trivially-true.
inline auto trivially_true_expression() -> const expression& {
  static auto expr = expression{
    predicate{
      meta_extractor{meta_extractor::kind::schema},
      relational_operator::not_equal,
      data{std::string{"this expression matches everything"}},
    },
  };
  return expr;
}

/// The operator location.
enum class operator_location {
  local,    ///< Run this operator in a local process, e.g., `tenzir exec`.
  remote,   ///< Run this operator at a node.
  anywhere, ///< Run this operator where the previous operator ran.
};

auto inspect(auto& f, operator_location& x) {
  return detail::inspect_enum(f, x);
}

// TODO: Consider splitting this up and use alias instead.
struct inspector
  : std::variant<std::reference_wrapper<caf::serializer>,
                 std::reference_wrapper<caf::deserializer>,
                 std::reference_wrapper<caf::binary_serializer>,
                 std::reference_wrapper<caf::binary_deserializer>,
                 std::reference_wrapper<caf::detail::stringification_inspector>> {
  using variant::variant;

  auto is_loading() -> bool;

  void set_error(caf::error e);

  auto get_error() const -> const caf::error&;

  template <class T>
  [[nodiscard]] auto apply(T& x) -> bool {
    return std::visit(
      [&](auto& f) -> bool {
        return f.get().apply(x);
      },
      *this);
  }
};

struct [[nodiscard]] pipeline_op_metrics {
  // Metrics that track the total number of inbound and outbound elements that
  // passed through this operator.
  size_t index = 0;
  caf::timespan time_starting = {};
  caf::timespan time_running = {};
  caf::timespan time_scheduled = {};
  std::string in_unit = {};
  std::string out_unit = {};
  uint64_t inbound_total = {};
  uint64_t num_inbound_batches = {};
  double inbound_rate_per_second = {};
  uint64_t outbound_total = {};
  uint64_t num_outbound_batches = {};
  double outbound_rate_per_second = {};

  template <class Inspector>
  friend auto inspect(Inspector& f, pipeline_op_metrics& x) -> bool {
    return f.object(x)
      .pretty_name("pipeline_op_metrics")
      .fields(f.field("index", x.index),
              f.field("time_starting", x.time_starting),
              f.field("time_running", x.time_running),
              f.field("time_scheduled", x.time_scheduled),
              f.field("in_unit", x.in_unit), f.field("out_unit", x.out_unit),
              f.field("inbound_total", x.inbound_total),
              f.field("num_inbound_batches", x.num_inbound_batches),
              f.field("inbound_rate_per_second", x.inbound_rate_per_second),
              f.field("outbound_total", x.outbound_total),
              f.field("num_outbound_batches", x.num_outbound_batches),
              f.field("outbound_rate_per_second", x.outbound_rate_per_second));
  }
};

/// Base class of all pipeline operators. Commonly used as `operator_ptr`.
class operator_base {
public:
  virtual ~operator_base() = default;

  /// The name of this operator. There must be a `operator_serialization_plugin`
  /// with the same name.
  virtual auto name() const -> std::string = 0;

  /// Instantiates the pipeline operator for a given input.
  ///
  /// The implementation may assume that `*this` is not destroyed before the
  /// output generator. Furthermore, it must satisfy the following properties:
  /// - When the output generator is continously advanced, it must eventually
  ///   advance the input generator or terminate (this implies that it
  ///   eventually becomes exhausted after the input generator becomes
  ///   exhausted).
  /// - If the input generator is advanced, then the output generator must yield
  ///   before advancing the input again.
  virtual auto
  instantiate(operator_input input, operator_control_plane& ctrl) const
    -> caf::expected<operator_output>
    = 0;

  /// Copies the underlying pipeline operator. The default implementation is
  /// derived from `inspect()` and requires that it does not fail.
  virtual auto copy() const -> operator_ptr;

  /// Returns a textual representation of this operator for display and
  /// debugging purposes. Note that this representation is not necessarily
  /// parseable. The default implementation yields "<name> <stringification>".
  virtual auto to_string() const -> std::string;

  /// Tries to perform predicate pushdown with the given expression.
  ///
  /// Returns `std::nullopt` if predicate pushdown can not be performed.
  /// Otherwise, returns `std::pair{expr2, this2}` such that `this | where expr`
  /// is equivalent to `where expr2 | this2`, or alternatively `where expr2` if
  /// `this2 == nullptr`.
  virtual auto predicate_pushdown(expression const& expr) const
    -> std::optional<std::pair<expression, operator_ptr>> {
    (void)expr;
    return {};
  }

  /// Returns the location of the operator.
  virtual auto location() const -> operator_location {
    return operator_location::anywhere;
  }

  /// Returns whether the operator should be spawned in its own thread.
  virtual auto detached() const -> bool {
    return false;
  }

  /// Retrieve the output type of this operator for a given input.
  ///
  /// The default implementation will try to instantiate the operator and then
  /// discard the generator if successful. If instantiation has a side-effect
  /// that happens outside of the associated coroutine function, the
  /// `operator_base::infer_type_impl` function should be overwritten.
  inline auto infer_type(operator_type input) const
    -> caf::expected<operator_type> {
    return infer_type_impl(input);
  }

  /// @see `operator_base::infer_type(operator_type)`.
  template <class T>
  auto infer_type() const -> caf::expected<operator_type> {
    return infer_type(tag_v<T>);
  }

  /// Returns an error if this is not an `In -> Out` operator.
  template <class In, class Out>
  [[nodiscard]] inline auto check_type() const -> caf::expected<void> {
    auto out = infer_type<In>();
    if (!out) {
      return out.error();
    }
    if (!out->template is<Out>()) {
      return caf::make_error(ec::type_clash,
                             fmt::format("expected {} as output but got {}",
                                         operator_type_name<Out>(),
                                         operator_type_name(*out)));
    }
    return {};
  }

protected:
  virtual auto infer_type_impl(operator_type input) const
    -> caf::expected<operator_type>;
};

/// A pipeline is a sequence of pipeline operators.
class pipeline final : public operator_base {
public:
  /// Constructs an empty pipeline.
  pipeline() = default;

  pipeline(pipeline const& other);
  pipeline(pipeline&& other) noexcept = default;
  auto operator=(pipeline const& other) -> pipeline&;
  auto operator=(pipeline&& other) noexcept -> pipeline& = default;

  /// Constructs a pipeline from a sequence of operators. Flattens nested
  /// pipelines, for example `(a | b) | c` becomes `a | b | c`.
  explicit pipeline(std::vector<operator_ptr> operators);

  /// TODO
  static auto parse(std::string source, diagnostic_handler& diag)
    -> std::optional<pipeline>;

  // TODO: Remove or make it better.
  /// Replacement API for `legacy_parse`.
  static auto internal_parse(std::string_view repr) -> caf::expected<pipeline>;
  static auto internal_parse_as_operator(std::string_view repr)
    -> caf::expected<operator_ptr>;

  /// Adds an operator at the end of this pipeline.
  void append(operator_ptr op);

  /// Adds an operator at the start of this pipeline.
  void prepend(operator_ptr op);

  /// Returns the sequence of operators that this pipeline was built from.
  auto unwrap() && -> std::vector<operator_ptr>;
  auto operators() const& -> std::span<const operator_ptr>;
  auto operators() && = delete;

  /// Returns an optimized pipeline with pushed-down expressions.
  auto optimize() const -> caf::expected<pipeline>;

  /// Returns whether this is a well-formed `void -> void` pipeline.
  auto is_closed() const -> bool;

  /// Same as `predicate_pushdown`, but returns a `pipeline` object directly.
  auto predicate_pushdown_pipeline(expression const& expr) const
    -> std::optional<std::pair<expression, pipeline>>;

  auto location() const -> operator_location override {
    die("pipeline::location() must not be called");
  }

  auto detached() const -> bool override {
    die("pipeline::detached() must not be called");
  }

  auto instantiate(operator_input input, operator_control_plane& control) const
    -> caf::expected<operator_output> override;

  auto copy() const -> operator_ptr override;

  auto to_string() const -> std::string override;

  auto predicate_pushdown(expression const& expr) const
    -> std::optional<std::pair<expression, operator_ptr>> override;

  auto infer_type_impl(operator_type input) const
    -> caf::expected<operator_type> override;

  /// Support the CAF type inspection API.
  template <class Inspector>
  friend auto inspect(Inspector& f, pipeline& x) -> bool {
    // TODO: Replace asserts with checks once CAF reports inspection errors.
    if constexpr (Inspector::is_loading) {
      x.operators_.clear();
      auto ops = size_t{};
      if (!f.begin_sequence(ops)) {
        return false;
      }
      x.operators_.reserve(ops);
      for (auto i = size_t{0}; i < ops; ++i) {
        auto array_size = size_t{};
        if (!f.begin_associative_array(array_size)) {
          return false;
        }
        if (array_size != 1) {
          f.set_error(caf::make_error(ec::serialization_error,
                                      fmt::format("invalid array size of {}",
                                                  array_size)));
          return false;
        }
        auto plugin_name = std::string{};
        if (!f.begin_key_value_pair()) {
          return false;
        }
        auto g = inspector{f};
        auto op = deserialize_op(g);
        if (!op) {
          return false;
        }
        x.operators_.push_back(std::move(op));
        if (!(f.end_key_value_pair() && f.end_associative_array())) {
          return false;
        }
      }
      return f.end_sequence();
    } else {
      if (!f.begin_sequence(x.operators_.size())) {
        return false;
      }
      for (const auto& op : x.operators_) {
        auto g = inspector{f};
        if (!(f.begin_associative_array(1) && f.begin_key_value_pair()
              && serialize_op(*op, g) && f.end_key_value_pair()
              && f.end_associative_array())) {
          return false;
        }
      }
      return f.end_sequence();
    }
  }

  auto name() const -> std::string override {
    // TODO: Not anymore?
    // Normally, there must be a `operator_serialization_plugin` with this name.
    // However, pipelines are a special exception to this rule right now.
    return "<pipeline>";
  }

private:
  static auto deserialize_op(inspector& f) -> operator_ptr;

  static auto serialize_op(const operator_base& op, inspector& f) -> bool;

  std::vector<operator_ptr> operators_;
};

inline auto inspect(auto& f, operator_ptr& x) -> bool {
  // TODO: Is this the best way to do it?
  // TENZIR_ASSERT(x);
  // if (auto* pipe = dynamic_cast<pipeline*>(x.get())) {
  //   return f.apply(*pipe);
  // }
  return plugin_inspect(f, x);
}

/// Base class for defining operators using CRTP.
///
/// # Usage
/// Define some of the following functions as `operator()`:
/// - Source:    `() -> generator<Output>`
/// - Stateless: `Input -> Output`
/// - Stateful:  `generator<Input> -> generator<Output>`
/// The `operator_control_plane&` can also be appended as a parameter. The
/// result can optionally be wrapped in `caf::expected`, and `operator_output`
/// can be used in place of `generator<Output>`.
template <class Self>
class crtp_operator : public operator_base {
public:
  auto instantiate(operator_input input, operator_control_plane& ctrl) const
    -> caf::expected<operator_output> final {
    // We intentionally check for invocability with `Self&` instead of `const
    // Self&` to produce an error if the `const` is missing.
    auto f = detail::overload{
      [&](std::monostate) -> caf::expected<operator_output> {
        constexpr auto source = std::is_invocable_v<Self&>;
        constexpr auto source_ctrl
          = std::is_invocable_v<Self&, operator_control_plane&>;
        static_assert(source + source_ctrl <= 1,
                      "ambiguous operator definition: callable with both "
                      "`op()` and `op(ctrl)`");
        if constexpr (source) {
          return convert_output(self()());
        } else if constexpr (source_ctrl) {
          return convert_output(self()(ctrl));
        } else {
          return caf::make_error(ec::type_clash,
                                 fmt::format("'{}' cannot be used as a source",
                                             to_string()));
        }
      },
      [&]<class Input>(
        generator<Input> input) -> caf::expected<operator_output> {
        constexpr auto one = std::is_invocable_v<Self&, Input>;
        constexpr auto one_ctrl
          = std::is_invocable_v<Self&, Input, operator_control_plane&>;
        constexpr auto gen = std::is_invocable_v<Self&, generator<Input>>;
        constexpr auto gen_ctrl = std::is_invocable_v<Self&, generator<Input>,
                                                      operator_control_plane&>;
        static_assert(one + one_ctrl + gen + gen_ctrl <= 1,
                      "ambiguous operator definition: callable with more than "
                      "one of `op(x)`, `op(x, ctrl)`, `op(gen)` and `op(gen, "
                      "ctrl)`");
        if constexpr (one) {
          return std::invoke(
            [](generator<Input> input, const Self& self)
              -> generator<std::invoke_result_t<Self&, Input>> {
              for (auto&& x : input) {
                co_yield self(std::move(x));
              }
            },
            std::move(input), self());
        } else if constexpr (one_ctrl) {
          return std::invoke(
            [](generator<Input> input, operator_control_plane& ctrl,
               const Self& self)
              -> generator<
                std::invoke_result_t<Self&, Input, operator_control_plane&>> {
              for (auto&& x : input) {
                co_yield self(std::move(x), ctrl);
              }
            },
            std::move(input), ctrl, self());
        } else if constexpr (gen) {
          return convert_output(self()(std::move(input)));
        } else if constexpr (gen_ctrl) {
          return convert_output(self()(std::move(input), ctrl));
        } else {
          return caf::make_error(ec::type_clash,
                                 fmt::format("'{}' does not accept {} as input",
                                             to_string(),
                                             operator_type_name<Input>()));
        }
      },
    };
    return std::visit(f, std::move(input));
  }

  auto copy() const -> operator_ptr final {
    if constexpr (std::is_copy_constructible_v<Self>) {
      return std::make_unique<Self>(self());
    } else {
      return operator_base::copy();
    }
  }

private:
  auto self() const -> const Self& {
    static_assert(std::is_final_v<Self>);
    static_assert(std::is_base_of_v<crtp_operator, Self>);
    return static_cast<const Self&>(*this);
  }

  /// Converts the possible return types to `caf::expected<operator_output>`.
  ///
  /// This is mainly needed because `caf::expected` does not do implicit
  /// conversions for us.
  template <class T>
  static auto convert_output(caf::expected<generator<T>> x)
    -> caf::expected<operator_output> {
    if (!x) {
      return x.error();
    }
    return std::move(*x);
  }

  template <class T>
  static auto convert_output(T x) -> caf::expected<operator_output> {
    return x;
  }
};

template <class T>
struct remove_generator {
  using type = T;
};

template <class T>
struct remove_generator<generator<T>> {
  using type = T;
};

template <class T>
using remove_generator_t = typename remove_generator<T>::type;

/// Pipeline operator with a per-schema initialization.
///
/// Usage: Override `initialize` and `process`, perhaps `finish`. The
/// `output_type` can also be a `generator`.
template <class Self, class State, class Output = table_slice>
class schematic_operator : public crtp_operator<Self> {
public:
  using state_type = State;
  using output_type = Output;

  /// Returns the initial state for when a schema is first encountered.
  virtual auto initialize(const type& schema, operator_control_plane&) const
    -> caf::expected<state_type>
    = 0;

  /// Processes a single slice with the corresponding schema-specific state.
  virtual auto process(table_slice slice, state_type& state) const
    -> output_type
    = 0;

  auto
  operator()(generator<table_slice> input, operator_control_plane& ctrl) const
    -> generator<remove_generator_t<output_type>> {
    auto states = std::unordered_map<type, state_type>{};
    for (auto&& slice : input) {
      if (slice.rows() == 0) {
        co_yield {};
        continue;
      }
      auto it = states.find(slice.schema());
      if (it == states.end()) {
        auto state = initialize(slice.schema(), ctrl);
        if (!state) {
          ctrl.abort(state.error());
          break;
        }
        it = states.try_emplace(it, slice.schema(), std::move(*state));
      }
      auto result = process(std::move(slice), it->second);
      if constexpr (std::is_same_v<remove_generator_t<output_type>,
                                   output_type>) {
        co_yield std::move(result);
      } else {
        for (auto&& x : result) {
          co_yield std::move(x);
        }
      }
    }
  }
};

/// A copyable `operator_ptr`, to be used in CAF actor interfaces.
class operator_box : public operator_ptr {
public:
  operator_box() = default;

  operator_box(operator_ptr op) : operator_ptr{std::move(op)} {
  }

  operator_box(const operator_box& box)
    : operator_ptr{box ? box->copy() : nullptr} {
  }

  operator_box(operator_box&& box) = default;

  auto operator=(const operator_box& box) -> operator_box& {
    *this = operator_box{box};
    return *this;
  }

  auto operator=(operator_box&& box) -> operator_box& = default;

  auto unwrap() && -> operator_ptr {
    return std::move(*this);
  }

  friend auto inspect(auto& f, operator_box& x) -> bool {
    return inspect(f, static_cast<operator_ptr&>(x));
  }
};

/// Returns a generator that, when advanced, incrementally executes the given
/// pipeline on the current thread.
auto make_local_executor(pipeline p) -> generator<caf::expected<void>>;

} // namespace tenzir

template <class T>
struct fmt::formatter<
  T, char, std::enable_if_t<std::is_base_of_v<tenzir::operator_base, T>>> {
  constexpr auto parse(format_parse_context& ctx) {
    return ctx.begin();
  }

  template <class FormatContext>
  auto format(const tenzir::operator_base& value, FormatContext& ctx) const {
    auto str = value.to_string();
    return std::copy(str.begin(), str.end(), ctx.out());
  }
};

template <>
struct fmt::formatter<tenzir::operator_ptr> {
  constexpr auto parse(format_parse_context& ctx) {
    return ctx.begin();
  }

  template <class FormatContext>
  auto format(const tenzir::operator_ptr& value, FormatContext& ctx) const {
    if (value) {
      return fmt::formatter<tenzir::operator_base>{}.format(*value, ctx);
    } else {
      auto str = std::string_view{"nullptr"};
      return std::copy(str.begin(), str.end(), ctx.out());
    }
  }
};
