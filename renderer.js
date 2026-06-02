// Renderer — runs in the window. Talks to main via window.api (set up by preload.js).

let isRunning = false;

async function init() {
  const cfg = await window.api.loadConfig();
  document.getElementById("serverUrl").value = cfg.serverUrl || "";
  document.getElementById("syncCode").value = cfg.password || "";
  document.getElementById("playerName").value = cfg.playerName || "";
  document.getElementById("discordAppId").value = cfg.discordAppId || "";
  document.getElementById("pollIntervalSec").value = cfg.pollIntervalSec || 15;
  document.getElementById("autoStart").checked = !!cfg.autoStart;
  document.getElementById("minimizeToTray").checked = cfg.minimizeToTray !== false;
}

function readConfig() {
  return {
    serverUrl: document.getElementById("serverUrl").value.trim(),
    password: document.getElementById("syncCode").value.trim().toUpperCase(),
    playerName: document.getElementById("playerName").value.trim(),
    discordAppId: document.getElementById("discordAppId").value.trim(),
    pollIntervalSec: parseInt(document.getElementById("pollIntervalSec").value, 10) || 15,
    autoStart: document.getElementById("autoStart").checked,
    minimizeToTray: document.getElementById("minimizeToTray").checked,
  };
}

document.getElementById("save").addEventListener("click", async () => {
  const cfg = readConfig();
  await window.api.saveConfig(cfg);
  flashStatus("Settings saved ✓", "ok");
});

document.getElementById("toggle").addEventListener("click", async () => {
  const cfg = readConfig();
  if (!cfg.discordAppId || !cfg.password || !cfg.playerName) {
    flashStatus("Fill in all required fields first", "err");
    return;
  }
  await window.api.saveConfig(cfg);
  if (isRunning) {
    await window.api.stopRPC();
    setRunning(false);
  } else {
    await window.api.startRPC(cfg);
    setRunning(true);
  }
});

// "What's a Sync Code?" help expander
document.getElementById("syncHelpToggle").addEventListener("click", (e) => {
  e.preventDefault();
  const box = document.getElementById("syncHelpBox");
  box.style.display = box.style.display === "block" ? "none" : "block";
});

function setRunning(running) {
  isRunning = running;
  const btn = document.getElementById("toggle");
  btn.textContent = running ? "Stop" : "Start";
  btn.className = running ? "btn-stop" : "btn-start";
}

function flashStatus(msg, kind) {
  const el = document.getElementById("status");
  el.textContent = msg;
  el.className = "status " + (kind || "");
}

// Listen for live status updates from main process
window.api.onStatus((payload) => {
  if (payload.ok) {
    flashStatus(payload.message || "Connected", "ok");
    setRunning(true);
    if (payload.presence) {
      document.getElementById("livePreview").style.display = "block";
      document.getElementById("previewDetails").textContent = payload.presence.details;
      document.getElementById("previewState").textContent = payload.presence.state;
    }
  } else {
    flashStatus(payload.message || "Disconnected", "err");
    setRunning(false);
  }
});

// Update status (auto-updater progress)
window.api.onUpdateStatus((payload) => {
  const el = document.getElementById("updateStatus");
  if (!el) return;
  el.style.display = "block";
  if (payload.state === "downloading") {
    el.textContent = `Update downloading... ${payload.percent !== undefined ? payload.percent + "%" : ""}`;
    el.className = "update-bar downloading";
  } else if (payload.state === "ready") {
    el.textContent = `Update ${payload.version} ready — restart to install`;
    el.className = "update-bar ready";
  } else if (payload.state === "up-to-date") {
    el.textContent = "App is up to date";
    el.className = "update-bar ok";
    setTimeout(() => { el.style.display = "none"; }, 3000);
  }
});

// Help links
document.querySelectorAll("[data-link]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    window.api.openLink(el.getAttribute("data-link"));
  });
});

init();
