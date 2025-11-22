#!/usr/bin/env node
import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const hasForceFlag = process.argv.includes('--force');

const thisFileName = fileURLToPath(import.meta.url);
const thisDirName = dirname(thisFileName);

/*
 * Project root should be three levels up from this file:
 *   `PROJECT_ROOT/node_modules/.bin/install.js`.
 */
const projectRootPath = join(thisDirName, '..', '..', '..');
const sourceConfigPath = join(thisDirName, '.markdownlint-cli2.yaml');
const destConfigPath = join(projectRootPath, '.markdownlint-cli2.yaml');

function installConfig(message) {
  copyFileSync(sourceConfigPath, destConfigPath);
  console.log(message);
}

try {
  if (!thisDirName.includes('node_modules')) {
    console.log('❌ SKIPPED: Does not install in development environment');
    process.exit(0);
  }

  if (existsSync(destConfigPath)) {
    if (hasForceFlag) {
      installConfig('✅ Overwrote ".markdownlint-cli2.yaml" at project root');
    } else {
      // Two spaces after the emoji necessary to print a space correctly.
      console.log('⚠️ SKIPPED: ".markdownlint-cli2.yaml" already exists in project root');
      console.log('Use "--force" flag to overwrite.');
    }
  } else {
    installConfig('✅ Installed ".markdownlint-cli2.yaml" to project root')
  }
} catch (error) {
  console.error('❌ FAIL installing configuration file:', error.message);
  process.exit(1);
}
