# Devast RPC — Discord Rich Presence app for Devast.io

Desktop app that shows players' Devast.io stats on their Discord profile, live.

```
[Your Discord Name]
Playing Devast.io
Playing as YourNick
12,450c · 24K/8D · 🔥5 · 👑 Loyalist
[Join the Sandbox] [Discord Server]
```

---

## For the server owner — first-time setup (one-time)

### 1. Verify the /rpc-status endpoint works

Main bot v122+ exposes `/rpc-status?pw=SYNCCODE`. Test it:
```
curl http://34.159.44.117:8000/rpc-status?pw=YOUR_TEST_CODE
```
You should get JSON with nick, coins, kills, etc.

### 2. Create the Discord application

1. Go to https://discord.com/developers/applications
2. Click **New Application** → name it "Devast.io"
3. Copy the **Application ID** — this is what you'll share with players
4. Go to **Rich Presence → Art Assets**
5. Upload PNGs (256×256 to 1024×1024):
   - `devast_logo` — big image
   - `devast_small` — small badge in corner
   - Optional: `rank_homeless`, `rank_rookie`, `rank_mythic`, etc. for rank-specific badges

Assets take a few minutes to propagate. The key is the lowercase filename without extension.

### 3. Set up the icons

Drop into `build/`:
- `icon.ico` (Windows, 256×256)
- `icon.icns` (Mac, multi-resolution)
- `icon.png` (Linux, 512×512)

Skip this and you'll get generic icons. https://icoconvert.com or https://cloudconvert.com can convert from PNG.

### 4. Edit package.json with your GitHub info

In `package.json`, find this block:
```json
"publish": [
  {
    "provider": "github",
    "owner": "REPLACE_WITH_YOUR_GITHUB_USERNAME",
    "repo": "REPLACE_WITH_YOUR_REPO_NAME"
  }
]
```
Replace the placeholders. **The auto-updater fetches updates from THIS GitHub repo.**

### 5. Push to GitHub

Create a public GitHub repo. Push everything (the `.gitignore` keeps `node_modules` and `dist` out).

### 6. Cut a release

```bash
git tag v1.0.0
git push --tags
```

GitHub Actions builds the installers and attaches them to a release automatically. ~5-10 minutes.

### 7. Send players the download link

Drop this in your Discord, filled in:

> 💗 **Devast.io Discord Rich Presence is here!**
>
> Show your live in-game stats on your Discord profile.
>
> Download: <github releases link>
>
> Install, paste your Sync Code (`?id` in-game), your name, and this App ID: `YOUR_APP_ID_HERE`
>
> Click Start. Done.

---

## For players — install in 2 minutes

1. Download the installer from the releases page (Windows .exe, Mac .dmg, or Linux .AppImage)
2. Run it. On Windows you may see "Windows protected your PC" — click **More info → Run anyway** (it's unsigned but safe)
3. Open Devast RPC
4. Fill in:
   - **Sync Code** — get yours by typing `?id` in-game, or `/sync-code` in Discord. **This is NOT a password — it's an in-game ID code.** The app explains this if you click "What's this?"
   - **Your In-Game Name**
   - **Discord Application ID** — paste what the server owner shared
5. Click **Save Settings** then **Start**
6. Open Discord desktop. Your profile now shows you playing Devast.io.

The app stays in your system tray. Right-click for show/hide/quit. Check "Launch on startup" to have it open automatically.

---

## About auto-updates

**Players don't need to do anything.** The app checks for updates 10 seconds after launch and every 4 hours after. When a new version is downloaded, players see a prompt to restart now or wait. If they pick "Later", it installs automatically next time they quit.

**To ship an update:** bump the version in `package.json` (e.g. `1.0.0` → `1.0.1`), commit, and push a tag:
```bash
git tag v1.0.1
git push --tags
```

GitHub Actions builds the new installers and publishes the release. The auto-updater on players' machines finds it and downloads silently.

**To force-check from Settings menu:** (not built in yet, can add if useful)

---

## About source code protection

**Quick truth:** Any Electron app's JavaScript can technically be extracted by determined users. This is true for Slack, Discord itself, VS Code, etc. You can make it inconvenient but not impossible.

**What this app does to make it harder:**
- ✅ **ASAR archive** — Electron files are bundled into a single archive instead of sitting as loose .js files
- ✅ **JavaScript obfuscation** — `main.js`, `preload.js`, `renderer.js` are minified and obfuscated before packaging (hex variable names, base64 string arrays, control flow scrambled). Reading the obfuscated code is painful and time-consuming.
- ✅ **No secrets in code** — the app contains nothing sensitive. Server URL and Discord App ID are public info. Sync codes are user-supplied. Even if someone fully de-obfuscated the source, there's nothing valuable to steal.

**What this app does NOT do (because it can't, on Electron):**
- ❌ Cryptographically prevent source extraction
- ❌ Bind execution to specific users
- ❌ Hide that it's an Electron app

**Bottom line:** for a free Discord Rich Presence helper, the obfuscation is plenty. The cost of de-obfuscating is much higher than the value of what would be exposed (nothing).

---

## About the "Sync Code" — explaining it to players

Players will see "Sync Code" in the app and (hopefully) **NOT** panic. But here's what to tell them if they ask:

> Your Sync Code is a random ID the bot gave you (like ABCD1234) — like a coat-check ticket for your game account. It's the only way the app can find YOUR stats.
>
> It is NOT your Discord password, NOT your email, NOT anything that matters outside this one game.
>
> Even if someone got it, all they could do is play as your in-game account on this one server. They couldn't access your Discord, email, or anything else.
>
> Find yours by typing `?id` in-game or `/sync-code` in Discord.

The in-app help text says basically the same thing. Most players will be fine after reading it.

---

## Dev — running from source

```bash
git clone https://github.com/YOU/devast-rpc.git
cd devast-rpc
npm install
npm start
```

When running from source, the auto-updater is disabled (it only runs in packaged builds).

Build locally:
- `npm run build:win` (only on Windows)
- `npm run build:mac` (only on Mac, requires Xcode)
- `npm run build:linux` (anywhere with Linux build deps)

The build steps:
1. `npm run obfuscate` — back up sources to `.source-backup/`, obfuscate `main.js`/`preload.js`/`renderer.js` in place
2. `electron-builder` packages the obfuscated files
3. Run `node build-tools/restore.js` to put your readable source back

**Easier path:** push to GitHub and let Actions build for you. No local toolchain needed.

---

## Code signing (optional, for owners)

Without signing, Windows shows "unknown publisher" SmartScreen. Players can click through but some won't.

To remove the warning:
1. Buy a code signing certificate ($200-400/year from DigiCert, Sectigo, SSL.com)
2. Add `CSC_LINK` (base64 of your .pfx) and `CSC_KEY_PASSWORD` as GitHub Actions secrets
3. electron-builder signs automatically on next build

For Mac, requires Apple Developer ($99/year) + notarization. Add `APPLE_ID`, `APPLE_ID_PASSWORD`, `APPLE_TEAM_ID` as secrets.

You can ship unsigned indefinitely. SmartScreen friction is annoying but tolerated by most gaming communities for free indie tools.

---

## Privacy summary for players

- The app reads YOUR stats only, using YOUR sync code
- Sync code is stored locally in your user data folder (never uploaded anywhere except the Devast.io server, which already has it)
- The app contacts: (1) the Devast.io game server to fetch your stats, (2) Discord desktop to display the Rich Presence, (3) GitHub Releases to check for app updates
- Source: <github repo link> — anyone can audit
