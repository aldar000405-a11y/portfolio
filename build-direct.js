#!/usr/bin/env node
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const projectDir = __dirname;
process.chdir(projectDir);

console.log('Starting Next.js build...');
console.log('Project directory:', projectDir);
console.log('Node version:', process.version);
console.log('npm version:', require('child_process').execSync('npm --version', { encoding: 'utf8' }).trim());

// Run next build directly
const result = spawnSync(path.resolve(projectDir, 'node_modules/.bin/next.cmd'), ['build'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NODE_ENV: 'production' }
});

if (result.error) {
  console.error('Build failed with error:', result.error);
  process.exit(1);
}

process.exit(result.status);
