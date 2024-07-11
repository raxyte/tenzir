//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include <tenzir/argument_parser.hpp>
#include <tenzir/arrow_table_slice.hpp>
#include <tenzir/cast.hpp>
#include <tenzir/concept/parseable/tenzir/data.hpp>
#include <tenzir/concept/printable/tenzir/json.hpp>
#include <tenzir/config_options.hpp>
#include <tenzir/defaults.hpp>
#include <tenzir/detail/assert.hpp>
#include <tenzir/detail/env.hpp>
#include <tenzir/detail/heterogeneous_string_hash.hpp>
#include <tenzir/detail/padded_buffer.hpp>
#include <tenzir/detail/string_literal.hpp>
#include <tenzir/diagnostics.hpp>
#include <tenzir/generator.hpp>
#include <tenzir/modules.hpp>
#include <tenzir/multi_series_builder.hpp>
#include <tenzir/multi_series_builder_argument_parser.hpp>
#include <tenzir/operator_control_plane.hpp>
#include <tenzir/plugin.hpp>
#include <tenzir/series_builder.hpp>
#include <tenzir/to_lines.hpp>
#include <tenzir/try_simdjson.hpp>

#include <arrow/record_batch.h>
#include <caf/detail/is_one_of.hpp>
#include <caf/typed_event_based_actor.hpp>
#include <fmt/format.h>

#include <chrono>
#include <simdjson.h>

namespace tenzir::plugins::json {

namespace {

inline auto split_at_crlf(generator<chunk_ptr> input)
  -> generator<std::optional<simdjson::padded_string_view>> {
  auto buffer = std::string{};
  bool ended_on_carriage_return = false;
  for (auto&& chunk : input) {
    if (!chunk || chunk->size() == 0) {
      co_yield std::nullopt;
      continue;
    }
    const auto* begin = reinterpret_cast<const char*>(chunk->data());
    const auto* const end = begin + chunk->size();
    if (ended_on_carriage_return && *begin == '\n') {
      ++begin;
    };
    ended_on_carriage_return = false;
    for (const auto* current = begin; current != end; ++current) {
      if (*current != '\n' && *current != '\r') {
        continue;
      }
      const auto capacity = static_cast<size_t>(end - begin);
      const auto size = static_cast<size_t>(current - begin);
      if (buffer.empty() and capacity >= size + simdjson::SIMDJSON_PADDING) {
        co_yield simdjson::padded_string_view{begin, size, capacity};
      } else {
        buffer.append(begin, current);
        buffer.reserve(buffer.size() + simdjson::SIMDJSON_PADDING);
        co_yield simdjson::padded_string_view{buffer};
        buffer.clear();
      }
      if (*current == '\r') {
        auto next = current + 1;
        if (next == end) {
          ended_on_carriage_return = true;
        } else if (*next == '\n') {
          ++current;
        }
      }
      begin = current + 1;
    }
    buffer.append(begin, end);
    co_yield std::nullopt;
  }
  if (!buffer.empty()) {
    buffer.reserve(buffer.size() + simdjson::SIMDJSON_PADDING);
    co_yield simdjson::padded_string_view{buffer};
  }
}
inline auto split_at_null(generator<chunk_ptr> input, char split)
  -> generator<std::optional<simdjson::padded_string_view>> {
  auto buffer = std::string{};
  for (auto&& chunk : input) {
    if (!chunk || chunk->size() == 0) {
      co_yield std::nullopt;
      continue;
    }
    const auto* begin = reinterpret_cast<const char*>(chunk->data());
    const auto* const end = begin + chunk->size();
    for (const auto* current = begin; current != end; ++current) {
      if (*current != split) {
        continue;
      }
      const auto size = static_cast<size_t>(current - begin);
      const auto capacity = static_cast<size_t>(end - begin);
      if (buffer.empty() and capacity >= size + simdjson::SIMDJSON_PADDING) {
        co_yield simdjson::padded_string_view{begin, size, capacity};
      } else {
        buffer.append(begin, current);
        buffer.reserve(buffer.size() + simdjson::SIMDJSON_PADDING);
        co_yield simdjson::padded_string_view{buffer};
        buffer.clear();
      }
      begin = current + 1;
    }
    buffer.append(begin, end);
    co_yield std::nullopt;
  }
  if (!buffer.empty()) {
    buffer.reserve(buffer.size() + simdjson::SIMDJSON_PADDING);
    co_yield simdjson::padded_string_view{buffer};
  }
}

/// Parses simdjson objects into the given `series_builder` handles.
class doc_parser {
public:
  doc_parser(std::string_view parsed_document, operator_control_plane& ctrl,
             bool raw, std::optional<std::string> unnest = std::nullopt)
    : parsed_document_{parsed_document},
      ctrl_{ctrl},
      unnest_{std::move(unnest)},
      raw_{raw} {
  }

