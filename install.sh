#!/bin/sh
#
# Install ".markdownlint-cli2.yaml" to the current directory.
#
# Usage:
#   curl -fsSL https://raw.githubusercontent.com/dmkishi/markdownlint-cli2.yaml/main/install.sh | sh -s -- [--force]
#
# The config source URL can be overridden via the MARKDOWNLINT_CLI2_YAML_URL
# environment variable, e.g. a "file://" URL for local testing.

set -eu

DEFAULT_CONFIG_URL='https://raw.githubusercontent.com/dmkishi/markdownlint-cli2.yaml/main/.markdownlint-cli2.yaml'
TARGET_CONFIG_PATH='.markdownlint-cli2.yaml'

install_config() {
  message=$1

  if command -v curl >/dev/null 2>&1; then
    curl -fsSL "$config_url" -o "$TARGET_CONFIG_PATH" || download_fail
  elif command -v wget >/dev/null 2>&1; then
    wget -qO "$TARGET_CONFIG_PATH" "$config_url" || download_fail
  else
    echo '❌ FAIL installing configuration file: neither "curl" nor "wget" found' >&2
    exit 1
  fi

  echo "$message"
}

download_fail() {
  echo "❌ FAIL installing configuration file: could not download $config_url" >&2
  exit 1
}

main() {
  force=false
  for arg in "$@"; do
    if [ "$arg" = '--force' ]; then
      force=true
    fi
  done

  config_url=${MARKDOWNLINT_CLI2_YAML_URL:-$DEFAULT_CONFIG_URL}

  if [ -e "$TARGET_CONFIG_PATH" ]; then
    if [ "$force" = true ]; then
      install_config '✅ Overwrote ".markdownlint-cli2.yaml" in the current directory'
    else
      echo '⚠️ SKIPPED: ".markdownlint-cli2.yaml" already exists in the current directory'
      echo 'Use "--force" flag to overwrite.'
    fi
  else
    install_config '✅ Installed ".markdownlint-cli2.yaml" to the current directory'
  fi
}

main "$@"
