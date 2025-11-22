Kishi's .markdownlint-cli2.yaml
================================================================================
DM Kishi's custom YAML configuration for [markdownlint-cli2](https://github.com/DavidAnson/markdownlint-cli2).

Install
--------------------------------------------------------------------------------
```sh
# Install package.
pnpm add --save-dev @dmkishi/markdownlint-cli2.yaml

# Write `.markdownlint-cli2.yaml` to project root (overwrite if already there.)
npx @dmkishi/markdownlint-cli2.yaml --force
```

Update
--------------------------------------------------------------------------------
Upon updating this package, it is necessary to **re-run the install command** to update this config file.

```sh
npx @dmkishi/markdownlint-cli2.yaml --force
```

Changelog
--------------------------------------------------------------------------------
### v0.0.2 (2025-11-21)
- Fix install script.

### v0.0.1 (2025-11-21)
- Initial release.
