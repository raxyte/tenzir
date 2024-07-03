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

/// simple utility to parse the command line arguments for a
/// multi_series_builder's settings
struct multi_series_builder_settings_parser {
public:
  multi_series_builder_settings_parser(
    multi_series_builder::settings_type settings = {})
    : settings_{std::move(settings)} {
  }

  auto add_to_parser(argument_parser& parser) -> void;

  auto get_settings() -> multi_series_builder::settings_type&;

private:
  std::optional<located<std::string>> default_name_;
  bool schema_only_ = false;
  std::optional<located<size_t>> desired_batch_size_;
  std::optional<located<duration>> timeout_;
  multi_series_builder::settings_type settings_;
};

struct multi_series_builder_policy_parser {
  multi_series_builder_policy_parser(multi_series_builder::policy_type policy
                                     = multi_series_builder::policy_precise{})
    : policy_{std::move(policy)} {
  }

public:
  auto add_to_parser(argument_parser& parser) -> void;

  auto
  validated_policy(const multi_series_builder::settings_type& settings,
                   parser_interface& p) -> multi_series_builder::policy_type&;
  // If we leave these public, the json parser can keep supporting its old
  // options by checking/setting values here
  // TODO do we even want that?
  // private:
  /// the string passed to `--policy`
  std::optional<located<std::string>> policy_str_;
  multi_series_builder::policy_type policy_
    = multi_series_builder::policy_precise{};

  // Policy merge
  bool reset_on_yield_ = false;

  // Policy merge & Policy default(precise)
  std::optional<located<std::string>> schema_;

  // Policy selector
  std::optional<located<std::string>> selector_;
  std::optional<located<std::string>> naming_prefix_;
};

} // namespace tenzir