  doc_parser(std::string_view parsed_document, operator_control_plane& ctrl,
             std::size_t parsed_lines, bool raw,
             std::optional<std::string> unnest = std::nullopt)
    : parsed_document_{parsed_document},
      ctrl_{ctrl},
      parsed_lines_{parsed_lines},
      unnest_{std::move(unnest)},
      raw_{raw} {
  }

  [[nodiscard]] auto
  parse_object(simdjson::ondemand::value v,
               detail::multi_series_builder::record_generator builder,
               size_t depth = 0u) -> bool {
    auto obj = v.get_object();
    if (obj.error()) {
      report_parse_err(v, "object");
      return false;
    }
    for (auto pair : obj) {
      if (pair.error()) {
        report_parse_err(v, "key value pair");
        return false;
      }
      auto maybe_key = pair.unescaped_key();
      if (maybe_key.error()) {
        report_parse_err(v, "key in an object");
        return false;
      }
      auto key = maybe_key.value_unsafe();
      auto val = pair.value();
      if (val.error()) {
        report_parse_err(val, fmt::format("object value at key `{}`", key));
        return false;
      }
      const bool value_parse_success
        = unnest_
            ? parse_impl_unnest(val.value_unsafe(), key, builder, depth + 1)
            : parse_impl(val.value_unsafe(), builder.field(key), depth + 1);
      if (not value_parse_success) {
        return false;
      }
    }
    return true;
  }

private:
  void emit_unparsed_json_diagnostics(
    std::string description,
    simdjson::simdjson_result<const char*> document_location) {
    auto document_to_truncate = parsed_document_;
    auto note_prefix = "somewhere in";
    if (not document_location.error()) {
      document_to_truncate = std::string_view{document_location.value_unsafe(),
                                              parsed_document_.end()};
      note_prefix = "at";
    }
    constexpr auto character_limit = 50u;
    if (document_to_truncate.length() > character_limit) {
      diagnostic::warning("failed to parse {} in the JSON document",
                          std::move(description))
        .note("{} {} ...", note_prefix,
              document_to_truncate.substr(0, character_limit))
        .emit(ctrl_.diagnostics());
    }
    diagnostic::warning("failed to parse {} in the JSON document",
                        std::move(description))
      .note("{} {}", note_prefix, document_to_truncate)
      .emit(ctrl_.diagnostics());
  }

  void report_parse_err(auto& v, std::string description) {
    if (parsed_lines_) {
      report_parse_err_with_parsed_lines(v, std::move(description));
      return;
    }
    emit_unparsed_json_diagnostics(std::move(description),
                                   v.current_location());
  }

  void report_parse_err_with_parsed_lines(auto& v, std::string description) {
    if (v.current_location().error()) {
      diagnostic::warning("failed to parse {} in the JSON document",
                          std::move(description))
        .note("line {}", *parsed_lines_)
        .emit(ctrl_.diagnostics());
      return;
    }
    auto column = v.current_location().value_unsafe() - parsed_document_.data();
    diagnostic::warning("failed to parse {} in the JSON document",
                        std::move(description))
      .note("line {} column {}", *parsed_lines_, column)
      .emit(ctrl_.diagnostics());
  }

