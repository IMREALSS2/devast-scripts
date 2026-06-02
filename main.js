// Devast RPC — Main Process
// Owns the window, the system tray, and the Discord RPC connection.

const { app, BrowserWindow, Tray, Menu, ipcMain, nativeImage, shell, dialog } = require("electron");
const path = require("path");
const fs = require("fs");
const RPC = require("discord-rpc");
const { autoUpdater } = require("electron-updater");

// Auto-updater config — checks GitHub Releases for newer versions
autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;

// ── Single instance lock ──
// Prevents two copies running at once (which would fight over the Discord IPC).
if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

let mainWindow = null;
let tray = null;
let rpcClient = null;
let rpcConnected = false;
let pollInterval = null;
let sessionStart = Date.now();

// ── Config persistence ──
const CONFIG_PATH = path.join(app.getPath("userData"), "config.json");

function loadConfig() {
  try {
    if (fs.existsSync(CONFIG_PATH)) {
      return JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
    }
  } catch (e) {
    console.error("Failed to load config:", e.message);
  }
  // Defaults — server URL preset so most players only need password + name + app ID
  return {
    serverUrl: "http://34.159.44.117:8000",
    password: "",
    playerName: "",
    discordAppId: "",
    pollIntervalSec: 15,
    autoStart: false,
    minimizeToTray: true,
  };
}

function saveConfig(cfg) {
  try {
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(cfg, null, 2));
    return true;
  } catch (e) {
    console.error("Failed to save config:", e.message);
    return false;
  }
}

// ── Window ──
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 520,
    height: 640,
    resizable: false,
    title: "Devast RPC",
    icon: path.join(__dirname, "build", process.platform === "win32" ? "icon.ico" : "icon.png"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile("index.html");

  // When user clicks the X — minimize to tray instead of quitting (if enabled)
  mainWindow.on("close", (e) => {
    const cfg = loadConfig();
    if (cfg.minimizeToTray && !app.isQuiting) {
      e.preventDefault();
      mainWindow.hide();
    }
  });
}

// ── System tray ──
function createTray() {
  const iconPath = path.join(__dirname, "build", process.platform === "win32" ? "icon.ico" : "icon.png");
  let icon;
  try {
    icon = nativeImage.createFromPath(iconPath);
    if (icon.isEmpty()) icon = nativeImage.createEmpty();
  } catch (e) {
    icon = nativeImage.createEmpty();
  }
  tray = new Tray(icon);
  tray.setToolTip("Devast RPC");
  rebuildTrayMenu();
  tray.on("click", () => {
    if (mainWindow) {
      if (mainWindow.isVisible()) mainWindow.hide();
      else mainWindow.show();
    }
  });
}

function rebuildTrayMenu() {
  if (!tray) return;
  const menu = Menu.buildFromTemplate([
    {
      label: rpcConnected ? "✓ Connected to Discord" : "○ Not connected",
      enabled: false,
    },
    { type: "separator" },
    { label: "Show", click: () => mainWindow && mainWindow.show() },
    { label: "Hide", click: () => mainWindow && mainWindow.hide() },
    { type: "separator" },
    {
      label: "Quit Devast RPC",
      click: () => {
        app.isQuiting = true;
        if (rpcClient) {
          try { rpcClient.clearActivity(); } catch (e) {}
          try { rpcClient.destroy(); } catch (e) {}
        }
        app.quit();
      },
    },
  ]);
  tray.setContextMenu(menu);
}

// ── Discord RPC ──
async function startRPC(cfg) {
  if (rpcClient) {
    try { await rpcClient.destroy(); } catch (e) {}
    rpcClient = null;
  }
  rpcConnected = false;
  sessionStart = Date.now();

  if (!cfg.discordAppId || !cfg.password || !cfg.playerName || !cfg.serverUrl) {
    sendStatus({ ok: false, message: "Fill in all fields first" });
    return;
  }

  try {
    RPC.register(cfg.discordAppId);
    rpcClient = new RPC.Client({ transport: "ipc" });

    rpcClient.on("ready", () => {
      console.log("Connected to Discord");
      rpcConnected = true;
      sendStatus({ ok: true, message: "Connected to Discord ✓", username: rpcClient.user ? rpcClient.user.username : null });
      rebuildTrayMenu();
      updatePresence(cfg);
      if (pollInterval) clearInterval(pollInterval);
      pollInterval = setInterval(() => updatePresence(cfg), Math.max(5, cfg.pollIntervalSec || 15) * 1000);
    });

    rpcClient.on("disconnected", () => {
      rpcConnected = false;
      sendStatus({ ok: false, message: "Disconnected from Discord" });
      rebuildTrayMenu();
      if (pollInterval) { clearInterval(pollInterval); pollInterval = null; }
    });

    await rpcClient.login({ clientId: cfg.discordAppId });
  } catch (err) {
    console.error("RPC connect failed:", err.message);
    sendStatus({ ok: false, message: "Couldn't connect — is Discord running?" });
    rpcClient = null;
    rpcConnected = false;
  }
}

async function stopRPC() {
  if (pollInterval) { clearInterval(pollInterval); pollInterval = null; }
  if (rpcClient) {
    try { await rpcClient.clearActivity(); } catch (e) {}
    try { await rpcClient.destroy(); } catch (e) {}
    rpcClient = null;
  }
  rpcConnected = false;
  sendStatus({ ok: false, message: "Stopped" });
  rebuildTrayMenu();
}

