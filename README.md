Kishi's .markdownlint-cli2.yaml
================================================================================
DM Kishi's custom YAML configuration for [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2).

Install
--------------------------------------------------------------------------------
```sh
pnpm dlx @dmkishi/markdownlint-cli2.yaml@latest --force
```

This writes `.markdownlint-cli2.yaml` to the project root, found by walking up
for the nearest `package.json` or `.git`. In a directory with neither, the
current directory is used. Use `--force` to overwrite an existing file.

### Updates
Upon updates of this package, **re-run the install command** to pull the latest
version of this config into the consumer project.

Test
--------------------------------------------------------------------------------
```sh
npx --yes "~/Documents/Projects/@dmkishi-markdownlint-cli2.yaml" --force
```

- `pnpm dlx` has no local-path form — it only resolves registry specs — so
  `npx <dir>` is the substitute for the packed-install path.
- The quotes are required because of the `@` and `.` in the directory name.

Changelog
--------------------------------------------------------------------------------
### v0.1.0 (2026-8-31)
- Support non-Node.js projects and plain directories.
- Add JSDoc type annotations.
- README:
  - Switch install command to `pnpm dlx`.
  - Add local installs instructions.

### v0.0.4 (2026-5-28)
- Simplify install process.
- Fix install script.
- Add prepublishOnly guard.

### v0.0.3 (2025-11-22)
- Fix install script.
- Etc.

### v0.0.2 (2025-11-21)
- Fix install script.

### v0.0.1 (2025-11-21)
- Initial release.