  [[nodiscard]] auto
  parse_number(simdjson::ondemand::value val, auto builder) -> bool {
    auto kind = simdjson::ondemand::number_type{};
    if (raw_) {
      kind = simdjson::ondemand::number_type::floating_point_number;
    } else {
      auto result = val.get_number_type();
      if (result.error()) {
        report_parse_err(val, "a number");
        return false;
      }
      kind = result.value_unsafe();
    }
    switch (kind) {
      case simdjson::ondemand::number_type::floating_point_number: {
        auto result = val.get_double();
        if (result.error()) {
          report_parse_err(val, "a number");
          return false;
        }
        builder.data(result.value_unsafe());
        return true;
      }
      case simdjson::ondemand::number_type::signed_integer: {
        auto result = val.get_int64();
        if (result.error()) {
          report_parse_err(val, "a number");
          return false;
        }
        builder.data(result.value_unsafe());
        return true;
      }
      case simdjson::ondemand::number_type::unsigned_integer: {
        auto result = val.get_uint64();
        if (result.error()) {
          report_parse_err(val, "a number");
          return false;
        }
        builder.data(result.value_unsafe());
        return true;
      }
      case simdjson::ondemand::number_type::big_integer: {
        report_parse_err(val, "a smaller number");
        builder.null(); // TODO is this a good idea?
        return false;
      }
    }
    TENZIR_UNREACHABLE();
  }

  [[nodiscard]] auto
  parse_string(simdjson::ondemand::value val, auto builder) -> bool {
    auto maybe_str = val.get_string();
    if (maybe_str.error()) {
      report_parse_err(val, "a string");
      return false;
    }
    if (raw_) {
      // TODO this is making copies even though we dont strictly need to do them
      // at this point. *However* the effort to make the record builder support
      // string_view's instead is non-trivial
      builder.data(std::string{maybe_str.value_unsafe()});
    } else {
      builder.data_unparsed(std::string{maybe_str.value_unsafe()});
    }
    return true;
  }

  [[nodiscard]] auto
  parse_array(simdjson::ondemand::array arr,
              detail::multi_series_builder::list_generator builder,
              size_t depth) -> bool {
    for (auto element : arr) {
      if (element.error()) {
        report_parse_err(element, "an array element");
        return false;
      }
      if (not parse_impl(element.value_unsafe(), builder, depth + 1)) {
        return false;
      }
    }
    return true;
  }

  [[nodiscard]] auto
  parse_impl_unnest(simdjson::ondemand::value val, std::string_view key,
                    auto builder, size_t root_depth) -> bool {
    auto pos = key.find(*unnest_);
    if (pos == key.npos) {
      return parse_impl(val, builder.field(key), root_depth);
    }
    return parse_impl_unnest(val, key.substr(pos + 1),
                             builder.field(key.substr(0, pos)).record(),
                             root_depth);
  }

  [[nodiscard]] auto parse_impl(simdjson::ondemand::value val, auto builder,
                                size_t depth) -> bool {
    if (depth > defaults::max_recursion) {
      die("nesting too deep in json_parser parse");
    }
    auto type = val.type();
    if (type.error()) {
      report_parse_err(val, "a value");
      return false;
    }
    switch (type.value_unsafe()) {
      case simdjson::ondemand::json_type::null:
        builder.null();
        return true;
      case simdjson::ondemand::json_type::number:
        return parse_number(val, builder);
      case simdjson::ondemand::json_type::boolean: {
        auto result = val.get_bool();
        if (result.error()) {
          report_parse_err(val, "a boolean value");
          return false;
        }
        builder.data(result.value_unsafe());
        return true;
      }
      case simdjson::ondemand::json_type::string:
        return parse_string(val, builder);
      case simdjson::ondemand::json_type::array:
        return parse_array(val.get_array().value_unsafe(), builder.list(),
                           depth + 1);
      case simdjson::ondemand::json_type::object:
        return parse_object(val, builder.record(), depth + 1);
    }
    TENZIR_UNREACHABLE();
  }

