#!/usr/bin/env node
const { execSync } = require('child_process');
const path = require('path');

process.chdir(path.dirname(__filename));
try {
  console.log('Building...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build complete!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
