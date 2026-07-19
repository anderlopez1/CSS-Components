/**
 * Build script to convert CommonJS output to ESM
 * This creates .mjs files from the TypeScript compilation
 */

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');

// Read the compiled index.js file
const indexPath = path.join(distDir, 'index.js');
const indexContent = fs.readFileSync(indexPath, 'utf-8');

// Convert to ESM format (this is a simple conversion for index files)
// In production, you might want to use a proper bundler like esbuild or rollup
const esmContent = indexContent
  .replace(/^"use strict";?\n?/, '') // Remove use strict
  .replace(/Object\.defineProperty\(exports[^;]*;/, ''); // Remove define exports

// Write ESM version
const esmPath = path.join(distDir, 'index.mjs');
fs.writeFileSync(esmPath, esmContent, 'utf-8');

console.log('✅ Built ESM version:', esmPath);
console.log('✅ Library build complete!');