async function updatePresence(cfg) {
  if (!rpcClient || !rpcConnected) return;

  // Fetch the player's status from the game server
  let status = null;
  try {
    const url = `${cfg.serverUrl.replace(/\/$/, "")}/rpc-status?pw=${encodeURIComponent(cfg.password)}`;
    const res = await fetch(url, { method: "GET" });
    if (res.ok) status = await res.json();
  } catch (e) {
    console.error("Status fetch failed:", e.message);
  }

  const stateLine = status ? buildStateLine(status) : "Connecting to the Sandbox...";

  const presence = {
    details: `Playing as ${cfg.playerName}`,
    state: stateLine,
    startTimestamp: sessionStart,
    largeImageKey: "devast_logo",
    largeImageText: "Devast.io",
    smallImageKey: status && status.rank ? "rank_" + status.rank.toLowerCase().replace(/[^a-z0-9]/g, "") : "devast_small",
    smallImageText: status && status.rank ? `Rank: ${status.rank}` : "Devast.io",
    instance: false,
    buttons: [
      { label: "Join the Sandbox", url: "https://devast.io/?start-webhook=34.159.44.117" },
      { label: "Discord Server", url: "https://discord.gg/EyDuSVMMEJ" },
    ],
  };

  try {
    await rpcClient.setActivity(presence);
    sendStatus({ ok: true, message: "Connected to Discord ✓", presence: { details: presence.details, state: presence.state } });
  } catch (e) {
    console.error("setActivity failed:", e.message);
  }
}

function buildStateLine(status) {
  const parts = [];
  if (status.coins !== undefined) parts.push(`${status.coins.toLocaleString()}c`);
  if (status.kills !== undefined) parts.push(`${status.kills}K/${status.deaths || 0}D`);
  if (status.killStreak && status.killStreak >= 3) parts.push(`🔥${status.killStreak}`);
  if (status.faction) parts.push(status.faction === "loyalists" ? "👑 Loyalist" : "🔥 Rebel");
  return parts.join(" · ") || "In the Sandbox";
}

function sendStatus(payload) {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("rpc-status", payload);
  }
}

// ── IPC handlers (renderer ↔ main) ──
ipcMain.handle("config:load", () => loadConfig());
ipcMain.handle("config:save", (e, cfg) => {
  const ok = saveConfig(cfg);
  // Apply auto-launch setting immediately
  try {
    app.setLoginItemSettings({ openAtLogin: !!cfg.autoStart, openAsHidden: true });
  } catch (e) {}
  return ok;
});
ipcMain.handle("rpc:start", async (e, cfg) => { await startRPC(cfg); return true; });
ipcMain.handle("rpc:stop", async () => { await stopRPC(); return true; });
ipcMain.handle("link:open", (e, url) => shell.openExternal(url));

// ── App lifecycle ──
app.whenReady().then(() => {
  createWindow();
  createTray();

  // Auto-start RPC if a saved config has everything filled in
  const cfg = loadConfig();
  if (cfg.discordAppId && cfg.password && cfg.playerName) {
    // Small delay so the window is ready to receive status events
    setTimeout(() => startRPC(cfg), 1500);
  }

  // ── Auto-updater wiring ──
  // Skip in development (where there's no published release to check against)
  if (app.isPackaged) {
    // Wait 10s after launch so it doesn't compete with the initial RPC connection
    setTimeout(() => {
      autoUpdater.checkForUpdates().catch((e) => console.error("[UPDATE] check failed:", e.message));
    }, 10000);
    // Re-check every 4 hours while running
    setInterval(() => {
      autoUpdater.checkForUpdates().catch(() => {});
    }, 4 * 60 * 60 * 1000);
  }

  autoUpdater.on("update-available", (info) => {
    console.log("[UPDATE] new version available:", info.version);
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("update-status", { state: "downloading", version: info.version });
    }
  });

  autoUpdater.on("update-not-available", () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("update-status", { state: "up-to-date" });
    }
  });

  autoUpdater.on("download-progress", (p) => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("update-status", { state: "downloading", percent: Math.floor(p.percent) });
    }
  });

  autoUpdater.on("update-downloaded", async (info) => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("update-status", { state: "ready", version: info.version });
    }
    // Prompt user — they can install now or wait until next quit
    const result = await dialog.showMessageBox(mainWindow, {
      type: "info",
      buttons: ["Restart now", "Later"],
      defaultId: 0,
      title: "Update ready",
      message: `Devast RPC ${info.version} is ready to install.`,
      detail: "Restart the app now to apply the update, or it will install automatically next time you quit.",
    });
    if (result.response === 0) {
      app.isQuiting = true;
      autoUpdater.quitAndInstall();
    }
  });

  autoUpdater.on("error", (err) => {
    console.error("[UPDATE] error:", err.message);
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Don't quit on window-all-closed — stay in tray
app.on("window-all-closed", (e) => {
  if (process.platform !== "darwin") {
    // On Mac, this is fine. On Windows/Linux, we stay alive via tray.
  }
});

app.on("before-quit", () => {
  app.isQuiting = true;
  if (rpcClient) {
    try { rpcClient.clearActivity(); } catch (e) {}
    try { rpcClient.destroy(); } catch (e) {}
  }
});