  std::string_view parsed_document_;
  operator_control_plane& ctrl_;
  std::optional<std::size_t> parsed_lines_;
  std::optional<std::string> unnest_;
  bool raw_;
};

auto json_string_parser(std::string_view s, const tenzir::type* seed)
  -> caf::expected<tenzir::data> {
  if (seed) {
    return record_builder::basic_seeded_parser(s, *seed);
  }
  tenzir::data result;
  constexpr static auto p = (parsers::data - parsers::number - parsers::number);
  if (p(s, result)) {
    return result;
  } else {
    return tenzir::data{std::string{s}};
  }
}

class parser_base {
public:
  parser_base(operator_control_plane& ctrl,
              multi_series_builder::policy_type policy,
              multi_series_builder::settings_type settings,
              std::vector<type> schemas, bool raw,
              std::optional<std::string> unnest)
    : builder{std::move(policy), std::move(settings), json_string_parser,
              std::move(schemas)},
      ctrl{ctrl},
      unnest{std::move(unnest)},
      raw{raw} {
  }

  multi_series_builder builder;
  operator_control_plane& ctrl;
  simdjson::ondemand::parser parser;
  std::optional<std::string> unnest;
  bool raw = false;
  bool abort_requested = false;
};

class ndjson_parser final : public parser_base {
public:
  using parser_base::parser_base;

  auto parse(simdjson::padded_string_view json_line) -> void {
    ++lines_processed_;
    auto maybe_doc = this->parser.iterate(json_line);
    auto val = maybe_doc.get_value();
    // val.error() will inherit all errors from maybe_doc. No need to check
    // for error after each operation.
    if (auto err = val.error()) {
      diagnostic::warning("{}", error_message(err))
        .note("skips invalid JSON `{}`", json_line)
        .emit(this->ctrl.diagnostics());
      return;
    }
    auto& doc = maybe_doc.value_unsafe();
    auto success = doc_parser{json_line, this->ctrl, raw}.parse_object(
      val.value_unsafe(), builder.record());
    // After parsing one JSON object it is expected for the result to be at
    // the end. If it's otherwise then it means that a line contains more than
    // one object in which case we don't add any data and emit a warning.
    // It is also possible for a parsing failure to occurr in doc_parser. the
    // is_alive() call ensures that the first object was parsed without
    // errors. Calling at_end() when is_alive() returns false is unsafe and
    // resulted in crashes.
    if (success and not doc.at_end()) {
      diagnostic::warning(
        "encountered more than one JSON object in a single NDJSON line")
        .note("skips remaining objects in line `{}`", json_line)
        .emit(this->ctrl.diagnostics());
      success = false;
    }
    if (not success) {
      // We already reported the issue.
      builder.remove_last();
    }
  }

  void validate_completion() const {
    // noop, just exists for easy of implementation
  }

private:
  std::size_t lines_processed_ = 0u;
};

class default_parser final : public parser_base {
public:
  default_parser(operator_control_plane& ctrl,
                 multi_series_builder::policy_type policy,
                 multi_series_builder::settings_type settings,
                 std::vector<type> schemas, bool raw,
                 std::optional<std::string> unnest, bool arrays_of_objects)
    : parser_base{ctrl,
                  std::move(policy),
                  std::move(settings),
                  std::move(schemas),
                  raw,
                  std::move(unnest)},
      arrays_of_objects_{arrays_of_objects} {
  }

