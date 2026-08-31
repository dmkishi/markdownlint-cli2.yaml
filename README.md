Kishi's .markdownlint-cli2.yaml
================================================================================
DM Kishi's custom YAML configuration for [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2).

Install
--------------------------------------------------------------------------------
```sh
pnpm dlx @dmkishi/markdownlint-cli2.yaml@latest --force
```

This writes `.markdownlint-cli2.yaml` to the project root (walks up for the
nearest `package.json`). Use `--force` to overwrite an existing file.

### Updates
Upon updates of this package, **re-run the install command** to pull the latest
version of this config into the consumer project.

Changelog
--------------------------------------------------------------------------------
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
