//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2023 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#pragma once

#include <caf/default_sum_type_access.hpp>
#include <caf/detail/type_list.hpp>
#include <caf/none.hpp>
#include <caf/variant.hpp>

#include <optional>
#include <string>
#include <vector>

namespace tenzir {

class select_optimization {
public:
  std::vector<std::string> fields_of_interest{};
  bool do_not_optimize_selection = true;
  select_optimization() = default;
  select_optimization(bool do_not_optimize_selection)
    : do_not_optimize_selection{do_not_optimize_selection} {
  }
  select_optimization(std::vector<std::string> fields_of_interest)
    : fields_of_interest{std::move(fields_of_interest)} {
  }
  select_optimization(std::vector<std::string> fields_of_interest,
                      bool do_not_optimize_selection)
    : fields_of_interest{std::move(fields_of_interest)},
      do_not_optimize_selection{do_not_optimize_selection} {
  }

  static auto no_select_optimization() -> select_optimization {
    return {std::vector<std::string>{}, true};
  }
};

template <class Inspector>
auto inspect(Inspector& f, select_optimization& x) {
  return f.object(x)
    .pretty_name("expression")
    .fields(f.field("node", x.fields_of_interest));
}

} // namespace tenzir
