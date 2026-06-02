// Restores the original JS sources from .source-backup/
// Run this AFTER building: node build-tools/restore.js
// This way your working files stay readable while the shipped build is obfuscated.

const fs = require("fs");
const path = require("path");

const BACKUP_DIR = path.join(__dirname, "..", ".source-backup");
const OUT_DIR = path.join(__dirname, "..");

if (!fs.existsSync(BACKUP_DIR)) {
  console.log("No backup to restore from.");
  process.exit(0);
}

const files = fs.readdirSync(BACKUP_DIR);
for (const file of files) {
  fs.copyFileSync(path.join(BACKUP_DIR, file), path.join(OUT_DIR, file));
  console.log(`Restored ${file}`);
}

console.log("Done.");
