//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2024 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "tenzir/argument_parser.hpp"
#include "tenzir/multi_series_builder.hpp"

#include <tenzir/error.hpp>
#include <tenzir/module.hpp>
#include <tenzir/plugin.hpp>

namespace tenzir {

// adds the schema_only/no-infer option to a parser for use in parser-parsers
// this is outside of the `multi_series_builder_argument_parser`, since its needed for parsers that dont support any of the other options
void add_schema_only_option(argument_parser& parser, bool& schema_only);

/// simple utility to parse the command line arguments for a
/// multi_series_builder's settings and policy
struct multi_series_builder_argument_parser {
  multi_series_builder_argument_parser(
    multi_series_builder::settings_type settings = {},
    multi_series_builder::policy_type policy
    = multi_series_builder::policy_precise{})
    : settings_{std::move(settings)}, policy_{std::move(policy)} {
  }

public:
  auto add_to_parser(argument_parser& parser) -> void;

  auto get_settings() -> multi_series_builder::settings_type&;
  auto
  validated_policy(parser_interface& p) -> multi_series_builder::policy_type&;
  // If we leave these public, the json parser can keep supporting its old
  // options by checking/setting values here
  // TODO do we even want that?
  // private:
  multi_series_builder::settings_type settings_ = {};
  multi_series_builder::policy_type policy_
    = multi_series_builder::policy_precise{};

  bool merge_;

  // Policy merge & Policy default(precise)
  std::optional<located<std::string>> schema_;

  // Policy selector
  std::optional<located<std::string>> selector_;
  bool schema_only_ = false;
};

struct common_parser_options_parser {
  auto add_to_parser(argument_parser& parser) -> void {
    parser.add("--raw", raw_);
    parser.add("--unnest-separator", unnest_, "<nested-key-separator>");
  }

  auto get_unnest( ) -> std::optional<std::string> {
    if ( unnest_ ) {
      return unnest_->inner;
    }
    return std::nullopt;
  }
  bool get_raw() const {
    return raw_;
  }

private:
  std::optional<located<std::string>> unnest_;
  bool raw_ = false;
};

} // namespace tenzir