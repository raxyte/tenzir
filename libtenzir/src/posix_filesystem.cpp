//    _   _____   __________
//   | | / / _ | / __/_  __/     Visibility
//   | |/ / __ |_\ \  / /          Across
//   |___/_/ |_/___/ /_/       Space and Time
//
// SPDX-FileCopyrightText: (c) 2020 The Tenzir Contributors
// SPDX-License-Identifier: BSD-3-Clause

#include "tenzir/posix_filesystem.hpp"

#include "tenzir/chunk.hpp"
#include "tenzir/detail/weak_run_delayed.hpp"
#include "tenzir/io/read.hpp"
#include "tenzir/io/save.hpp"
#include "tenzir/status.hpp"

#include <caf/config_value.hpp>
#include <caf/detail/set_thread_name.hpp>
#include <caf/dictionary.hpp>
#include <caf/result.hpp>
#include <caf/settings.hpp>

#include <filesystem>

namespace tenzir {

caf::expected<atom::done>
posix_filesystem_state::rename_single_file(const std::filesystem::path& from,
                                           const std::filesystem::path& to) {
  const auto from_absolute = root / from;
  const auto to_absolute = root / to;
  if (from_absolute == to_absolute)
    return atom::done_v;
  std::error_code err;
  std::filesystem::rename(from, to, err);
  if (err) {
    return caf::make_error(ec::system_error,
                           fmt::format("failed to move {} to {}: {}", from, to,
                                       err.message()));
  }
  return atom::done_v;
}

filesystem_actor::behavior_type
posix_filesystem(filesystem_actor::stateful_pointer<posix_filesystem_state> self,
                 std::filesystem::path root) {
  if (self->getf(caf::local_actor::is_detached_flag))
    caf::detail::set_thread_name("tenzir.posix-filesystem");
  self->state.root = std::move(root);
  return {
    [self](atom::write, const std::filesystem::path& filename,
           const chunk_ptr& chk) -> caf::result<atom::ok> {
      const auto path
        = filename.is_absolute() ? filename : self->state.root / filename;
      if (chk == nullptr)
        return caf::make_error(ec::invalid_argument,
                               fmt::format("{} tried to write a nullptr to {}",
                                           *self, path));
      if (auto err = io::save(path, as_bytes(chk))) {
        return err;
      }
      return atom::ok_v;
    },
    [self](atom::read,
           const std::filesystem::path& filename) -> caf::result<chunk_ptr> {
      const auto path
        = filename.is_absolute() ? filename : self->state.root / filename;
      std::error_code err;
      if (std::filesystem::exists(path, err)) {
      } else {
        return caf::make_error(ec::no_such_file,
                               fmt::format("{} no such file: {}", *self, path));
      }
      if (auto bytes = io::read(path)) {
        return chunk::make(std::move(*bytes));
      } else {
        return bytes.error();
      }
    },
    [self](atom::move, const std::filesystem::path& from,
           const std::filesystem::path& to) -> caf::result<atom::done> {
      return self->state.rename_single_file(from, to);
    },
    [self](
      atom::move,
      const std::vector<std::pair<std::filesystem::path, std::filesystem::path>>&
        files) -> caf::result<atom::done> {
      std::error_code err;
      for (const auto& [from, to] : files) {
        auto result = self->state.rename_single_file(from, to);
        if (!result)
          return result.error();
      }
      return atom::done_v;
    },
    [self](atom::mmap,
           const std::filesystem::path& filename) -> caf::result<chunk_ptr> {
      const auto path
        = filename.is_absolute() ? filename : self->state.root / filename;
      std::error_code err;
      if (std::filesystem::exists(path, err)) {
      } else {
        return caf::make_error(ec::no_such_file,
                               fmt::format("{} {}: {}", *self, path,
                                           err.message()));
      }
      if (auto chk = chunk::mmap(path)) {
        return chk;
      } else {
        return chk.error();
      }
    },
    [self](atom::erase,
           const std::filesystem::path& filename) -> caf::result<atom::done> {
      TENZIR_DEBUG("{} got request to erase {}", *self, filename);
      const auto path
        = filename.is_absolute() ? filename : self->state.root / filename;
      std::error_code err;
      if (err) {
        return caf::make_error(ec::no_such_file,
                               fmt::format("{} failed to erase {}: {}", *self,
                                           path, err.message()));
      }
      std::filesystem::remove_all(path, err);
      if (err) {
        return caf::make_error(ec::system_error,
                               fmt::format("{} failed to erase {}: {}", *self,
                                           path, err.message()));
      }
      return atom::done_v;
    },
    [](atom::status, status_verbosity, duration) -> record {
      return {};
    },
  };
}

} // namespace tenzir
