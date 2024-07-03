
//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/multi_series_builder_argument_parser.hpp"

#include "tenzir/location.hpp"

namespace tenzir {
namespace {
struct selector {
  std::optional<std::string> prefix;
  std::string field_name;
};

auto parse_selector(std::string_view x, location source) -> selector {
  auto split = detail::split(x, ":");
  TENZIR_ASSERT(!x.empty());
  if (split.size() > 2 or split[0].empty()) {
    diagnostic::error("invalid selector `{}`: must contain at most "
                      "one `:` and field name must not be empty",
                      x)
      .primary(source)
      .throw_();
  }
  return selector{
    split.size() == 2 ? std::optional{std::string(std::move(split[1]))}
                      : std::nullopt,
    std::string(split[0]),
  };
}
} // namespace

auto multi_series_builder_settings_parser::add_to_parser(argument_parser& p)
  -> void {
  p.add("--fallback-name", default_name_, "<fallback-name>");
  p.add("--schema-only", schema_only_);
  p.add("--timeout", timeout_, "<timeout>");
}

auto multi_series_builder_settings_parser::get_settings()
  -> multi_series_builder::settings_type& {
  if (default_name_) {
    settings_.default_name = std::move(default_name_->inner);
  }
  settings_.schema_only = schema_only_;
  if (desired_batch_size_) {
    settings_.desired_batch_size = std::move(desired_batch_size_->inner);
  }
  if (timeout_) {
    settings_.timeout = std::move(timeout_->inner);
  }
  return settings_;
}

auto multi_series_builder_policy_parser::add_to_parser(argument_parser& parser)
  -> void {
  parser.add("--policy", policy_str_, "<policy>");
  parser.add("--reset-per-batch", reset_on_yield_);
  parser.add("--schema", schema_, "<schema>");
  parser.add("--selector", selector_, "<selector>");
}

auto multi_series_builder_policy_parser::validated_policy(
  const multi_series_builder::settings_type& settings,
  parser_interface& p) -> multi_series_builder::policy_type& {
  auto policy_name = multi_series_builder::policy_precise::name;
  if (policy_str_) {
    policy_name = policy_str_->inner; // policy default
  }
  // policy detection
  if (policy_name == multi_series_builder::policy_merge::name) {
    policy_ = multi_series_builder::policy_merge{};
  } else if (policy_name == multi_series_builder::policy_precise::name) {
    policy_ = multi_series_builder::policy_precise{};
  } else if (policy_name == multi_series_builder::policy_selector::name) {
    policy_ = multi_series_builder::policy_selector{};
  } else {
    diagnostic::error("given policy is invalid")
      .primary(policy_str_->source)
      .throw_();
  }
  // policy specific options & checks
  if (auto pol = std::get_if<multi_series_builder::policy_merge>(&policy_)) {
    pol->reset_on_yield = reset_on_yield_;
    if (schema_) {
      pol->seed_schema = std::move(schema_->inner);
    } else if (settings.schema_only) {
      diagnostic::error("`--schema-only` requires a schema to be selected")
        .primary(p.current_span())
        .throw_();
    }
    if (selector_) {
      diagnostic::error(
        "when using the merging policy, a selector must not be provided")
        .primary(policy_str_->source)
        .primary(selector_->source)
        .throw_();
    }
  } else if (auto pol
             = std::get_if<multi_series_builder::policy_precise>(&policy_)) {
    if (schema_) {
      pol->seed_schema = std::move(schema_->inner);
    } else if (settings.schema_only) {
      diagnostic::error("`--schema-only` requires a schema to be selected")
        .primary(p.current_span())
        .throw_();
    }
    if (selector_) {
      diagnostic::error(
        "when using the precise policy, a selector must not be provided")
        .primary(policy_str_->source)
        .primary(selector_->source)
        .throw_();
    }
    if (reset_on_yield_) {
      diagnostic::error("when using the precise policy, the reset-on-yield "
                        "option has no effect")
        .primary(p.current_span())
        .throw_();
    }
  } else if (auto pol
             = std::get_if<multi_series_builder::policy_selector>(&policy_)) {
    if (not selector_) {
      diagnostic::error(
        "when using the selector policy, a selector must be provided")
        .primary(p.current_span())
        .throw_();
    }
    if (schema_) {
      diagnostic::error(
        "when using the selector policy, a schema must not be provided")
        .primary(policy_str_->source)
        .primary(selector_->source)
        .throw_();
    }
    if (reset_on_yield_) {
      diagnostic::error("when using the selector policy, the reset-on-yield "
                        "option has no effect")
        .primary(p.current_span())
        .throw_();
    }
    auto [prefix, field_name]
      = parse_selector(selector_->inner, selector_->source);
    pol->field_name = std::move(field_name);
    pol->naming_prefix = std::move(*prefix);
  }
  return policy_;
}
} // namespace tenzir