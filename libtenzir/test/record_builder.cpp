//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/record_builder.hpp"

#include "tenzir/aliases.hpp"
#include "tenzir/concept/printable/to.hpp"
#include "tenzir/concept/printable/to_string.hpp"
#include "tenzir/detail/assert.hpp"
#include "tenzir/test/test.hpp"
#include "tenzir/type.hpp"

#include <caf/detail/type_list.hpp>

#include <cstddef>
#include <cstdint>

namespace tenzir {
namespace {

using namespace detail::record_builder;
using namespace std::literals;

auto noop_parser(std::string, const tenzir::type*) -> caf::expected<data> {
  return data{};
}

TEST(empty) {
  record_builder b;

  CHECK(not b.has_elements());
}

TEST(materialization record) {
  record_builder b;
  auto* r = b.record();
  r->field("0")->data(0ul);
  r->field("1")->data(1l);
  r->field("2")->null();

  CHECK(b.has_elements());

  auto rec = b.materialize();
  auto expected = tenzir::record{};
  expected["0"] = 0ul;
  expected["1"] = 1l;
  expected["2"] = caf::none;
  for (const auto& [rk, rv] : rec) {
    CHECK(expected.at(rk) == rv);
  }
  CHECK(not b.has_elements());
}

TEST(materialization list) {
  record_builder b;
  auto* r = b.record();
  auto* l = r->field("int list")->list();
  l->data(0ul);
  l->data(1ul);
  l->data(2ul);

  CHECK(b.has_elements());

  auto rec = b.materialize();
  auto expected = tenzir::record{};
  expected["int list"] = tenzir::list{0ul, 1ul, 2ul};
  for (const auto& [expected_key, expected_data] : expected) {
    CHECK(rec.at(expected_key) == expected_data);
  }
  CHECK(not b.has_elements());
}

TEST(materialization nested record) {
  record_builder b;
  auto* r = b.record();
  r->field("0")->record()->field("1")->null();

  CHECK(b.has_elements());

  auto rec = b.materialize();
  auto expected = tenzir::record{};
  expected["0"] = tenzir::record{{"1", caf::none}};
  for (const auto& [rk, rv] : rec) {
    CHECK(expected.at(rk) == rv);
  }
  CHECK(not b.has_elements());
}

TEST(materialization record list record) {
  record_builder b;
  auto* r = b.record();
  r->field("0")->list()->record()->field("1")->data(0ul);
  (void)r->field("1")->record()->field("0")->list();

  CHECK(b.has_elements());

  auto rec = b.materialize(false);
  auto expected = tenzir::record{};
  expected["0"] = tenzir::list{tenzir::record{{"1", 0ul}}};
  expected["1"] = tenzir::record{{"0", tenzir::list{}}};
  for (const auto& [rk, rv] : rec) {
    CHECK(expected.at(rk) == rv);
  }
  CHECK(b.has_elements());
  auto rec2 = b.materialize();
  CHECK(rec == rec2);
  CHECK(not b.has_elements());
}

TEST(signature record empty) {
  record_builder b;
  (void)b.record();

  CHECK(b.has_elements());
  detail::record_builder::signature_type sig;
  CHECK(not b.append_signature_to(sig, noop_parser));

  detail::record_builder::signature_type expected;
  {
    expected.insert(expected.end(),
                    detail::record_builder::record_start_marker);
    expected.insert(expected.end(), detail::record_builder::record_end_marker);
  }
  CHECK(sig == expected);
}

TEST(signature record simple) {
  record_builder b;
  auto* r = b.record();
  r->field("0")->data(0ul);
  r->field("1")->data(1l);

  CHECK(b.has_elements());
  detail::record_builder::signature_type sig;
  CHECK(not b.append_signature_to(sig, noop_parser));

  detail::record_builder::signature_type expected;
  {
    expected.insert(expected.end(),
                    detail::record_builder::record_start_marker);
    {
      const auto key_bytes = as_bytes("0"sv);
      expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
      expected.insert(
        expected.end(),
        static_cast<std::byte>(
          caf::detail::tl_index_of<field_type_list, uint64_t>::value));
    }
    {
      const auto key_bytes = as_bytes("1"sv);
      expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
      expected.insert(
        expected.end(),
        static_cast<std::byte>(
          caf::detail::tl_index_of<field_type_list, int64_t>::value));
    }
    expected.insert(expected.end(), detail::record_builder::record_end_marker);
  }
  CHECK(sig == expected);
}

TEST(signature list) {
  record_builder b;
  auto* l = b.record()->field("l")->list();
  l->data(0ul);
  l->data(1ul);

  CHECK(b.has_elements());
  detail::record_builder::signature_type sig;
  CHECK(not b.append_signature_to(sig, noop_parser));

  detail::record_builder::signature_type expected;
  {
    expected.insert(expected.end(),
                    detail::record_builder::record_start_marker);
    const auto key_bytes = as_bytes("l"sv);
    expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
    expected.insert(expected.end(), detail::record_builder::list_start_marker);
    expected.insert(
      expected.end(),
      static_cast<std::byte>(
        caf::detail::tl_index_of<field_type_list, uint64_t>::value));
    expected.insert(expected.end(), detail::record_builder::list_end_marker);
    expected.insert(expected.end(), detail::record_builder::record_end_marker);
  }
  CHECK(sig == expected);
}

TEST(signature list with null) {
  record_builder b;
  auto* l = b.record()->field("l")->list();
  l->data(0ul);
  l->null();

  CHECK(b.has_elements());
  detail::record_builder::signature_type sig;
  CHECK(not b.append_signature_to(sig, noop_parser));

  detail::record_builder::signature_type expected;
  {
    expected.insert(expected.end(),
                    detail::record_builder::record_start_marker);
    const auto key_bytes = as_bytes("l"sv);
    expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
    expected.insert(expected.end(), detail::record_builder::list_start_marker);
    expected.insert(
      expected.end(),
      static_cast<std::byte>(
        caf::detail::tl_index_of<field_type_list, uint64_t>::value));
    expected.insert(expected.end(), detail::record_builder::list_end_marker);
    expected.insert(expected.end(), detail::record_builder::record_end_marker);
  }
  CHECK(sig == expected);
}

TEST(signature list numeric unification) {
  /// FIXME update to new parser setup
  record_builder b;
  auto* l = b.record()->field("l")->list();
  l->data(0ul);
  l->data(1.0);

  CHECK(b.has_elements());
  detail::record_builder::signature_type sig;
  CHECK(not b.append_signature_to(sig, noop_parser));

  detail::record_builder::signature_type expected;
  {
    expected.insert(expected.end(),
                    detail::record_builder::record_start_marker);
    const auto key_bytes = as_bytes("l"sv);
    expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
    expected.insert(expected.end(), detail::record_builder::list_start_marker);
    expected.insert(
      expected.end(),
      static_cast<std::byte>(
        caf::detail::tl_index_of<field_type_list, double>::value));
    expected.insert(expected.end(), detail::record_builder::list_end_marker);
    expected.insert(expected.end(), detail::record_builder::record_end_marker);
  }
  CHECK(sig == expected);
}

TEST(signature list string unification) {
  // FIXME update test to match new parser setup
  record_builder b;
  auto* l = b.record()->field("l")->list();
  l->data(0ul);
  l->data(1.0);
  l->data("text"s);

  CHECK(b.has_elements());
  detail::record_builder::signature_type sig;
  CHECK(not b.append_signature_to(sig, noop_parser));

  detail::record_builder::signature_type expected;
  {
    expected.insert(expected.end(),
                    detail::record_builder::record_start_marker);
    const auto key_bytes = as_bytes("l"sv);
    expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
    expected.insert(expected.end(), detail::record_builder::list_start_marker);
    expected.insert(
      expected.end(),
      static_cast<std::byte>(
        caf::detail::tl_index_of<field_type_list, std::string>::value));
    expected.insert(expected.end(), detail::record_builder::list_end_marker);
    expected.insert(expected.end(), detail::record_builder::record_end_marker);
  }
  CHECK(sig == expected);
}

TEST(signature record seeding matching) {
  record_builder b;
  auto* r = b.record();
  r->field("0")->data(0ul);
  r->field("1")->data(1l);

  CHECK(b.has_elements());
  detail::record_builder::signature_type sig;
  tenzir::type seed{record_type{
    {"0", uint64_type{}},
    {"1", int64_type{}},
  }};
  CHECK(not b.append_signature_to(sig, noop_parser, seed));

  detail::record_builder::signature_type expected;
  {
    expected.insert(expected.end(),
                    detail::record_builder::record_start_marker);
    {
      const auto key_bytes = as_bytes("0"sv);
      expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
      expected.insert(
        expected.end(),
        static_cast<std::byte>(
          caf::detail::tl_index_of<field_type_list, uint64_t>::value));
    }
    {
      const auto key_bytes = as_bytes("1"sv);
      expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
      expected.insert(
        expected.end(),
        static_cast<std::byte>(
          caf::detail::tl_index_of<field_type_list, int64_t>::value));
    }
    expected.insert(expected.end(), detail::record_builder::record_end_marker);
  }
  //   fmt::print("{}\n", sig);
  //   fmt::print("{}\n", expected);
  CHECK(sig == expected);
}

TEST(signature record seeding field not in data) {
  record_builder b;
  auto* r = b.record();
  r->field("0")->data(0ul);

  CHECK(b.has_elements());
  detail::record_builder::signature_type sig;
  tenzir::type seed{record_type{
    {"0", uint64_type{}},
    {"1", int64_type{}},
  }};
  CHECK(not b.append_signature_to(sig, noop_parser, seed));

  detail::record_builder::signature_type expected;
  {
    expected.insert(expected.end(),
                    detail::record_builder::record_start_marker);
    {
      const auto key_bytes = as_bytes("0"sv);
      expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
      expected.insert(
        expected.end(),
        static_cast<std::byte>(
          caf::detail::tl_index_of<field_type_list, uint64_t>::value));
    }
    {
      const auto key_bytes = as_bytes("1"sv);
      expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
      expected.insert(
        expected.end(),
        static_cast<std::byte>(
          caf::detail::tl_index_of<field_type_list, int64_t>::value));
    }
    expected.insert(expected.end(), detail::record_builder::record_end_marker);
  }
  // fmt::print("{}\n", sig);
  // fmt::print("{}\n", expected);
  CHECK(sig == expected);
}

TEST(signature record seeding data - field not in seed) {
  record_builder b;
  auto* r = b.record();
  r->field("1")->data(0l);
  r->field("0")->data(0ul);

  CHECK(b.has_elements());
  detail::record_builder::signature_type sig;
  tenzir::type seed{record_type{
    {"0", uint64_type{}},
  }};
  CHECK(not b.append_signature_to(sig, noop_parser, seed));

  detail::record_builder::signature_type expected;
  {
    expected.insert(expected.end(),
                    detail::record_builder::record_start_marker);
    {
      const auto key_bytes = as_bytes("0"sv);
      expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
      expected.insert(
        expected.end(),
        static_cast<std::byte>(
          caf::detail::tl_index_of<field_type_list, uint64_t>::value));
    }
    {
      const auto key_bytes = as_bytes("1"sv);
      expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
      expected.insert(
        expected.end(),
        static_cast<std::byte>(
          caf::detail::tl_index_of<field_type_list, int64_t>::value));
    }
    expected.insert(expected.end(), detail::record_builder::record_end_marker);
  }
  fmt::print("{}\n", sig);
  fmt::print("{}\n", expected);
  CHECK(sig == expected);
}

// TEST(signature record seeding numeric mismatch) {
//   // FIXME check that we actually want to unify towards double
//   record_builder b;
//   auto* r = b.record();
//   r->field("0")->data(0ul);

//   CHECK(b.has_elements());
//   detail::record_builder::signature_type sig;
//   tenzir::type seed{record_type{
//     {"0", int64_type{}},
//   }};
//   CHECK(not b.append_signature_to(sig, noop_parser, seed));

//   detail::record_builder::signature_type expected;
//   {
//     expected.insert(expected.end(),
//                     detail::record_builder::record_start_marker);
//     {
//       const auto key_bytes = as_bytes("0"sv);
//       expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
//       expected.insert(
//         expected.end(),
//         static_cast<std::byte>(
//           caf::detail::tl_index_of<field_type_list, double>::value));
//     }
//     expected.insert(expected.end(),
//     detail::record_builder::record_end_marker);
//   }
//   //   fmt::print("{}\n", sig);
//   //   fmt::print("{}\n", expected);
//   CHECK(sig == expected);
// }

TEST(overwrite record fields) {
  record_builder b;
  auto* r = b.record();
  r->field("0")->data(0ul);
  r->field("0")->data(0l);
  r->field("0")->data(0.0);
  r->field("0")->data(0ul);

  CHECK(b.has_elements());
  detail::record_builder::signature_type sig;
  CHECK(not b.append_signature_to(sig, noop_parser));

  detail::record_builder::signature_type expected;
  {
    expected.insert(expected.end(),
                    detail::record_builder::record_start_marker);
    {
      const auto key_bytes = as_bytes("0"sv);
      expected.insert(expected.end(), key_bytes.begin(), key_bytes.end());
      expected.insert(
        expected.end(),
        static_cast<std::byte>(
          caf::detail::tl_index_of<field_type_list, uint64_t>::value));
    }
    expected.insert(expected.end(), detail::record_builder::record_end_marker);
  }
  //   fmt::print("{}\n", sig);
  //   fmt::print("{}\n", expected);
  CHECK(sig == expected);
}

} // namespace
} // namespace tenzir
