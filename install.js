#!/usr/bin/env node
import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const hasForceFlag = process.argv.includes('--force');

const sourceConfigPath = findSourceConfigPath();
const destConfigPath = join(findProjectRootDir(), '.markdownlint-cli2.yaml');
const configInProjectRootDir = existsSync(destConfigPath);

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
 */
function findSourceConfigPath() {
  const thisFileName = fileURLToPath(import.meta.url);
  const thisDirName = dirname(thisFileName);
  const sourceConfigPath = join(thisDirName, '.markdownlint-cli2.yaml');
  return sourceConfigPath;
}

/**
 * Find project-root directory from where this script is called.
 */
function findProjectRootDir(startDir = process.cwd()) {
  let currentDir = startDir;

  while (true) {
    const packagePath = join(currentDir, 'package.json');
    if (existsSync(packagePath)) {
      return currentDir;
    }

    const parentDir = path.dirname(currentDir);
    if (parentDir === currentDir) {
      throw new Error('Not inside a Node.js project (no package.json found)');
    }

    currentDir = parentDir;
  }
}

function installConfig(message) {
  copyFileSync(sourceConfigPath, destConfigPath);
  console.log(message);
}
