#!/usr/bin/env node
import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const hasForceFlag = process.argv.includes('--force');

const sourceConfigPath = findSourceConfigPath();
const targetConfigPath = join(findProjectRootDir(), '.markdownlint-cli2.yaml');
const configInProjectRootDir = existsSync(targetConfigPath);

try {
  if (configInProjectRootDir) {
    if (hasForceFlag) {
      installConfig('✅ Overwrote ".markdownlint-cli2.yaml" at project-root');
    } else {
      // Two spaces after the emoji necessary to print a space correctly.
      console.log('⚠️ SKIPPED: ".markdownlint-cli2.yaml" already exists in project-root');
      console.log('Use "--force" flag to overwrite.');
    }
  } else {
    installConfig('✅ Installed ".markdownlint-cli2.yaml" to project-root')
  }
} catch (error) {
  console.error('❌ FAIL installing configuration file:', error.message);
  process.exit(1);
}

/**
 * Find config file in this script's directory.
 *
 * @returns {string} Absolute path to the bundled configuration file.
 */
function findSourceConfigPath() {
  const thisFileName = fileURLToPath(import.meta.url);
  const thisDirName = dirname(thisFileName);
  const sourceConfigPath = join(thisDirName, '.markdownlint-cli2.yaml');
  return sourceConfigPath;
}

/**
 * Find project-root directory from where this script is called. Fall back to
 * the current directory if none is found.
 *
 * @param {string} [startDir] Directory to start the search from.
 * @returns {string} Absolute path to the project-root directory.
 */
function findProjectRootDir(startDir = process.cwd()) {
  return (
    findUpwards(startDir, 'package.json') ??
    findUpwards(startDir, '.git') ??
    startDir
  );
}

/**
 * Walk up from a directory to find the nearest ancestor containing the given
 * marker.
 *
 * @param {string} startDir Directory to start walking up from.
 * @param {string} marker File or directory name to look for.
 * @returns {string | null} Absolute path to the matching ancestor directory.
 */
function findUpwards(startDir, marker) {
  let currentDir = startDir;

  while (true) {
    if (existsSync(join(currentDir, marker))) {
      return currentDir;
    }

    const parentDir = dirname(currentDir);
    if (parentDir === currentDir) {
      return null;
    }

    currentDir = parentDir;
  }
}

/**
 * Copy the config file to the project-root directory.
 *
 * @param {string} message Success message to print.
 * @returns {void}
 */
function installConfig(message) {
  copyFileSync(sourceConfigPath, targetConfigPath);
  console.log(message);
}