  auto parse(const chunk& json_chunk) -> void {
    buffer_.append(
      {reinterpret_cast<const char*>(json_chunk.data()), json_chunk.size()});
    auto view = buffer_.view();
    auto err = this->parser
                 .iterate_many(view.data(), view.length(),
                               simdjson::ondemand::DEFAULT_BATCH_SIZE)
                 .get(stream_);
    if (err) {
      // For the simdjson 3.1 it seems impossible to have an error
      // returned here so it is hard to understand if we can recover from
      // it somehow.
      buffer_.reset();
      diagnostic::warning("{}", error_message(err))
        .note("failed to parse")
        .emit(this->ctrl.diagnostics());
      return;
    }
    for (auto doc_it = stream_.begin(); doc_it != stream_.end(); ++doc_it) {
      // doc.error() will inherit all errors from *doc_it and get_value.
      // No need to check after each operation.
      auto doc = (*doc_it).get_value();
      if (auto err = doc.error()) {
        abort_requested = true;
        diagnostic::error("{}", error_message(err))
          .note("skips invalid JSON '{}'", view)
          .emit(this->ctrl.diagnostics());
        return;
      }
      if (arrays_of_objects_) {
        auto arr = doc.value_unsafe().get_array();
        if (arr.error()) {
          abort_requested = true;
          diagnostic::error("expected an array of objects")
            .note("got: {}", view)
            .emit(this->ctrl.diagnostics());
          return;
        }
        for (auto&& elem : arr.value_unsafe()) {
          auto row = builder.record();
          auto success
            = doc_parser{doc_it.source(), this->ctrl, raw}.parse_object(
              elem.value_unsafe(), row);
          if (not success) {
            // We already reported the issue.
            builder.remove_last();
            continue;
          }
        }
      } else {
        auto row = builder.record();
        auto success
          = doc_parser{doc_it.source(), this->ctrl, raw}.parse_object(
            doc.value_unsafe(), row);
        if (not success) {
          // We already reported the issue.
          builder.remove_last();
          continue;
        }
      }
    }
    handle_truncated_bytes();
  }

  void validate_completion() {
    if (not buffer_.view().empty()) {
      diagnostic::error("parser input ended with incomplete object")
        .emit(ctrl.diagnostics());
      abort_requested = true;
    }
  }

private:
  auto handle_truncated_bytes() -> void {
    auto truncated_bytes = stream_.truncated_bytes();
    if (truncated_bytes == 0) {
      buffer_.reset();
      return;
    }
    // Likely not needed, but should be harmless. Needs additional
    // investigation in the future.
    if (truncated_bytes > buffer_.view().size()) {
      abort_requested = true;
      diagnostic::error("detected malformed JSON")
        .note("in input '{}'", buffer_.view())
        .emit(this->ctrl.diagnostics());
      return;
    }
    buffer_.truncate(truncated_bytes);
  }
  bool arrays_of_objects_;
  // The simdjson suggests to initialize the padding part to either 0s or
  // spaces.
  detail::padded_buffer<simdjson::SIMDJSON_PADDING, '\0'> buffer_;
  simdjson::ondemand::document_stream stream_;
};

template <class GeneratorValue>
auto parser_loop(generator<GeneratorValue> json_chunk_generator,
                 std::derived_from<parser_base> auto parser_impl)
  -> generator<table_slice> {
  for (auto chunk : json_chunk_generator) {
    // get all events that are ready (timeout, batch size, ordered mode
    // constraints)
    for (auto slice :
         series_to_table_slice(parser_impl.builder.yield_ready())) {
      co_yield std::move(slice);
    }
    for (auto err : parser_impl.builder.last_errors()) {
      diagnostic::warning(err).emit(parser_impl.ctrl.diagnostics());
    }
    if (not chunk or chunk->size() == 0u) {
      co_yield {};
      continue;
    }
    parser_impl.parse(*chunk);
    if (parser_impl.abort_requested) {
      co_return;
    }
  }
  parser_impl.validate_completion();
  if (parser_impl.abort_requested) {
    co_return;
  }
  // Get all remaining events
  for (auto slice : series_to_table_slice(parser_impl.builder.finalize())) {
    co_yield std::move(slice);
  }
}

struct parser_args {
  multi_series_builder::settings_type builder_settings = {};
  multi_series_builder::policy_type builder_policy
    = multi_series_builder::policy_precise{};
  bool raw = false;
  std::optional<std::string> unnest = std::nullopt;
  bool arrays_of_objects = false;
  bool use_ndjson_mode = true; // TODO these two could be an enum
  bool use_gelf_mode = false;

