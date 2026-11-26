Kishi's .markdownlint-cli2.yaml
================================================================================
DM Kishi's highly opinionated and non-standard YAML configuration for
[markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2). Not
recommended for group or collaborative projects.

Install
--------------------------------------------------------------------------------
```sh
curl -fsSL https://raw.githubusercontent.com/dmkishi/markdownlint-cli2.yaml/main/install.sh | sh -s -- --force
```

This writes `.markdownlint-cli2.yaml` to the current directory, so run it from
the project root. Use `--force` to overwrite an existing file.

### Updates
Upon updates of this config, **re-run the install command** to pull the latest
version into the consumer project.

Test
--------------------------------------------------------------------------------
Run the script against the local config instead of GitHub by overriding the
source URL (requires `curl`; `wget` has no `file://` support):

```sh
cd "$(mktemp -d)"
MARKDOWNLINT_CLI2_YAML_URL="file://$HOME/Documents/Projects/@dmkishi-markdownlint-cli2.yaml/.markdownlint-cli2.yaml" \
  sh "$HOME/Documents/Projects/@dmkishi-markdownlint-cli2.yaml/install.sh" --force
```

Changelog
--------------------------------------------------------------------------------
### v0.2.1 (2026-11-26)
- Allow content before the first heading (MD041 `allow_preamble`), e.g. a top image.

### v0.2.0 (2026-8-31)
- Switch to a language-agnostic installer with a `curl | sh` one-liner.
  - The config is written to the current directory rather than a detected
    project root.
  - The package is no longer published to npm.
- Stamp version banner in the config.

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
