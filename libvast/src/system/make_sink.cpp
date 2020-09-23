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

#include "vast/system/make_sink.hpp"

#include "vast/command.hpp"
#include "vast/defaults.hpp"
#include "vast/detail/make_io_stream.hpp"
#include "vast/format/ascii.hpp"
#include "vast/format/csv.hpp"
#include "vast/format/json.hpp"
#include "vast/format/make_writer.hpp"
#include "vast/format/null.hpp"
#include "vast/format/zeek.hpp"
#include "vast/system/sink.hpp"

#if VAST_HAVE_PCAP
#  include "vast/format/pcap.hpp"
#endif

#if VAST_HAVE_ARROW
#  include "vast/format/arrow.hpp"
#endif

#include <caf/actor.hpp>
#include <caf/actor_system.hpp>
#include <caf/expected.hpp>

#include <string>

namespace vast::system {

namespace {

template <class Writer>
caf::expected<caf::actor>
make_sink_impl(caf::actor_system& sys, const caf::settings& options) {
  auto writer = format::make_writer<Writer>(options);
  if (!writer)
    return writer.error();
  auto max_events = 0;
  return sys.spawn(sink<Writer>, std::move(*writer), max_events);
}

} // namespace

caf::expected<caf::actor>
make_sink(caf::actor_system& sys, const caf::settings& options,
          std::string output_format) {
  if (output_format == "zeek")
    return make_sink_impl<format::zeek::writer>(sys, options);
  if (output_format == "json")
    return make_sink_impl<format::json::writer>(sys, options);
#if VAST_HAVE_PCAP
  if (output_format == "pcap")
    return make_sink_impl<format::pcap::writer>(sys, options);
#endif
  if (output_format == "csv")
    return make_sink_impl<format::csv::writer>(sys, options);
#if VAST_HAVE_ARROW
  if (output_format == "arrow")
    return make_sink_impl<format::arrow::writer>(sys, options);
#endif
  if (output_format == "null")
    return make_sink_impl<format::null::writer>(sys, options);
  if (output_format == "ascii")
    return make_sink_impl<format::ascii::writer>(sys, options);
  return make_error(ec::invalid_argument,
                    output_format + " is not a valid output format");
}

} // namespace vast::system