  bool needs_schemas() const {
    return not std::holds_alternative<multi_series_builder::policy_merge>(
      builder_policy);
  }

  friend auto inspect(auto& f, parser_args& x) {
    return f.object(x)
      .pretty_name("parser_args")
      .fields(f.field("builder_settings", x.builder_settings),
              f.field("builder_policy", x.builder_policy),
              f.field("raw", x.builder_settings), f.field("unnest", x.unnest),
              f.field("arrays_of_objects", x.arrays_of_objects),
              f.field("use_ndjson_mode", x.use_ndjson_mode),
              f.field("use_gelf_mode", x.use_gelf_mode));
  }
};

std::vector<type> get_schemas(bool actually_do_it, bool unflatten) {
  std::vector<type> ret;
  if (not actually_do_it) {
    return ret;
  }
  ret = modules::schemas();
  if (not unflatten) {
    return ret;
  }
  constexpr static auto flatten_in_place = [](type& t) {
    t = flatten(t);
  };
  std::ranges::for_each(ret, flatten_in_place);
  return ret;
}

class json_parser final : public plugin_parser {
public:
  json_parser() = default;

  explicit json_parser(parser_args args) : args_{std::move(args)} {
  }

  auto name() const -> std::string override {
    return "json";
  }

  auto optimize(event_order order) -> std::unique_ptr<plugin_parser> override {
    auto args = args_;
    args.builder_settings.ordered = order == event_order::ordered;
    return std::make_unique<json_parser>(std::move(args));
  }

  auto
  instantiate(generator<chunk_ptr> input, operator_control_plane& ctrl) const
    -> std::optional<generator<table_slice>> override {
    auto schemas
      = get_schemas(args_.needs_schemas(), not args_.unnest.has_value());
    if (args_.use_ndjson_mode) {
      return parser_loop(split_at_crlf(std::move(input)),
                         ndjson_parser{
                           ctrl,
                           args_.builder_policy,
                           args_.builder_settings,
                           std::move(schemas),
                           args_.raw,
                           args_.unnest,
                         });
    }
    if (args_.use_gelf_mode) {
      return parser_loop(split_at_null(std::move(input), '\0'),
                         ndjson_parser{
                           ctrl,
                           args_.builder_policy,
                           args_.builder_settings,
                           std::move(schemas),
                           args_.raw,
                           args_.unnest,
                         });
    }
    return parser_loop(std::move(input), default_parser{
                                           ctrl,
                                           args_.builder_policy,
                                           args_.builder_settings,
                                           std::move(schemas),
                                           args_.raw,
                                           args_.unnest,
                                           args_.arrays_of_objects,
                                         });
  }

  friend auto inspect(auto& f, json_parser& x) -> bool {
    return f.apply(x.args_);
  }

private:
  parser_args args_;
};

struct printer_args {
  std::optional<location> compact_output;
  std::optional<location> color_output;
  std::optional<location> monochrome_output;
  std::optional<location> omit_empty;
  std::optional<location> omit_nulls;
  std::optional<location> omit_empty_objects;
  std::optional<location> omit_empty_lists;

