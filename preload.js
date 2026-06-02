// Preload — bridge between renderer (UI) and main process.
// Uses contextBridge so renderer can't access Node directly (security best practice).

const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  loadConfig: () => ipcRenderer.invoke("config:load"),
  saveConfig: (cfg) => ipcRenderer.invoke("config:save", cfg),
  startRPC: (cfg) => ipcRenderer.invoke("rpc:start", cfg),
  stopRPC: () => ipcRenderer.invoke("rpc:stop"),
  openLink: (url) => ipcRenderer.invoke("link:open", url),
  onStatus: (cb) => {
    ipcRenderer.on("rpc-status", (e, payload) => cb(payload));
  },
  onUpdateStatus: (cb) => {
    ipcRenderer.on("update-status", (e, payload) => cb(payload));
  },
});
