// Obfuscates the JS source before packaging.
// Runs automatically as part of build:win / build:mac / build:linux.
// Reads from src/, writes obfuscated copies to the project root that electron-builder picks up.

const fs = require("fs");
const path = require("path");
const JSObfuscator = require("javascript-obfuscator");

const FILES = ["main.js", "preload.js", "renderer.js"];
const SRC_DIR = path.join(__dirname, "..", "src");
const OUT_DIR = path.join(__dirname, "..");

// If src/ doesn't exist, fall back to in-place — read from the working copy,
// back it up, obfuscate, write back. This lets developers keep editing the
// originals while still shipping obfuscated builds.

const BACKUP_DIR = path.join(__dirname, "..", ".source-backup");
if (!fs.existsSync(BACKUP_DIR)) fs.mkdirSync(BACKUP_DIR, { recursive: true });

console.log("Obfuscating JS sources...");
let count = 0;
for (const file of FILES) {
  const srcPath = path.join(OUT_DIR, file);
  if (!fs.existsSync(srcPath)) {
    console.warn(`  skip: ${file} not found`);
    continue;
  }
  const original = fs.readFileSync(srcPath, "utf8");
  // Skip if it's already obfuscated (looks like a single dense line)
  if (original.length > 200 && original.split("\n").length < 5 && !original.includes("//")) {
    console.log(`  ${file}: already obfuscated, skipping`);
    continue;
  }
  // Back up original so we can restore after building
  fs.writeFileSync(path.join(BACKUP_DIR, file), original);
  // Obfuscate
  const obfuscated = JSObfuscator.obfuscate(original, {
    compact: true,
    controlFlowFlattening: false, // off — would slow Electron startup
    deadCodeInjection: false,
    debugProtection: false,
    disableConsoleOutput: false,
    identifierNamesGenerator: "hexadecimal",
    log: false,
    renameGlobals: false,
    rotateStringArray: true,
    selfDefending: false,
    stringArray: true,
    stringArrayEncoding: ["base64"],
    stringArrayThreshold: 0.7,
    unicodeEscapeSequence: false,
  }).getObfuscatedCode();
  fs.writeFileSync(srcPath, obfuscated);
  console.log(`  ${file}: obfuscated (${original.length} -> ${obfuscated.length} chars)`);
  count++;
}

console.log(`Done. Obfuscated ${count} file(s).`);
console.log("Run 'node build-tools/restore.js' after building to restore the original source.");