  template <class Inspector>
  friend auto inspect(Inspector& f, printer_args& x) -> bool {
    return f.object(x)
      .pretty_name("printer_args")
      .fields(f.field("compact_output", x.compact_output),
              f.field("color_output", x.color_output),
              f.field("monochrome_output", x.monochrome_output),
              f.field("omit_empty", x.omit_empty),
              f.field("omit_nulls", x.omit_nulls),
              f.field("omit_empty_objects", x.omit_empty_objects),
              f.field("omit_empty_lists", x.omit_empty_lists));
  }
};

class json_printer final : public plugin_printer {
public:
  json_printer() = default;

  explicit json_printer(printer_args args) : args_{std::move(args)} {
  }

  auto name() const -> std::string override {
    return "json";
  }

  auto instantiate(type, operator_control_plane&) const
    -> caf::expected<std::unique_ptr<printer_instance>> override {
    const auto compact = !!args_.compact_output;
    auto style = default_style();
    if (args_.monochrome_output) {
      style = no_style();
    } else if (args_.color_output) {
      style = jq_style();
    }
    const auto omit_nulls
      = args_.omit_nulls.has_value() or args_.omit_empty.has_value();
    const auto omit_empty_objects
      = args_.omit_empty_objects.has_value() or args_.omit_empty.has_value();
    const auto omit_empty_lists
      = args_.omit_empty_lists.has_value() or args_.omit_empty.has_value();
    auto meta = chunk_metadata{.content_type = compact ? "application/x-ndjson"
                                                       : "application/json"};
    return printer_instance::make(
      [compact, style, omit_nulls, omit_empty_objects, omit_empty_lists,
       meta = std::move(meta)](table_slice slice) -> generator<chunk_ptr> {
        if (slice.rows() == 0) {
          co_yield {};
          co_return;
        }
        auto printer = tenzir::json_printer{{
          .style = style,
          .oneline = compact,
          .omit_nulls = omit_nulls,
          .omit_empty_records = omit_empty_objects,
          .omit_empty_lists = omit_empty_lists,
        }};
        // TODO: Since this printer is per-schema we can write an optimized
        // version of it that gets the schema ahead of time and only expects
        // data corresponding to exactly that schema.
        auto buffer = std::vector<char>{};
        auto resolved_slice = resolve_enumerations(slice);
        auto out_iter = std::back_inserter(buffer);
        for (const auto& row : resolved_slice.values()) {
          const auto ok = printer.print(out_iter, row);
          TENZIR_ASSERT(ok);
          out_iter = fmt::format_to(out_iter, "\n");
        }
        auto chunk = chunk::make(std::move(buffer), meta);
        co_yield std::move(chunk);
      });
  }

  auto allows_joining() const -> bool override {
    return true;
  };

  friend auto inspect(auto& f, json_printer& x) -> bool {
    return f.apply(x.args_);
  }

private:
  printer_args args_;
};


struct json_parser_options_parser {
  auto add_to_parser(argument_parser& parser) -> void {
    parser.add("--ndjson", use_ndjson_mode_);
    parser.add("--gelf", use_gelf_mode_);
  }

