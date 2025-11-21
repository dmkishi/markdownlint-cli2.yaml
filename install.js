import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/*
 * Project root should be three levels up from this file:
 *   `PROJECT_ROOT/node_modules/@dmkishi/markdownlint-cli2.yaml/`.
 */
const projectRoot = join(__dirname, '..', '..', '..');
const sourceConfigPath = join(__dirname, '.markdownlint-cli2.yaml');
const destConfigPath = join(projectRoot, '.markdownlint-cli2.yaml');

try {
  if (!__dirname.includes('node_modules')) {
    console.log('❌ SKIPPED: Does not install in development environment');
    process.exit(0);
  }

  if (existsSync(destConfigPath)) {
    console.log('⚠️ SKIPPED: ".markdownlint-cli2.yaml" already exists in project root');
    process.exit(0);
  }

  copyFileSync(sourceConfigPath, destConfigPath);
  console.log('✅ Installed ".markdownlint-cli2.yaml" to project root');
} catch (error) {
  console.error('❌ FAIL installing configuration file:', error.message);
  process.exit(1);
}
