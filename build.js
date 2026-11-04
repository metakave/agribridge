/**
 * Build script for AgriBridge — Cloudflare Pages compilation
 * Compiles production assets into the 'dist/' directory
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = __dirname;
const DIST_DIR = path.join(ROOT_DIR, 'dist');

console.log('🚀 Starting Cloudflare compilation for AgriBridge...\n');

// 1. Clean / create dist directory
if (fs.existsSync(DIST_DIR)) {
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR, { recursive: true });

// 2. Helper to copy directories recursively
function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 3. Copy top-level HTML pages & Cloudflare configs
const topLevelFiles = [
  'index.html',
  'about.html',
  'contact.html',
  '_headers',
  '_redirects'
];

for (const file of topLevelFiles) {
  const src = path.join(ROOT_DIR, file);
  const dest = path.join(DIST_DIR, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`  ✓ Copied: ${file}`);
  }
}

// 4. Copy asset directories
const assetDirs = ['assets', 'css', 'js'];

for (const dir of assetDirs) {
  const src = path.join(ROOT_DIR, dir);
  const dest = path.join(DIST_DIR, dir);
  if (fs.existsSync(src)) {
    copyDirSync(src, dest);
    console.log(`  ✓ Copied directory: ${dir}/`);
  }
}

// 5. Verification
const distEntries = fs.readdirSync(DIST_DIR);
console.log(`\n✨ Build completed successfully! Compiled ${distEntries.length} items to dist/\n`);
console.log('Ready for Cloudflare Pages:');
console.log('  - Build command: npm run build (or empty)');
console.log('  - Build output directory: dist (or root /)');
