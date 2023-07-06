//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2016 The VAST Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include "vast/fwd.hpp"

#include "vast/detail/inspection_common.hpp"

#include <caf/error.hpp>
#include <caf/make_message.hpp>
#include <caf/message.hpp>
#include <fmt/format.h>

namespace vast {

/// VAST's error codes.
enum class ec : uint8_t {
  /// No error.
  no_error = 0,
  /// The unspecified default error code.
  unspecified,
  /// Requested file does not exist.
  no_such_file,
  /// An error while accessing the filesystem.
  filesystem_error,
  /// Expected a different type.
  type_clash,
  /// The operation does not support the given operator.
  unsupported_operator,
  /// Failure during parsing.
  parse_error,
  /// Failure during printing.
  print_error,
  /// Failed to convert one type to another.
  convert_error,
  /// Malformed query expression.
  invalid_query,
  /// An error with an input/output format.
  format_error,
  /// Exhausted the input.
  end_of_input,
  /// A timeout was reached.
  timeout,
  /// An input didn't produce any data.
  stalled,
  /// An operation did not run to completion.
  incomplete,
  /// Encountered two incompatible versions.
  version_error,
  /// A command does not adhere to the expected syntax.
  syntax_error,
  /// A dictionary or table lookup failed to return a value.
  lookup_error,
  /// An error caused by wrong internal application logic.
  logic_error,
  /// Deserialization failed because an unknown implementation type was found.
  invalid_table_slice_type,
  /// Deserialization failed because an unknown implementation type was found.
  invalid_synopsis_type,
  /// A command failed, because the remote node failed.
  remote_node_down,
  /// A command failed because it received an invalid argument.
  invalid_argument,
  /// A command failed because it received an invalid result.
  invalid_result,
  /// A command failed because its configuration was invalid.
  invalid_configuration,
  /// A command failed, because its arguments contained an unrecognized option.
  unrecognized_option,
  /// A command failed, because it couldn't find a requested subcommand.
  invalid_subcommand,
  /// A command failed, because the command line failed to select a subcommand.
  missing_subcommand,
  /// A command failed because a component is missing.
  missing_component,
  /// Encountered a currently unimplemented code path or missing feature.
  unimplemented,
  /// A recursive function has reached its maximum call depth.
  recursion_limit_reached,
  /// An error that shall print nothing in the render function.
  silent,
  /// Insufficient memory.
  out_of_memory,
  /// An error from interacting with the operating system.
  system_error,
  /// An breaking version change.
  breaking_change,
  /// An error during serialization
  serialization_error,
  /// No error; number of error codes.
  ec_count,
};

/// @relates ec
const char* to_string(ec x);

/// A formatting function that converts an error into a human-readable string.
/// @relates ec
std::string render(caf::error err);

template <class Inspector>
auto inspect(Inspector& f, ec& x) {
  return detail::inspect_enum(f, x);
}

template <class... Ts>
auto add_context(const caf::error& error, fmt::format_string<Ts...> str,
                 Ts&&... xs) -> caf::error {
  return caf::error{
    error.code(), error.category(),
    caf::message::concat(
      error.context(),
      caf::make_message(fmt::format(std::move(str), std::forward<Ts>(xs)...)))};
}

} // namespace vast

CAF_ERROR_CODE_ENUM(vast::ec)
