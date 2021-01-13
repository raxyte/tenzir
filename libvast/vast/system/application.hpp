/******************************************************************************
 *                    _   _____   __________                                  *
 *                   | | / / _ | / __/_  __/     Visibility                   *
 *                   | |/ / __ |_\ \  / /          Across                     *
 *                   |___/_/ |_/___/ /_/       Space and Time                 *
 *                                                                            *
 * This file is part of VAST. It is subject to the license terms in the       *
 * LICENSE file found in the top-level directory of this distribution and at  *
 * http://vast.io/license. No part of VAST, including this file, may be       *
 * copied, modified, propagated, or distributed except according to the terms *
 * contained in the LICENSE file.                                             *
 ******************************************************************************/

#pragma once

#include "vast/command.hpp"

#include <memory>
#include <string>
#include <string_view>
#include <utility>

namespace vast::system {

/// Creates the applications command tree based on a single root command.
/// @returns the root command.
std::pair<std::unique_ptr<vast::command>, vast::command::factory>
make_application(std::string_view path);

/// Formats a useful human readable error message on the output stream.
/// @param root The root command of the application.
/// @param err An error generated by the application.
/// @param os The output stream to write to.
void render_error(const command& root, const caf::error& err, std::ostream& os);

/// @returns default options for source commands.
command::opts_builder source_opts(std::string_view category);

/// @returns default options for JSON-based source commands.
command::opts_builder source_opts_json(std::string_view category);

/// @returns defaults options for sink commands.
command::opts_builder sink_opts(std::string_view category);

/// @returns default options for commands.
command::opts_builder opts(std::string_view category);

} // namespace vast::system
