//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/collect.hpp"

#include <tenzir/argument_parser.hpp>
#include <tenzir/plugin.hpp>

#include <memory>
#include <set>
#include <string>

namespace tenzir::plugins::show {

namespace {

struct operator_args {
  located<std::string> aspect;

  friend auto inspect(auto& f, operator_args& x) -> bool {
    return f.object(x)
      .pretty_name("operator_args")
      .fields(f.field("aspect", x.aspect));
  }
};

class show_operator final : public crtp_operator<show_operator> {
public:
  show_operator() = default;

  explicit show_operator(operator_args args) : args_{std::move(args)} {
  }

  auto operator()(operator_control_plane& ctrl) const
    -> generator<table_slice> {
    return get()->show(ctrl);
  }

  auto name() const -> std::string override {
    return "show";
  }

  auto detached() const -> bool override {
    return true;
  }

  auto location() const -> operator_location override {
    return get()->location();
  }

  auto optimize(expression const& filter, event_order order) const
    -> optimize_result override {
    (void)order;
    (void)filter;
    return do_not_optimize(*this);
  }

  friend auto inspect(auto& f, show_operator& x) -> bool {
    return f.apply(x.args_);
  }

private:
  auto get() const -> const aspect_plugin* {
    const auto* aspect = plugins::find<aspect_plugin>(args_.aspect.inner);
    TENZIR_ASSERT_CHEAP(aspect != nullptr);
    return aspect;
  }

  operator_args args_;
};

class plugin final : public virtual operator_plugin<show_operator> {
public:
  auto signature() const -> operator_signature override {
    return {.source = true};
  }

  auto parse_operator(parser_interface& p) const -> operator_ptr override {
    auto parser = argument_parser{"show", "https://docs.tenzir.com/next/"
                                          "operators/sources/show"};
    operator_args args;
    parser.add(args.aspect, "<aspect>");
    parser.parse(p);
    auto available = std::set<std::string>{};
    for (const auto& aspect : collect(plugins::get<aspect_plugin>()))
      available.insert(aspect->name());
    if (not available.contains(args.aspect.inner)) {
      diagnostic::error("aspect `{}` could not be found", args.aspect.inner)
        .primary(args.aspect.source)
        .hint("must be one of {}", fmt::join(available, ", "))
        .throw_();
    }
    return std::make_unique<show_operator>(std::move(args));
  }
};

} // namespace

} // namespace tenzir::plugins::show

TENZIR_REGISTER_PLUGIN(tenzir::plugins::show::plugin)