  auto write_into(parser_args& args, parser_interface& p) -> void {
    if (use_ndjson_mode_ and use_gelf_mode_) {
      diagnostic::error("`--ndjson` and `--gelf` are incompatible")
        .primary(p.current_span())
        .throw_();
    }
    args.use_ndjson_mode = use_ndjson_mode_;
    args.use_gelf_mode = use_gelf_mode_;
  }

private:
  bool use_gelf_mode_ = false;
  bool use_ndjson_mode_ = false;
};

class plugin final : public virtual parser_plugin<json_parser>,
                     public virtual printer_plugin<json_printer> {
public:
  auto name() const -> std::string override {
    return "json";
  }

  auto parse_parser(parser_interface& p) const
    -> std::unique_ptr<plugin_parser> override {
    auto parser
      = argument_parser{name(), "https://docs.tenzir.com/formats/json"};
    multi_series_builder_argument_parser msb_parser{
      {.default_name = "tenzir.json"}};
    msb_parser.add_to_parser(parser);
    json_parser_options_parser pj;
    pj.add_to_parser(parser);
    common_parser_options_parser pc;
    pc.add_to_parser(parser);
    parser.parse(p);
    auto args
      = parser_args{msb_parser.get_settings(), msb_parser.validated_policy(p)};
    pj.write_into(args, p);
    args.unnest = pc.get_unnest();
    args.raw = pc.get_raw();
    return std::make_unique<json_parser>(std::move(args));
  }

  auto parse_printer(parser_interface& p) const
    -> std::unique_ptr<plugin_printer> override {
    auto args = printer_args{};
    auto parser
      = argument_parser{name(), "https://docs.tenzir.com/formats/json"};
    // We try to follow 'jq' option naming.
    parser.add("-c,--compact-output", args.compact_output);
    parser.add("-C,--color-output", args.color_output);
    parser.add("-M,--monochrome-output", args.color_output);
    parser.add("--omit-empty", args.omit_empty);
    parser.add("--omit-nulls", args.omit_nulls);
    parser.add("--omit-empty-objects", args.omit_empty_objects);
    parser.add("--omit-empty-lists", args.omit_empty_lists);
    parser.parse(p);
    return std::make_unique<json_printer>(std::move(args));
  }
};

class gelf_parser final : public virtual parser_parser_plugin {
public:
  auto name() const -> std::string override {
    return "gelf";
  }

  auto parse_parser(parser_interface& p) const
    -> std::unique_ptr<plugin_parser> override {
    auto parser = argument_parser{
      name(), fmt::format("https://docs.tenzir.com/formats/{}", name())};
    common_parser_options_parser pc;
    pc.add_to_parser(parser);

    parser.parse(p);
    auto args = parser_args{};
    args.use_gelf_mode = true;
    args.builder_settings.default_name = "gelf";
    args.builder_policy = multi_series_builder::policy_precise{};
    args.unnest = pc.get_unnest();
    args.raw = pc.get_raw();
    return std::make_unique<json_parser>(std::move(args));
  }
};

template <detail::string_literal Name, detail::string_literal Selector,
          detail::string_literal Prefix, detail::string_literal Separator = "">
class selector_parser final : public virtual parser_parser_plugin {
public:
  auto name() const -> std::string override {
    return std::string{Name.str()};
  }

  auto parse_parser(parser_interface& p) const
    -> std::unique_ptr<plugin_parser> override {
    auto parser = argument_parser{
      name(), fmt::format("https://docs.tenzir.com/formats/{}", name())};
    auto args = parser_args{};
    args.builder_settings = {
      .default_name = std::string{Prefix.str()},
    };
    args.builder_policy = multi_series_builder::policy_selector{
      .field_name = std::string{Selector.str()},
      .naming_prefix = std::string{Prefix.str()},
    };
    add_schema_only_option(parser, args.builder_settings.schema_only);
    common_parser_options_parser common_parser;
    common_parser.add_to_parser(parser);
    parser.parse(p);
    args.unnest = common_parser.get_unnest();
    args.raw = common_parser.get_raw();
    args.use_ndjson_mode = true;
    auto sep_str = Separator.str();
    if (not sep_str.empty()) {
      args.unnest = std::move(sep_str);
    }

    return std::make_unique<json_parser>(std::move(args));
  }
};

using suricata_parser = selector_parser<"suricata", "event_type", "suricata">;
using zeek_parser = selector_parser<"zeek-json", "_path", "zeek", ".">;

} // namespace

} // namespace tenzir::plugins::json

TENZIR_REGISTER_PLUGIN(tenzir::plugins::json::plugin)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::json::gelf_parser)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::json::suricata_parser)
TENZIR_REGISTER_PLUGIN(tenzir::plugins::json::zeek_parser)
