(function (_0xc174c) {
  "use strict";

  var _0x11g24d = 11;
  _0xc174c = "sgnittes_kcahitlum_vivrus".split("").reverse().join("");
  _0x11g24d = 7;
  const _0x15cfeb = {
    aimbotEnabled: true,
    aimOnShoot: true,
    prediction: 15,
    distCoef: 1,
    speedCoef: 1,
    wallCheck: false,
    autoHitEnabled: true,
    meleeLock: true,
    meleeLockDist: 15,
    autoPickupEnabled: true,
    spinbotEnabled: false,
    spinbotInterval: 400,
    zoomEnabled: true,
    customZoom: 1,
    xrayEnabled: true,
    xrayOpacity: 0.4,
    espEnabled: true,
    espCircleThickness: 1,
    tracersEnabled: true,
    espLineThickness: 1,
    grenadeTimerEnabled: true,
    showPlayerNames: true,
    showWeaponBorders: true,
    grassColor: "#80a040",
    waterColor: "#2060c0",
    dirtColor: "#c0a060",
    guiPrimary: "#1a1a1a",
    guiSecondary: "#000000",
    guiText: "#ffffff",
    guiAccent: "#5f5f5f",
    showFPS: true,
    showPing: true,
    showKills: true,
    showHealthText: true,
    enemyColor: "#FF0000",
    allyColor: "#00FFFF",
    predictionColor: "#9100ff",
    aimbotKey: "b",
    autoHitKey: "",
    meleeLockKey: "",
    wallCheckKey: "",
    zoomKey: "",
    xrayKey: "",
    espKey: "",
    tracersKey: "",
    spinbotKey: "y",
    ignoreAllies: false
  };
  const _0xg2cf = Object.assign({}, _0x15cfeb);
  Object.assign(_0xg2cf, {
    _frameCount: 0,
    _autoHitPulse: false,
    _isCooking: false,
    _cookStartTime: 0,
    _wasXray: false,
    _meleeLockActive: false,
    _meleeMove: {
      up: false,
      down: false,
      left: false,
      right: false
    },
    _origMapColors: null,
    realMouseX: window.innerWidth / 2,
    realMouseY: window.innerHeight / 2,
    currentTargetScreenPos: null,
    aimDirScreenPos: null
  });
  Object.defineProperty(window, "mobile", {
    get: () => _0xg2cf.autoPickupEnabled,
    set: () => {}
  });
  function _0x26aac() {
    var _0xfe_0xe60 = 6;
    const _0xebbc = localStorage.getItem(_0xc174c);
    _0xfe_0xe60 = 15;
    if (_0xebbc) {
      try {
        const _0x97g99c = JSON.parse(_0xebbc);
        for (let _0xf2_0xf61 in _0x97g99c) {
          if (_0xg2cf.hasOwnProperty(_0xf2_0xf61) && typeof _0xg2cf[_0xf2_0xf61] !== "noitcnuf".split("").reverse().join("")) {
            _0xg2cf[_0xf2_0xf61] = _0x97g99c[_0xf2_0xf61];
          }
        }
      } catch (e) {
        console.error("Failed to parse saved settings:", e);
      }
    }
  }
  _0xg2cf.saveConfig = function () {
    var _0x3311d = 4;
    const _0xgdee8a = {};
    _0x3311d = 11;
    for (let _0xd5a in _0xg2cf) {
      if (!_0xd5a.startsWith("_") && typeof _0xg2cf[_0xd5a] !== "function") {
        _0xgdee8a[_0xd5a] = _0xg2cf[_0xd5a];
      }
    }
    localStorage.setItem(_0xc174c, JSON.stringify(_0xgdee8a));
    if (window.__surviv_gui) {
      var _0x9g9fe = 9;
      const _0x91dg3d = document.querySelector(".dg .cr.function:hover .property-name");
      _0x9g9fe = "chopak";
      if (_0x91dg3d && _0x91dg3d.innerText === "Save Config") {
        var _0xed6ab = 6;
        const _0x4g02g = _0x91dg3d.innerText;
        _0xed6ab = 14;
        _0x91dg3d.innerText = "Saved!";
        setTimeout(() => _0x91dg3d.innerText = _0x4g02g, 1000);
      }
    }
  };
  _0xg2cf.resetConfig = function () {
    if (confirm("?tluafed ot sgnittes gifnoc lla teser ot tnaw uoy erus uoy erA".split("").reverse().join(""))) {
      for (let _0xcb7fbb in _0x15cfeb) {
        _0xg2cf[_0xcb7fbb] = _0x15cfeb[_0xcb7fbb];
      }
      _0xg2cf.saveConfig();
      _0xg2cf.applyMapColors();
      _0x89588f();
      if (typeof _0x5cgg !== "undefined") {
        _0x5cgg.updateWeaponBorders();
        _0xeeef7c();
      }
      if (window.__surviv_gui) {
        var _0x9371a = 3;
        const _0x3e1dg = folder => {
          for (let c in folder.__controllers) {
            folder.__controllers[c].updateDisplay();
          }
          for (let f in folder.__folders) {
            _0x3e1dg(folder.__folders[f]);
          }
        };
        _0x9371a = 5;
        _0x3e1dg(window.__surviv_gui);
      }
    }
  };
  _0xg2cf.applyMapColors = function () {
    if (_0xfe2 && _0xfe2.game && _0xfe2.game.It && _0xfe2.game.It.mapLoaded) {
      const _0x716b6f = _0xfe2.game.It;
      const _0x21fb = _0x716b6f.getMapDef().biome.colors;
      var _0xeadb = 5;
      const _0xf5db4c = parseInt(_0xg2cf.dirtColor.replace("#", ""), 16);
      _0xeadb = "plmjng".split("").reverse().join("");
      _0x21fb.grass = parseInt(_0xg2cf.grassColor.replace("#", ""), 16);
      _0x21fb.water = parseInt(_0xg2cf.waterColor.replace("#", ""), 16);
      _0x21fb.beach = _0xf5db4c;
      if (_0x21fb.riverbank !== undefined) {
        _0x21fb.riverbank = _0xf5db4c;
      }
      if (_0x716b6f.display && _0x716b6f.display.ground && _0xfe2.game.zt) {
        _0x716b6f.display.ground.clear();
        let _0x7e728d;
        let _0xcbe = 2 / (_0xfe2.game.zt.ppu || 16);
        _0x7e728d = 2;
        _0x716b6f.renderTerrain(_0x716b6f.display.ground, _0xcbe, _0xfe2.game.canvasMode, false);
      }
      if (_0xfe2.pixi && _0xfe2.pixi.renderer) {
        _0x716b6f.renderMap(_0xfe2.pixi.renderer, _0xfe2.game.canvasMode);
      }
      if (_0xfe2.pixi && _0xfe2.pixi.renderer && _0xfe2.pixi.renderer.background) {
        _0xfe2.pixi.renderer.background.color = _0x21fb.grass;
      }
    }
  };
  _0xg2cf.resetMapColors = function () {
    if (_0xg2cf._origMapColors && _0xfe2 && _0xfe2.game && _0xfe2.game.It) {
      _0xg2cf.grassColor = "#" + _0xg2cf._origMapColors.grass.toString(16).padStart(6, "0");
      _0xg2cf.waterColor = "#" + _0xg2cf._origMapColors.water.toString(16).padStart(6, "0");
      _0xg2cf.dirtColor = "#" + _0xg2cf._origMapColors.beach.toString(16).padStart(6, "0");
      _0xg2cf.applyMapColors();
      if (window.__surviv_gui) {
        var _0xb4f = 9;
        const _0x96a = folder => {
          for (let c in folder.__controllers) {
            folder.__controllers[c].updateDisplay();
          }
          for (let f in folder.__folders) {
            _0x96a(folder.__folders[f]);
          }
        };
        _0xb4f = "efenbc";
        _0x96a(window.__surviv_gui);
      }
    }
  };
  function _0x89588f() {
    let _0x5_0x162 = document.getElementById("selyts-emeht-vivrus".split("").reverse().join(""));
    if (!_0x5_0x162) {
      _0x5_0x162 = document.createElement("style");
      _0x5_0x162.id = "surviv-theme-styles";
      document.head.appendChild(_0x5_0x162);
    }
    _0x5_0x162.textContent = `
            .dg, .dg * { box-sizing: content-box !important; }
            .custom-gui-header, .dg li.title, .dg .cr.function, .dg.main .close-button {
                transition: background-color 0.15s ease, filter 0.15s ease !important;
                cursor: pointer !important;
            }
            .custom-gui-header:hover, .dg li.title:hover, .dg .cr.function:hover, .dg.main .close-button:hover {
                filter: brightness(1.2);
            }
            .dg.main.a { background-color: ${_0xg2cf.guiPrimary} !important; }
            .dg.main .close-button { 
                background-color: ${_0xg2cf.guiSecondary} !important; 
                color: ${_0xg2cf.guiText} !important; 
                border-top: 2px solid ${_0xg2cf.guiAccent} !important; 
                box-shadow: none !important;
            }
            .dg li.title { background-color: ${_0xg2cf.guiSecondary} !important; color: ${_0xg2cf.guiText} !important; }
            .dg .cr { background-color: ${_0xg2cf.guiPrimary} !important; color: ${_0xg2cf.guiText} !important; border-left-color: ${_0xg2cf.guiAccent} !important; }
            .dg .cr:not(.color) .c input[type=text] { 
                background-color: ${_0xg2cf.guiSecondary} !important; 
                color: ${_0xg2cf.guiText} !important; 
                user-select: auto !important; 
                cursor: text !important;
            }
            .dg .c .slider-fg { background-color: ${_0xg2cf.guiAccent} !important; }
            .dg .c .slider-bg { background-color: ${_0xg2cf.guiSecondary} !important; }
            .dg .property-name { width: 62% !important; overflow: hidden !important; text-overflow: ellipsis !important; }
            .dg .c { width: 38% !important; }
            .dg .folder .folder > ul {
                margin-left: 10px !important;
                border-left: 2px solid ${_0xg2cf.guiAccent} !important;
            }
            .custom-gui-header { 
                background-color: ${_0xg2cf.guiSecondary} !important; 
                color: ${_0xg2cf.guiText} !important; 
                border-bottom: 2px solid ${_0xg2cf.guiAccent} !important;
                text-align: center;
                padding: 8px 0;
                margin: 0;
                font-family: sans-serif;
                font-weight: bold;
                font-size: 14px;
            }
        `;
  }
  function _0xe1bgb(folder, obj, prop, name, min, max, step) {
    let _0xc3b = min !== undefined ? folder.add(obj, prop, min, max, step) : folder.add(obj, prop);
    if (name) {
      _0xc3b.name(name);
    }
    _0xc3b.listen();
    return _0xc3b;
  }
  function _0x6fgc(folder, obj, prop, name, onChangeCallback) {
    let _0xc389f = folder.addColor(obj, prop).name(name).listen();
    _0xc389f.onChange(() => {
      if (onChangeCallback) {
        onChangeCallback();
      }
    });
    return _0xc389f;
  }
  function _0xg23edc(_0x3c0e1b) {
    if (window.__surviv_gui) {
      return;
    }
    const _0x4c274b = window.dat || (typeof dat !== "denifednu".split("").reverse().join("") ? dat : null);
    if (!_0x4c274b) {
      return;
    }
    _0x89588f();
    const _0x8915a = new _0x4c274b.GUI({
      width: 340
    });
    window.__surviv_gui = _0x8915a;
    _0x8915a.domElement.style.userSelect = "enon".split("").reverse().join("");
    const _0xfa1eea = _0x8915a.domElement.querySelector("lu".split("").reverse().join(""));
    _0x3c0e1b = 12;
    if (_0xfa1eea) {
      var _0xded = 11;
      const _0xb9f = document.createElement("il".split("").reverse().join(""));
      _0xded = 7;
      _0xb9f.classList.add("custom-gui-header");
      _0xb9f.textContent = "universal io cheats";
      _0xfa1eea.prepend(_0xb9f);
    }
    const _0x160ed = document.querySelector("ca.gd.".split("").reverse().join(""));
    if (_0x160ed) {
      _0x160ed.style.zIndex = "999999";
      ["mousedown", "kcilc".split("").reverse().join(""), "contextmenu", "wheel", "touchstart", "keydown", "keyup", "sserpyek".split("").reverse().join("")].forEach(evt => {
        _0x160ed.addEventListener(evt, e => e.stopPropagation());
      });
      ["mousedown", "keydown", "keyup", "keypress"].forEach(evt => {
        window.addEventListener(evt, e => {
          if (e.target && e.target.closest && e.target.closest("ca.gd.".split("").reverse().join(""))) {
            e.preventDefault = () => {};
          }
        }, true);
      });
    }
    const _0x7_0xb56 = _0x8915a.addFolder("General");
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "aimbotEnabled", "Aimbot");
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "aimOnShoot", "Aim on Shoot");
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "prediction", "noitciderP".split("").reverse().join(""), 0, 100, 1);
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "feoCtsid".split("").reverse().join(""), "Distance Coef", 0, 3, 0.1);
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "speedCoef", "feoC deepS telluB".split("").reverse().join(""), 0.1, 5, 0.1);
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "kcehCllaw".split("").reverse().join(""), ")latnemirepxE( kcehC llaW".split("").reverse().join(""));
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "delbanEtiHotua".split("").reverse().join(""), "Auto Fire");
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "meleeLock", "kcoL eeleM".split("").reverse().join(""));
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "tsiDkcoLeelem".split("").reverse().join(""), "suidaR LM".split("").reverse().join(""), 5, 50, 1);
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "autoPickupEnabled", "Auto Loot");
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "spinbotEnabled", "Spinbot");
    _0xe1bgb(_0x7_0xb56, _0xg2cf, "spinbotInterval", ")tor/sm( deepS nipS".split("").reverse().join(""), 10, 2000, 10);
    const _0x523gd = _0x8915a.addFolder("slausiV".split("").reverse().join(""));
    _0xe1bgb(_0x523gd, _0xg2cf, "zoomEnabled", "Zoom").onChange(val => {
      if (val && _0xfe2 && _0xfe2.game && _0xfe2.game.Je && _0xfe2.game.Je.orig_Xe) {
        _0xg2cf.customZoom = _0xfe2.game.Je.orig_Xe();
      }
    });
    _0xe1bgb(_0x523gd, _0xg2cf, "mooZmotsuc".split("").reverse().join(""), "Zoom Level", 0.01, 500);
    _0xe1bgb(_0x523gd, _0xg2cf, "delbanEyarx".split("").reverse().join(""), "X Ray");
    _0xe1bgb(_0x523gd, _0xg2cf, "yticapOyarx".split("").reverse().join(""), "X-Ray Opacity", 0, 1, 0.05);
    _0xe1bgb(_0x523gd, _0xg2cf, "espEnabled", "selcriC PSE".split("").reverse().join(""));
    _0xe1bgb(_0x523gd, _0xg2cf, "espCircleThickness", "ESP Circle Thickness", 1, 10, 1);
    _0xe1bgb(_0x523gd, _0xg2cf, "tracersEnabled", "srecarT PSE".split("").reverse().join(""));
    _0xe1bgb(_0x523gd, _0xg2cf, "ssenkcihTeniLpse".split("").reverse().join(""), "ESP Line Thickness", 1, 10, 1);
    _0xe1bgb(_0x523gd, _0xg2cf, "delbanEremiTedanerg".split("").reverse().join(""), "Grenade Timer");
    _0xe1bgb(_0x523gd, _0xg2cf, "showPlayerNames", "Show Names");
    _0xe1bgb(_0x523gd, _0xg2cf, "showWeaponBorders", "sredroB nopaeW".split("").reverse().join("")).onChange(() => {
      _0x5cgg.updateWeaponBorders();
    });
    var _0xdeb95f = 4;
    const _0x8_0x655 = _0x8915a.addFolder("sretnuoC".split("").reverse().join(""));
    _0xdeb95f = 11;
    _0xe1bgb(_0x8_0x655, _0xg2cf, "SPFwohs".split("").reverse().join(""), "Show FPS").onChange(() => {
      _0xeeef7c();
    });
    _0xe1bgb(_0x8_0x655, _0xg2cf, "gniPwohs".split("").reverse().join(""), "gniP wohS".split("").reverse().join("")).onChange(() => {
      _0xeeef7c();
    });
    _0xe1bgb(_0x8_0x655, _0xg2cf, "showKills", "Show Kills").onChange(() => {
      _0xeeef7c();
    });
    _0xe1bgb(_0x8_0x655, _0xg2cf, "showHealthText", "htlaeH wohS".split("").reverse().join("")).onChange(() => {
      _0x5cgg.updateHealthBars();
    });
    const _0x268bd = _0x8915a.addFolder("Colors");
    _0x6fgc(_0x268bd, _0xg2cf, "roloCymene".split("").reverse().join(""), "roloC ymenE".split("").reverse().join(""));
    _0x6fgc(_0x268bd, _0xg2cf, "allyColor", "roloC yllA".split("").reverse().join(""));
    _0x6fgc(_0x268bd, _0xg2cf, "predictionColor", "Prediction Color");
    _0x6fgc(_0x268bd, _0xg2cf, "grassColor", "roloC ssarG".split("").reverse().join(""), _0xg2cf.applyMapColors);
    _0x6fgc(_0x268bd, _0xg2cf, "roloCretaw".split("").reverse().join(""), "roloC retaW".split("").reverse().join(""), _0xg2cf.applyMapColors);
    _0x6fgc(_0x268bd, _0xg2cf, "roloCtrid".split("").reverse().join(""), "Dirt Color", _0xg2cf.applyMapColors);
    _0x268bd.add(_0xg2cf, "sroloCpaMteser".split("").reverse().join("")).name("Reset Map Colors");
    const _0x7147ba = _0x8915a.addFolder("Theme");
    _0x6fgc(_0x7147ba, _0xg2cf, "yramirPiug".split("").reverse().join(""), "Primary", _0x89588f);
    _0x6fgc(_0x7147ba, _0xg2cf, "guiSecondary", "Secondary", _0x89588f);
    _0x6fgc(_0x7147ba, _0xg2cf, "txeTiug".split("").reverse().join(""), "txeT".split("").reverse().join(""), _0x89588f);
    _0x6fgc(_0x7147ba, _0xg2cf, "guiAccent", "Accent", _0x89588f);
    var _0x7bb79e = 7;
    const _0x36bda = _0x8915a.addFolder("sdnibyeK".split("").reverse().join(""));
    _0x7bb79e = "cemncd";
    _0xe1bgb(_0x36bda, _0xg2cf, "aimbotKey", "yeK tobmiA".split("").reverse().join(""));
    _0xe1bgb(_0x36bda, _0xg2cf, "autoHitKey", "yeK eriF otuA".split("").reverse().join(""));
    _0xe1bgb(_0x36bda, _0xg2cf, "yeKkcoLeelem".split("").reverse().join(""), "Melee Lock Key");
    _0xe1bgb(_0x36bda, _0xg2cf, "wallCheckKey", "yeK kcehC llaW".split("").reverse().join(""));
    _0xe1bgb(_0x36bda, _0xg2cf, "yeKtobnips".split("").reverse().join(""), "yeK tobnipS".split("").reverse().join(""));
    _0xe1bgb(_0x36bda, _0xg2cf, "yeKmooz".split("").reverse().join(""), "yeK mooZ".split("").reverse().join(""));
    _0xe1bgb(_0x36bda, _0xg2cf, "yeKyarx".split("").reverse().join(""), "X-Ray Key");
    _0xe1bgb(_0x36bda, _0xg2cf, "yeKpse".split("").reverse().join(""), "ESP Circles Key");
    _0xe1bgb(_0x36bda, _0xg2cf, "tracersKey", "ESP Tracers Key");
    var _0x5c_0xf63 = 13;
    const _0xc7426g = _0x8915a.addFolder("gifnoC".split("").reverse().join(""));
    _0x5c_0xf63 = 4;
    _0xc7426g.add(_0xg2cf, "gifnoCevas".split("").reverse().join("")).name("Save Config");
    _0xc7426g.add(_0xg2cf, "resetConfig").name("Reset Config");
    var _0xcc19ge = 4;
    const _0xcfcba = _0x8915a.addFolder("Misc");
    _0xcc19ge = "jbbigp";
    _0xe1bgb(_0xcfcba, _0xg2cf, "ignoreAllies", "Ignore Allies");
    var _0x6f265d = 8;
    const _0x78103c = [_0x7_0xb56, _0x523gd, _0x8_0x655, _0x268bd, _0x7147ba, _0x36bda, _0xc7426g, _0xcfcba];
    _0x6f265d = 5;
    _0x78103c.forEach(f => {
      let _0xe01a;
      const _0xdfag5d = f.domElement.querySelector(".title");
      _0xe01a = 3;
      if (_0xdfag5d) {
        _0xdfag5d.addEventListener("kcilc".split("").reverse().join(""), () => {
          setTimeout(() => {
            if (!f.closed) {
              _0x78103c.forEach(other => {
                if (other !== f && !other.closed) {
                  other.close();
                }
              });
            }
          }, 10);
        });
      }
    });
    window.addEventListener("mousemove", e => {
      _0xg2cf.realMouseX = e.clientX;
      _0xg2cf.realMouseY = e.clientY;
    }, true);
    window.addEventListener("keydown", e => {
      if (document.activeElement.tagName === "INPUT") {
        return;
      }
      let _0x059e6e;
      const _0x179e8c = e.key.toLowerCase();
      _0x059e6e = 1;
      if (_0x179e8c === "h") {
        if (_0x160ed) {
          _0x160ed.style.display = _0x160ed.style.display === "none" ? "block" : "none";
        }
        return;
      }
      if (_0xg2cf.aimbotKey && _0x179e8c === _0xg2cf.aimbotKey.toLowerCase()) {
        _0xg2cf.aimbotEnabled = !_0xg2cf.aimbotEnabled;
      }
      if (_0xg2cf.autoHitKey && _0x179e8c === _0xg2cf.autoHitKey.toLowerCase()) {
        _0xg2cf.autoHitEnabled = !_0xg2cf.autoHitEnabled;
      }
      if (_0xg2cf.meleeLockKey && _0x179e8c === _0xg2cf.meleeLockKey.toLowerCase()) {
        _0xg2cf.meleeLock = !_0xg2cf.meleeLock;
      }
      if (_0xg2cf.wallCheckKey && _0x179e8c === _0xg2cf.wallCheckKey.toLowerCase()) {
        _0xg2cf.wallCheck = !_0xg2cf.wallCheck;
      }
      if (_0xg2cf.spinbotKey && _0x179e8c === _0xg2cf.spinbotKey.toLowerCase()) {
        _0xg2cf.spinbotEnabled = !_0xg2cf.spinbotEnabled;
      }
      if (_0xg2cf.zoomKey && _0x179e8c === _0xg2cf.zoomKey.toLowerCase()) {
        _0xg2cf.zoomEnabled = !_0xg2cf.zoomEnabled;
      }
      if (_0xg2cf.xrayKey && _0x179e8c === _0xg2cf.xrayKey.toLowerCase()) {
        _0xg2cf.xrayEnabled = !_0xg2cf.xrayEnabled;
      }
      if (_0xg2cf.espKey && _0x179e8c === _0xg2cf.espKey.toLowerCase()) {
        _0xg2cf.espEnabled = !_0xg2cf.espEnabled;
      }
      if (_0xg2cf.tracersKey && _0x179e8c === _0xg2cf.tracersKey.toLowerCase()) {
        _0xg2cf.tracersEnabled = !_0xg2cf.tracersEnabled;
      }
    });
  }
  class PingTest {
    constructor(selectedServer) {
      this.ptcDataBuf = new ArrayBuffer(1);
      this.test = {
        region: selectedServer.region,
        url: `wss://${selectedServer.url}/ptc`,
        ping: 9999,
        ws: null,
        sendTime: 0,
        retryCount: 0
      };
    }
    startPingTest() {
      if (!this.test.ws) {
        const _0xf06e = new WebSocket(this.test.url);
        _0xf06e.binaryType = "arraybuffer";
        _0xf06e.onopen = () => {
          this.sendPing();
          this.test.retryCount = 0;
        };
        _0xf06e.onmessage = () => {
          const elapsed = (Date.now() - this.test.sendTime) / 1000;
          this.test.ping = Math.round(elapsed * 1000);
          this.test.retryCount = 0;
          setTimeout(() => this.sendPing(), 200);
        };
        _0xf06e.onerror = () => {
          this.test.ping = null;
          this.test.retryCount++;
          if (this.test.retryCount < 5) {
            setTimeout(() => this.startPingTest(), 2000);
          } else {
            try {
              _0xf06e.close();
            } catch (e) {}
            this.test.ws = null;
          }
        };
        _0xf06e.onclose = () => {
          this.test.ws = null;
        };
        this.test.ws = _0xf06e;
      }
    }
    sendPing() {
      if (this.test.ws && this.test.ws.readyState === WebSocket.OPEN) {
        this.test.sendTime = Date.now();
        this.test.ws.send(this.ptcDataBuf);
      }
    }
    getPingResult() {
      return {
        region: this.test.region,
        ping: this.test.ping
      };
    }
  }
  var _0xb2c = 5;
  const _0x5cgg = {
    fpsCounter: null,
    pingCounter: null,
    killsCounter: null,
    pingTest: null,
    currentServer: null,
    initCounters() {
      const _0x9ef1c = document.getElementById("ui-top-left");
      if (!_0x9ef1c) {
        return;
      }
      const _0xc8g7ee = id => {
        const _0xgf568b = document.createElement("div");
        _0xgf568b.id = id;
        Object.assign(_0xgf568b.style, {
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          padding: "5px 10px",
          marginTop: "10px",
          borderRadius: "5px",
          fontFamily: "Arial, sans-serif",
          fontSize: "14px",
          zIndex: "10000",
          pointerEvents: "none"
        });
        _0x9ef1c.appendChild(_0xgf568b);
        return _0xgf568b;
      };
      if (!this.fpsCounter) {
        this.fpsCounter = _0xc8g7ee("retnuoCspf".split("").reverse().join(""));
      }
      if (!this.pingCounter) {
        this.pingCounter = _0xc8g7ee("retnuoCgnip".split("").reverse().join(""));
      }
      if (!this.killsCounter) {
        this.killsCounter = _0xc8g7ee("retnuoCsllik".split("").reverse().join(""));
      }
      _0xeeef7c();
      setInterval(() => this.managePing(), 1000);
    },
    managePing() {
      if (!_0xg2cf.showPing) {
        return;
      }
      const _0x758c1f = document.getElementById("team-server-select");
      const _0x58a6ab = document.getElementById("server-select-main");
      const _0x4eb3b = new RegExp("+w\\#/\\".split("").reverse().join(""), "").test(globalThis.location.href) && _0x758c1f ? _0x758c1f.value : _0x58a6ab ? _0x58a6ab.value : null;
      if (_0x4eb3b && _0x4eb3b !== this.currentServer) {
        this.currentServer = _0x4eb3b;
        if (this.pingTest?.test.ws) {
          try {
            this.pingTest.test.ws.close();
          } catch (e) {}
        }
        const _0x8b8fd = [{
          region: "NA",
          url: "usr.mathsiscoolfun.com:8001"
        }, {
          region: "EU",
          url: "eur.mathsiscoolfun.com:8001"
        }, {
          region: "Asia",
          url: "asr.mathsiscoolfun.com:8001"
        }, {
          region: "SA",
          url: "sa.mathsiscoolfun.com:8001"
        }];
        let _0x8bdf;
        const _0x8135ee = _0x8b8fd.find(s => _0x4eb3b.toUpperCase() === s.region.toUpperCase());
        _0x8bdf = 1;
        if (_0x8135ee) {
          this.pingTest = new PingTest(_0x8135ee);
          this.pingTest.startPingTest();
        } else {
          this.pingTest = null;
        }
      }
    },
    updateWeaponBorders() {
      Array.from(document.getElementsByClassName("ui-weapon-name")).forEach(weaponNameElement => {
        const _0x5e_0xa53 = weaponNameElement.closest(".ui-weapon-switch");
        if (!_0x5e_0xa53 || _0x5e_0xa53.id === "ui-weapon-id-4") {
          return;
        }
        if (!_0xg2cf.showWeaponBorders) {
          _0x5e_0xa53.style.border = "";
          return;
        }
        var _0xf_0x7de = 16;
        const _0xe34a = (weaponNameElement.textContent || "").trim();
        _0xf_0x7de = 3;
        if (!_0xe34a) {
          _0x5e_0xa53.style.border = "";
          return;
        }
        var _0xfe376b = 8;
        let _0xe2_0x2ca = "FFFFFF#".split("").reverse().join("");
        _0xfe376b = 4;
        switch (_0xe34a.toUpperCase()) {
          case "CZ-3A1":
          case "G18C":
          case "M9":
          case "R39M".split("").reverse().join(""):
          case "01-CAM".split("").reverse().join(""):
          case "MP5":
          case "P30L":
          case "L03P LAUD".split("").reverse().join(""):
          case "UMP9":
          case "VECTOR":
          case "VSS":
          case "FLAMETHROWER":
            _0xe2_0x2ca = "#FFAE00";
            break;
          case "74-KA".split("").reverse().join(""):
          case "83-TO".split("").reverse().join(""):
          case "OTS-38":
          case "M39 EMR":
          case "82-PD".split("").reverse().join(""):
          case "MOSIN-NAGANT":
          case "SCAR-H":
          case "SV-98":
          case "M1 GARAND":
          case "PKP PECHENEG":
          case "49-NA".split("").reverse().join(""):
          case "8191M RAB".split("").reverse().join(""):
          case "BLR 81":
          case "36-DVS".split("").reverse().join(""):
          case "M134":
          case "GROZA":
          case "S-AZORG".split("").reverse().join(""):
            _0xe2_0x2ca = "#007FFF";
            break;
          case "FAMAS":
          case "614M".split("").reverse().join(""):
          case "942M".split("").reverse().join(""):
          case "QBB-97":
          case "RPS 21 KM".split("").reverse().join(""):
          case "M4A1-S":
          case "SCOUT ELITE":
          case "L86A2":
            _0xe2_0x2ca = "#0f690d";
            break;
          case "M870":
          case "022PM".split("").reverse().join(""):
          case "SAIGA-12":
          case "21-SAPS".split("").reverse().join(""):
          case "USAS-12":
          case "09 REPUS".split("").reverse().join(""):
          case "LASR GUN":
          case "M1100":
            _0xe2_0x2ca = "0000FF#".split("").reverse().join("");
            break;
          case "49 LEDOM".split("").reverse().join(""):
          case "REKAMECAEP".split("").reverse().join(""):
          case "MK45G":
          case "M1911":
          case "1A1M".split("").reverse().join(""):
            _0xe2_0x2ca = "#800080";
            break;
          case "DEAGLE 50":
          case "RETSALB WOBNIAR".split("").reverse().join(""):
            _0xe2_0x2ca = "000000#".split("").reverse().join("");
            break;
          case "S-MWA".split("").reverse().join(""):
          case "MK 20 SSR":
            _0xe2_0x2ca = "#808000";
            break;
          case "NONNAC OTATOP".split("").reverse().join(""):
          case "NUG DUPS".split("").reverse().join(""):
            _0xe2_0x2ca = "#A52A2A";
            break;
          case "FLARE GUN":
            _0xe2_0x2ca = "#FF4500";
            break;
          case "M79":
            _0xe2_0x2ca = "080800#".split("").reverse().join("");
            break;
          case "HEART CANNON":
            _0xe2_0x2ca = "#FFC0CB";
            break;
        }
        _0x5e_0xa53.style.border = `3px solid ${_0xe2_0x2ca}`;
      });
    },
    setupWeaponBorders() {
      this.updateWeaponBorders();
      Array.from(document.getElementsByClassName("eman-nopaew-iu".split("").reverse().join(""))).forEach(weaponNameElement => {
        let _0xa65f9b;
        const _0x10_0x051 = new MutationObserver(() => this.updateWeaponBorders());
        _0xa65f9b = 10;
        _0x10_0x051.observe(weaponNameElement, {
          childList: true,
          characterData: true,
          subtree: true
        });
      });
    },
    updateHealthBars() {
      if (!_0xg2cf.showHealthText) {
        document.querySelectorAll("txet-htlaeh.".split("").reverse().join("")).forEach(el => el.style.display = "enon".split("").reverse().join(""));
        return;
      }
      document.querySelectorAll("#ui-health-container").forEach(container => {
        var _0xf875a = 3;
        const _0xa942cc = container.querySelector("lautca-htlaeh-iu#".split("").reverse().join(""));
        _0xf875a = 9;
        if (_0xa942cc) {
          var _0x90e7dd = 16;
          const _0xb_0xa31 = Math.round(Number.parseFloat(_0xa942cc.style.width || "0"));
          _0x90e7dd = 10;
          let _0x9a_0xb4e = container.querySelector("txet-htlaeh.".split("").reverse().join(""));
          if (!_0x9a_0xb4e) {
            _0x9a_0xb4e = document.createElement("naps".split("").reverse().join(""));
            _0x9a_0xb4e.classList.add("health-text");
            Object.assign(_0x9a_0xb4e.style, {
              width: "100%",
              textAlign: "center",
              marginTop: "5px",
              color: "#333",
              fontSize: "20px",
              fontWeight: "bold",
              position: "absolute",
              zIndex: "10",
              pointerEvents: "none"
            });
            container.appendChild(_0x9a_0xb4e);
          }
          _0x9a_0xb4e.style.display = "block";
          _0x9a_0xb4e.textContent = `${_0xb_0xa31}%`;
        }
      });
    },
    getKills() {
      let _0x_0x834;
      const _0xa4e = document.querySelector(".ui-player-kills.js-ui-player-kills");
      _0x_0x834 = 2;
      if (_0xa4e) {
        var _0xg2eee = 2;
        const _0xd64ced = parseInt(_0xa4e.textContent || "", 10);
        _0xg2eee = 6;
        if (isNaN(_0xd64ced)) {
          return 0;
        } else {
          return _0xd64ced;
        }
      }
      return 0;
    },
    startStandaloneLoop() {
      var _0x297a = 2;
      let _0x08c2a = performance.now();
      _0x297a = 2;
      let _0xc8dacd = 0;
      const _0xe29bda = () => {
        var _0x41f6cc = 6;
        const now = performance.now();
        _0x41f6cc = 7;
        const _0x6dfebf = now - _0x08c2a;
        _0xc8dacd++;
        if (_0x6dfebf >= 1000) {
          var _0xe9g1cf = 13;
          const _0x379d1b = Math.round(_0xc8dacd * 1000 / _0x6dfebf);
          _0xe9g1cf = 8;
          _0xc8dacd = 0;
          _0x08c2a = now;
          if (_0xg2cf.showFPS && this.fpsCounter) {
            this.fpsCounter.textContent = `FPS: ${_0x379d1b}`;
          }
          if (_0xg2cf.showKills && this.killsCounter) {
            this.killsCounter.textContent = `Kills: ${this.getKills()}`;
          }
          if (_0xg2cf.showPing && this.pingCounter && this.pingTest) {
            let _0x7f4d;
            const _0xe7fb9f = this.pingTest.getPingResult();
            _0x7f4d = 2;
            if (_0xe7fb9f.ping !== 9999 && _0xe7fb9f.ping !== null) {
              this.pingCounter.textContent = `PING: ${_0xe7fb9f.ping} ms`;
              this.pingCounter.style.color = _0xe7fb9f.ping > 300 ? "d4d4ff#".split("").reverse().join("") : _0xe7fb9f.ping > 150 ? "#ffa64d" : "etihw".split("").reverse().join("");
            } else {
              this.pingCounter.textContent = `PING: Connecting...`;
            }
          }
        }
        this.updateHealthBars();
        requestAnimationFrame(_0xe29bda);
      };
      requestAnimationFrame(_0xe29bda);
    }
  };
  _0xb2c = 13;
  function _0xeeef7c() {
    if (_0x5cgg.fpsCounter) {
      _0x5cgg.fpsCounter.style.display = _0xg2cf.showFPS ? "kcolb".split("").reverse().join("") : "none";
    }
    if (_0x5cgg.pingCounter) {
      _0x5cgg.pingCounter.style.display = _0xg2cf.showPing ? "block" : "none";
    }
    if (_0x5cgg.killsCounter) {
      _0x5cgg.killsCounter.style.display = _0xg2cf.showKills ? "kcolb".split("").reverse().join("") : "enon".split("").reverse().join("");
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    _0x26aac();
    if (typeof dat === "undefined" && typeof window.dat === "undefined") {
      const _0x293a9f = document.createElement("tpircs".split("").reverse().join(""));
      _0x293a9f.src = "sj.nim.iug.tad/9.7.0/iug-tad/sbil/xaja/moc.eralfduolc.sjndc//:sptth".split("").reverse().join("");
      _0x293a9f.onload = _0xg23edc;
      document.head.appendChild(_0x293a9f);
    } else {
      _0xg23edc();
    }
    setTimeout(() => {
      _0x5cgg.initCounters();
      _0x5cgg.setupWeaponBorders();
      _0x5cgg.startStandaloneLoop();
    }, 1000);
  });
  function _0x6d1e7c(p1, p2, center, radius, _0xf7ff3e, _0xaegf) {
    const _0xbag8e = p2.x - p1.x;
    var _0xe659e = 8;
    const _0x8232be = p2.y - p1.y;
    _0xe659e = "kkikmg";
    const _0x24e56c = _0xbag8e * _0xbag8e + _0x8232be * _0x8232be;
    _0xf7ff3e = 0;
    if (_0x24e56c === 0) {
      return Math.hypot(p1.x - center.x, p1.y - center.y) <= radius;
    }
    var _0x25c90d = 11;
    let t = ((center.x - p1.x) * _0xbag8e + (center.y - p1.y) * _0x8232be) / _0x24e56c;
    _0x25c90d = 10;
    t = Math.max(0, Math.min(1, t));
    const _0x20a2e = p1.x + t * _0xbag8e;
    _0xaegf = 0;
    var _0x68e25a = 15;
    const _0x8fe3b = p1.y + t * _0x8232be;
    _0x68e25a = 11;
    return Math.hypot(center.x - _0x20a2e, center.y - _0x8fe3b) <= radius;
  }
  function _0x3267fc(p1, p2, min, max) {
    if (p1.x >= min.x && p1.x <= max.x && p1.y >= min.y && p1.y <= max.y || p2.x >= min.x && p2.x <= max.x && p2.y >= min.y && p2.y <= max.y) {
      return true;
    }
    var _0x37gf8f = 6;
    const _0x63gc = p2.x - p1.x;
    _0x37gf8f = 2;
    var _0xc41a3a = 16;
    const _0x3a185d = p2.y - p1.y;
    _0xc41a3a = 13;
    let _0x19ec = 0;
    let _0x2g38c = 1;
    for (let i = 0; i < 2; i++) {
      const _0x8f0d2f = i === 0 ? p1.x : p1.y;
      let _0x4b86d;
      const _0x2eef2c = i === 0 ? _0x63gc : _0x3a185d;
      _0x4b86d = "kcldmb";
      var _0x6b_0xd6e = 10;
      const _0xg7aeca = i === 0 ? min.x : min.y;
      _0x6b_0xd6e = 7;
      let _0x6f2b8g;
      const _0x6afaf = i === 0 ? max.x : max.y;
      _0x6f2b8g = 14;
      if (Math.abs(_0x2eef2c) < 0.000001) {
        if (_0x8f0d2f < _0xg7aeca || _0x8f0d2f > _0x6afaf) {
          return false;
        }
      } else {
        let _0xe_0x2ga;
        let _0x8ba = 1 / _0x2eef2c;
        _0xe_0x2ga = 9;
        let _0x2f481e = (_0xg7aeca - _0x8f0d2f) * _0x8ba;
        let _0x1d_0x3d6 = (_0x6afaf - _0x8f0d2f) * _0x8ba;
        if (_0x2f481e > _0x1d_0x3d6) {
          let _0x6dd = _0x2f481e;
          _0x2f481e = _0x1d_0x3d6;
          _0x1d_0x3d6 = _0x6dd;
        }
        if (_0x2f481e > _0x19ec) {
          _0x19ec = _0x2f481e;
        }
        if (_0x1d_0x3d6 < _0x2g38c) {
          _0x2g38c = _0x1d_0x3d6;
        }
        if (_0x19ec > _0x2g38c) {
          return false;
        }
      }
    }
    return true;
  }
  function _0xc8g7a(p1, p2, myDi, myLayer, _0x10c7e) {
    if (!myDi || !myDi.game) {
      return true;
    }
    var _0xc6676d = 11;
    const _0xf3_0xe15 = myDi.game.It.Ie.ge();
    _0xc6676d = 17;
    for (let i = 0; i < _0xf3_0xe15.length; i++) {
      let _0x9faf = _0xf3_0xe15[i];
      if (!_0x9faf.active || _0x9faf.dead || _0x9faf.collidable === false || _0x9faf.isBush || _0x9faf.isWindow) {
        continue;
      }
      if (_0x9faf.height !== undefined && _0x9faf.height < 0.25) {
        continue;
      }
      if (_0x9faf.layer !== myLayer) {
        continue;
      }
      let col = _0x9faf.collider;
      if (col) {
        if (col.rad !== undefined) {
          if (_0x6d1e7c(p1, p2, col.pos, col.rad)) {
            return false;
          }
        } else if (col.min && col.max) {
          if (_0x3267fc(p1, p2, col.min, col.max)) {
            return false;
          }
        }
      }
    }
    const _0x595caa = myDi.game.It.Re.ge();
    _0x10c7e = 13;
    for (let i = 0; i < _0x595caa.length; i++) {
      let _0xdd7dd = _0x595caa[i];
      if (!_0xdd7dd.active) {
        continue;
      }
      if (_0xdd7dd.mask) {
        for (let j = 0; j < _0xdd7dd.mask.length; j++) {
          var _0x3fa6bd = 13;
          let col = _0xdd7dd.mask[j];
          _0x3fa6bd = 17;
          if (col.min && col.max) {
            if (_0x3267fc(p1, p2, col.min, col.max)) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
  var _0xdf8g = 8;
  let _0xfe2 = null;
  _0xdf8g = 7;
  let _0x1a0ead = null;
  const _0x89d45e = Function.prototype.bind;
  Function.prototype.bind = function (thisArg, ...args) {
    if (thisArg && typeof thisArg === "tcejbo".split("").reverse().join("")) {
      if (thisArg.pingTest && thisArg.audioManager && thisArg.siteInfo && thisArg.pixi !== undefined) {
        if (!_0xfe2) {
          _0xfe2 = thisArg;
          console.log("!enigne IXIP dekooh yllufsseccuS ]kcaH vivruS[".split("").reverse().join(""));
          if (_0xfe2.game && _0xfe2.game.__proto__) {
            const _0x78f56b = Object.getOwnPropertyNames(_0xfe2.game.__proto__).find(name => typeof _0xfe2.game.__proto__[name] === "noitcnuf".split("").reverse().join("") && _0xfe2.game.__proto__[name].length === 3);
            if (_0x78f56b && !_0xfe2.game.__rxhp_hooked) {
              var _0x2_0x73f = 12;
              const _0x14_0xa88 = _0xfe2.game.__proto__[_0x78f56b];
              _0x2_0x73f = 12;
              _0xfe2.game.__proto__[_0x78f56b] = function (msgType, payload, size) {
                if (payload && typeof payload === "object") {
                  if (_0xg2cf.autoPickupEnabled) {
                    if ("eliboMsi".split("").reverse().join("") in payload) {
                      payload.isMobile = true;
                    }
                    if ("useTouch" in payload) {
                      payload.useTouch = true;
                    }
                  }
                  if (payload.toMouseDir) {
                    var _0x22g = 3;
                    let _0xb343b = false;
                    _0x22g = 15;
                    if (_0xfe2 && _0xfe2.input && _0xfe2.input.mouseButtons) {
                      _0xb343b = !!_0xfe2.input.mouseButtons[0];
                    }
                    if (_0xg2cf.spinbotEnabled && !_0xb343b) {
                      var _0xe6d7e = 12;
                      let _0x494g4d = Date.now();
                      _0xe6d7e = 1;
                      var _0xeb6b = 3;
                      let _0xdb546a = _0x494g4d % _0xg2cf.spinbotInterval / _0xg2cf.spinbotInterval * Math.PI * 2;
                      _0xeb6b = 3;
                      payload.toMouseDir.x = Math.cos(_0xdb546a);
                      payload.toMouseDir.y = Math.sin(_0xdb546a);
                    }
                  }
                }
                return _0x14_0xa88.apply(this, arguments);
              };
              _0xfe2.game.__rxhp_hooked = true;
              console.log("[Surviv Hack] Successfully hooked Outbound Network Events!");
            }
          }
          _0xda9ca();
        }
      }
    }
    return _0x89d45e.apply(this, [thisArg, ...args]);
  };
  function _0xda9ca() {
    if (!_0xfe2.__update_hooked) {
      if (_0xfe2.pixi && _0xfe2.pixi.ticker) {
        _0xfe2.pixi.ticker.add(function () {
          try {
            _0xbbe8e();
          } catch (e) {
            console.error(":rorre redneR ]kcaH vivruS[".split("").reverse().join(""), e);
          }
        });
      } else {
        const _0x3db = _0xfe2.update;
        _0xfe2.update = function () {
          _0x3db.apply(this, arguments);
          try {
            _0xbbe8e();
          } catch (e) {
            console.error(":rorre redneR ]kcaH vivruS[".split("").reverse().join(""), e);
          }
        };
      }
      _0xfe2.__update_hooked = true;
    }
    window.addEventListener("wheel", e => {
      const _0x5a86c = [".dg", ".modal", "unem-trats#".split("").reverse().join(""), "#news-wrapper", "#ui-game-menu", "#modal-customize", ".modal-content", ".account-details-top"];
      if (e.target.closest && _0x5a86c.some(sel => e.target.closest(sel))) {
        return;
      }
      if (_0xg2cf.zoomEnabled) {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (e.deltaY > 0) {
          _0xg2cf.customZoom *= 1.2;
        } else {
          _0xg2cf.customZoom /= 1.2;
        }
        _0xg2cf.customZoom = Math.max(0.01, Math.min(500, _0xg2cf.customZoom));
      }
    }, {
      capture: true,
      passive: false
    });
  }
  function _0xbbe8e(_0xbf972g, _0xfg_0xd58, _0x26bfe) {
    _0xg2cf._frameCount++;
    _0xg2cf._autoHitPulse = _0xg2cf._frameCount % 6 < 3;
    if (_0xfe2 && _0xfe2.input) {
      if (!_0xfe2.input.__mouse_hooked) {
        var _0x7e57d = 6;
        const _0x428fge = _0xfe2.input.$e;
        _0x7e57d = 5;
        let _0xagf12a;
        let _0x5e2 = _0x428fge.x;
        _0xagf12a = 15;
        let _0xefedba = _0x428fge.y;
        Object.defineProperty(_0x428fge, "x", {
          get: function () {
            let _0xe5d = _0xfe2.input.mouseButtons && _0xfe2.input.mouseButtons[0];
            let _0x7c_0x4a8 = _0xfe2.game && _0xfe2.game.Je && typeof _0xfe2.game.Je.pr === "function" && _0xfe2.game.Je.pr() === "elbaworht".split("").reverse().join("");
            let _0xbbe44e = _0xg2cf.aimbotEnabled && !_0x7c_0x4a8;
            if (_0xg2cf.aimOnShoot && !_0xe5d) {
              _0xbbe44e = false;
            }
            if (_0xg2cf._meleeLockActive) {
              _0xbbe44e = true;
            }
            if (_0xbbe44e && _0xg2cf.aimDirScreenPos) {
              return _0xg2cf.aimDirScreenPos.x;
            }
            return _0x5e2;
          },
          set: function (val) {
            _0x5e2 = val;
          }
        });
        Object.defineProperty(_0x428fge, "y", {
          get: function () {
            let _0xg8fg3e = _0xfe2.input.mouseButtons && _0xfe2.input.mouseButtons[0];
            let _0x9a2 = _0xfe2.game && _0xfe2.game.Je && typeof _0xfe2.game.Je.pr === "noitcnuf".split("").reverse().join("") && _0xfe2.game.Je.pr() === "elbaworht".split("").reverse().join("");
            let _0xaed3ce = _0xg2cf.aimbotEnabled && !_0x9a2;
            if (_0xg2cf.aimOnShoot && !_0xg8fg3e) {
              _0xaed3ce = false;
            }
            if (_0xg2cf._meleeLockActive) {
              _0xaed3ce = true;
            }
            if (_0xaed3ce && _0xg2cf.aimDirScreenPos) {
              return _0xg2cf.aimDirScreenPos.y;
            }
            return _0xefedba;
          },
          set: function (val) {
            _0xefedba = val;
          }
        });
        _0xfe2.input.__mouse_hooked = true;
      }
      if (!_0xfe2.input.__autohit_hooked) {
        let _0x4e557a;
        const _0x26a8e = _0xfe2.input.isInputValueDown;
        _0x4e557a = "ijgdgd";
        _0xfe2.input.isInputValueDown = function (val) {
          if (_0xg2cf._meleeLockActive && val && val.type === 1) {
            if (val.code === 87 || val.code === 38) {
              return _0xg2cf._meleeMove.up;
            }
            if (val.code === 83 || val.code === 40) {
              return _0xg2cf._meleeMove.down;
            }
            if (val.code === 65 || val.code === 37) {
              return _0xg2cf._meleeMove.left;
            }
            if (val.code === 68 || val.code === 39) {
              return _0xg2cf._meleeMove.right;
            }
          }
          if (val && val.type === 2 && val.code === 0) {
            var _0x67gcfd = 4;
            let _0x1c_0x46g = this.mouseButtons && this.mouseButtons[0];
            _0x67gcfd = 5;
            if (_0xg2cf._meleeLockActive || _0xg2cf.autoHitEnabled && _0x1c_0x46g) {
              return true;
            }
          }
          return _0x26a8e.apply(this, arguments);
        };
        const _0x8f8cac = _0xfe2.input.isInputValuePressed;
        _0xfe2.input.isInputValuePressed = function (val) {
          if (val && val.type === 2 && val.code === 0) {
            let _0x6523f;
            let _0xfaa = this.mouseButtons && this.mouseButtons[0];
            _0x6523f = "qfnhog";
            if (_0xg2cf._meleeLockActive || _0xg2cf.autoHitEnabled && _0xfaa) {
              if (_0xg2cf._autoHitPulse) {
                return true;
              }
            }
          }
          return _0x8f8cac.apply(this, arguments);
        };
        _0xfe2.input.__autohit_hooked = true;
      }
    }
    if (!_0xfe2 || !_0xfe2.game || !_0xfe2.game.Je) {
      if (_0x1a0ead) {
        _0x1a0ead.clear();
      }
      return;
    }
    var _0xa926a = 13;
    const _0x1cf3gf = _0xfe2.game.Je;
    _0xa926a = "ibkdlb".split("").reverse().join("");
    var _0x85f = 8;
    const _0x18e = _0xfe2.game.zt;
    _0x85f = 0;
    var _0x5b3cc = 8;
    const _0x808ba = _0xfe2.game.Se;
    _0x5b3cc = 1;
    if (!_0x1cf3gf.__Xe_hooked) {
      _0x1cf3gf.orig_Xe = _0x1cf3gf.Xe;
      _0x1cf3gf.Xe = function () {
        if (_0xg2cf.zoomEnabled) {
          return _0xg2cf.customZoom;
        }
        return _0x1cf3gf.orig_Xe.apply(this, arguments);
      };
      _0x1cf3gf.__Xe_hooked = true;
    }
    if (_0xfe2.game.It && _0xfe2.game.It.mapLoaded) {
      const _0xgf0a5f = _0xfe2.game.It.getMapDef().biome.colors;
      if (!_0xg2cf._origMapColors) {
        _0xg2cf._origMapColors = {
          grass: _0xgf0a5f.grass,
          water: _0xgf0a5f.water,
          beach: _0xgf0a5f.beach,
          riverbank: _0xgf0a5f.riverbank
        };
      }
    }
    var _0x32bdd = 9;
    let _0x25a = _0xfe2.input && _0xfe2.input.mouseButtons && _0xfe2.input.mouseButtons[0];
    _0x32bdd = 7;
    if (_0x1cf3gf.bodyContainer && _0x1cf3gf.bodyContainer.transform && !_0x1cf3gf.bodyContainer.destroyed) {
      if (_0xg2cf.spinbotEnabled && !_0x25a) {
        let _0x50942a = Date.now();
        let _0x4ffb = _0x50942a % _0xg2cf.spinbotInterval / _0xg2cf.spinbotInterval * Math.PI * 2;
        _0x1cf3gf.bodyContainer.rotation = _0x4ffb;
      }
    }
    if (!_0x1a0ead || _0x1a0ead.destroyed || _0x1a0ead._destroyed) {
      let _0xg7fg3a = window.PIXI?.Graphics;
      if (!_0xg7fg3a && _0xfe2.game?.It?.display?.ground) {
        _0xg7fg3a = _0xfe2.game.It.display.ground.constructor;
      }
      if (!_0xg7fg3a) {
        return;
      }
      _0x1a0ead = new _0xg7fg3a();
      _0xfe2.pixi.stage.addChild(_0x1a0ead);
    }
    if (_0x1a0ead.parent !== _0xfe2.pixi.stage) {
      _0xfe2.pixi.stage.removeChild(_0x1a0ead);
      _0xfe2.pixi.stage.addChild(_0x1a0ead);
    } else {
      _0xfe2.pixi.stage.removeChild(_0x1a0ead);
      _0xfe2.pixi.stage.addChild(_0x1a0ead);
    }
    _0x1a0ead.clear();
    var _0x099a = 15;
    const _0xa5c = Number(_0xg2cf.xrayOpacity) || 0.4;
    _0x099a = 7;
    if (_0xg2cf.xrayEnabled) {
      _0xg2cf._wasXray = true;
      if (_0xfe2.game.It && _0xfe2.game.It.Ie) {
        var _0x5f39fd = 11;
        const _0xa9de9e = _0xfe2.game.It.Ie.ge();
        _0x5f39fd = "cinfha".split("").reverse().join("");
        for (let i = 0; i < _0xa9de9e.length; i++) {
          const _0xdc56g = _0xa9de9e[i];
          if (_0xdc56g && _0xdc56g.active && _0xdc56g.sprite && _0xdc56g.sprite.transform && !_0xdc56g.sprite.destroyed) {
            if (!_0xdc56g.sprite.__xray_hooked) {
              const origUT = _0xdc56g.sprite.updateTransform;
              _0xdc56g.sprite.updateTransform = function () {
                origUT.call(this);
                if (_0xg2cf.xrayEnabled) {
                  const _0xb8a44e = String(_0xdc56g.type || "");
                  if (_0xdc56g.isBush || _0xb8a44e.includes("tree") || _0xb8a44e.includes("table")) {
                    this.worldAlpha *= Number(_0xg2cf.xrayOpacity) || 0.4;
                  }
                }
              };
              _0xdc56g.sprite.__xray_hooked = true;
            }
          }
        }
      }
      if (_0xfe2.game.It && _0xfe2.game.It.ei) {
        var _0xe7d2ae = 13;
        const buildings = _0xfe2.game.It.ei.ge();
        _0xe7d2ae = 7;
        for (let i = 0; i < buildings.length; i++) {
          var _0x3_0xade = 11;
          const bldg = buildings[i];
          _0x3_0xade = "kikhhl";
          if (bldg && bldg.active && bldg.ceiling) {
            bldg.ceiling.fadeAlpha = Math.min(Number(bldg.ceiling.fadeAlpha) || 1, _0xa5c);
          }
        }
      }
      if (_0xfe2.game.Et && _0xfe2.game.Et.particles) {
        let _0x8e2g2f;
        const _0xcegff = _0xfe2.game.Et.particles;
        _0x8e2g2f = 4;
        for (let i = 0; i < _0xcegff.length; i++) {
          var _0x859g7e = 13;
          const _0xfc8a4a = _0xcegff[i];
          _0x859g7e = 6;
          if (_0xfc8a4a && _0xfc8a4a.active && _0xfc8a4a.sprite && _0xfc8a4a.sprite.transform && !_0xfc8a4a.sprite.destroyed) {
            if (!_0xfc8a4a.sprite.__xray_hooked) {
              var _0x7f54g = 10;
              const origUT = _0xfc8a4a.sprite.updateTransform;
              _0x7f54g = "ejdcfp";
              _0xfc8a4a.sprite.updateTransform = function () {
                origUT.call(this);
                if (_0xg2cf.xrayEnabled) {
                  this.worldAlpha *= (Number(_0xg2cf.xrayOpacity) || 0.4) * 0.375;
                }
              };
              _0xfc8a4a.sprite.__xray_hooked = true;
            }
          }
        }
      }
    } else if (_0xg2cf._wasXray) {
      _0xg2cf._wasXray = false;
      if (_0xfe2.game.It && _0xfe2.game.It.ei) {
        var _0xfa9c = 1;
        const buildings = _0xfe2.game.It.ei.ge();
        _0xfa9c = "mqepoj".split("").reverse().join("");
        for (let i = 0; i < buildings.length; i++) {
          const bldg = buildings[i];
          if (bldg && bldg.active && bldg.ceiling) {
            bldg.ceiling.fadeAlpha = 1;
          }
        }
      }
    }
    const _0xce7ae = _0x808ba.Pe.ge();
    const _0x23e = _0x808ba.Ze(_0x1cf3gf.__id);
    _0xbf972g = 15;
    const _0x82cc = _0x1cf3gf.pos;
    const _0x23b4cg = _0x18e.pointToScreen(_0x82cc);
    const _0x13bbc = parseInt(_0xg2cf.enemyColor.replace("#", ""), 16);
    const _0x56gaaa = parseInt(_0xg2cf.allyColor.replace("#", ""), 16);
    var _0xc7b2a = 5;
    const _0xa6e9ff = parseInt(_0xg2cf.predictionColor.replace("#", ""), 16);
    _0xc7b2a = 8;
    let _0x7b7ecd = null;
    let _0xb32a9e = Infinity;
    _0xfg_0xd58 = 5;
    for (let i = 0; i < _0xce7ae.length; i++) {
      let _0x161cdd;
      const p = _0xce7ae[i];
      _0x161cdd = 3;
      if (!p || !p.active || p.De.K) {
        continue;
      }
      const _0xbbb6e = _0x808ba.Ze(p.__id);
      let _0xa4db = false;
      if (_0xfe2.game.teamMode > 1 || _0xfe2.game.It.factionMode) {
        if (_0x23e.teamId !== 0 && _0x23e.teamId === _0xbbb6e.teamId) {
          _0xa4db = true;
        }
        if (_0x23e.groupId !== 0 && _0x23e.groupId === _0xbbb6e.groupId) {
          _0xa4db = true;
        }
      }
      if (_0xg2cf.ignoreAllies) {
        _0xa4db = false;
      }
      if (_0xg2cf.showPlayerNames && p.nameText && !p.nameText.destroyed) {
        p.nameText.visible = true;
        if (_0xbbb6e && _0xbbb6e.name) {
          p.nameText.text = _0xbbb6e.name;
        }
      }
      if (p.__id === _0x1cf3gf.__id) {
        continue;
      }
      var _0xc2be3g = 12;
      const _0x15_0x4ff = p.pos;
      _0xc2be3g = 14;
      const _0x17f4ff = _0x18e.pointToScreen(_0x15_0x4ff);
      if (!_0xa4db) {
        var _0x88a3cf = 4;
        let _0xbdfd7e = true;
        _0x88a3cf = "hbnjom";
        if (_0xg2cf.wallCheck) {
          if (!_0xc8g7a(_0x82cc, _0x15_0x4ff, _0xfe2, _0x1cf3gf.layer)) {
            _0xbdfd7e = false;
          }
        }
        if (_0xbdfd7e) {
          const _0xf57baf = Math.hypot(_0x17f4ff.x - _0xg2cf.realMouseX, _0x17f4ff.y - _0xg2cf.realMouseY);
          if (_0xf57baf < _0xb32a9e) {
            _0xb32a9e = _0xf57baf;
            _0x7b7ecd = p;
          }
        }
      }
      const _0xac4gd = _0xa4db ? _0x56gaaa : _0x13bbc;
      if (_0xg2cf.espEnabled) {
        const _0xe51cdf = _0x18e.scaleToScreen ? _0x18e.scaleToScreen(p.rad) : p.rad * _0x18e.z();
        _0x1a0ead.lineStyle(_0xg2cf.espCircleThickness, _0xac4gd, 1);
        _0x1a0ead.drawCircle(_0x17f4ff.x, _0x17f4ff.y, _0xe51cdf);
      }
      if (_0xg2cf.tracersEnabled) {
        _0x1a0ead.lineStyle(_0xg2cf.espLineThickness, _0xac4gd, 0.85);
        _0x1a0ead.moveTo(_0x23b4cg.x, _0x23b4cg.y);
        _0x1a0ead.lineTo(_0x17f4ff.x, _0x17f4ff.y);
      }
    }
    _0xg2cf._meleeLockActive = false;
    var _0x73ec = 7;
    let isShooting = _0xfe2.input && _0xfe2.input.mouseButtons && _0xfe2.input.mouseButtons[0];
    _0x73ec = 4;
    let isHoldingThrowable = _0x1cf3gf && typeof _0x1cf3gf.pr === "noitcnuf".split("").reverse().join("") && _0x1cf3gf.pr() === "elbaworht".split("").reverse().join("");
    _0x26bfe = 2;
    if (_0x7b7ecd) {
      const _0x68f92f = _0x7b7ecd.pos;
      if (!_0x7b7ecd.__lastWorldPos) {
        _0x7b7ecd.__lastWorldPos = {
          x: _0x68f92f.x,
          y: _0x68f92f.y
        };
      }
      if (!_0x7b7ecd.__velocity) {
        _0x7b7ecd.__velocity = {
          x: 0,
          y: 0
        };
      }
      let _0xc9c37f = _0x68f92f.x - _0x7b7ecd.__lastWorldPos.x;
      var _0xcda9f = 12;
      let _0x6b17ed = _0x68f92f.y - _0x7b7ecd.__lastWorldPos.y;
      _0xcda9f = 0;
      _0x7b7ecd.__velocity.x = _0x7b7ecd.__velocity.x * 0.8 + _0xc9c37f * 0.2;
      _0x7b7ecd.__velocity.y = _0x7b7ecd.__velocity.y * 0.8 + _0x6b17ed * 0.2;
      _0x7b7ecd.__lastWorldPos = {
        x: _0x68f92f.x,
        y: _0x68f92f.y
      };
      let _0xcfd75a = Math.hypot(_0x68f92f.x - _0x82cc.x, _0x68f92f.y - _0x82cc.y);
      var _0xfa_0xaf0 = 8;
      let _0xa37dg = _0xg2cf.prediction * (_0xcfd75a * _0xg2cf.distCoef * 0.05) / _0xg2cf.speedCoef;
      _0xfa_0xaf0 = 3;
      var _0x2g_0xdc6 = 3;
      let _0x2ebg = {
        x: _0x68f92f.x + _0x7b7ecd.__velocity.x * _0xa37dg,
        y: _0x68f92f.y + _0x7b7ecd.__velocity.y * _0xa37dg
      };
      _0x2g_0xdc6 = 3;
      let _0x414ef = _0x2ebg.x - _0x82cc.x;
      let _0xb9egb;
      let _0xa_0xdfd = _0x2ebg.y - _0x82cc.y;
      _0xb9egb = "hlggnp";
      _0xg2cf.aimDirScreenPos = {
        x: _0x18e.screenWidth * 0.5 + _0x414ef * _0x18e.z(),
        y: _0x18e.screenHeight * 0.5 - _0xa_0xdfd * _0x18e.z()
      };
      _0xg2cf.currentTargetScreenPos = _0x18e.pointToScreen(_0x2ebg);
      let _0x5a0cfd;
      let _0x5025b = _0xg2cf.aimbotEnabled && !isHoldingThrowable;
      _0x5a0cfd = 8;
      if (_0xg2cf.aimOnShoot && !isShooting) {
        _0x5025b = false;
      }
      if (_0x5025b || _0xg2cf._meleeLockActive) {
        _0x1a0ead.lineStyle(_0xg2cf.espLineThickness, _0xa6e9ff, 0.9);
        _0x1a0ead.moveTo(_0x23b4cg.x, _0x23b4cg.y);
        _0x1a0ead.lineTo(_0xg2cf.currentTargetScreenPos.x, _0xg2cf.currentTargetScreenPos.y);
        const _0xb7162c = _0x18e.pointToScreen(_0x68f92f);
        _0x1a0ead.lineStyle(Math.max(1, _0xg2cf.espLineThickness - 1), _0xa6e9ff, 0.5);
        _0x1a0ead.moveTo(_0xb7162c.x, _0xb7162c.y);
        _0x1a0ead.lineTo(_0xg2cf.currentTargetScreenPos.x, _0xg2cf.currentTargetScreenPos.y);
      }
      let _0x9f3a;
      let _0x4cfc7e = Math.hypot(_0x68f92f.x - _0x82cc.x, _0x68f92f.y - _0x82cc.y);
      _0x9f3a = 2;
      let _0x82d = _0x1cf3gf && typeof _0x1cf3gf.pr === "function" && _0x1cf3gf.pr() === "melee";
      if (_0xg2cf.meleeLock && _0x4cfc7e < _0xg2cf.meleeLockDist && isShooting && _0x82d) {
        _0xg2cf._meleeLockActive = true;
        var _0x5ae62d = 10;
        let _0x22c5b = _0x68f92f.x - _0x82cc.x;
        _0x5ae62d = 2;
        var _0x39844c = 5;
        let _0x21affb = _0x68f92f.y - _0x82cc.y;
        _0x39844c = 5;
        if (_0x4cfc7e > 1.5) {
          _0xg2cf._meleeMove = {
            up: _0x21affb > 0.5,
            down: _0x21affb < -0.5,
            right: _0x22c5b > 0.5,
            left: _0x22c5b < -0.5
          };
        } else {
          var _0xc66gd = 8;
          let _0x9d9a = Math.max(0.0001, _0x4cfc7e);
          _0xc66gd = "hfgilm";
          let _0x286e4d = _0x22c5b / _0x9d9a;
          let _0xfcf57a = _0x21affb / _0x9d9a;
          let _0x43978b;
          let _0xb9db = _0x286e4d * 0.25 - _0xfcf57a * 0.75;
          _0x43978b = 3;
          var _0x4649b = 4;
          let _0x64e1d = _0xfcf57a * 0.25 + _0x286e4d * 0.75;
          _0x4649b = 4;
          _0xg2cf._meleeMove = {
            up: _0x64e1d > 0.15,
            down: _0x64e1d < -0.15,
            right: _0xb9db > 0.15,
            left: _0xb9db < -0.15
          };
        }
      }
    } else {
      _0xg2cf.currentTargetScreenPos = null;
      _0xg2cf.aimDirScreenPos = null;
    }
    if (_0xg2cf.grenadeTimerEnabled) {
      const _0x16_0xb9b = _0x1cf3gf.throwableState === "kooc".split("").reverse().join("");
      let _0x6611dd;
      const _0xd07b = _0xfe2.game?.ai;
      _0x6611dd = 9;
      if (isHoldingThrowable && _0x16_0xb9b && _0xd07b) {
        if (!_0xg2cf._isCooking) {
          _0xg2cf._isCooking = true;
          _0xg2cf._cookStartTime = Date.now();
        }
        let _0x5c27fd = (Date.now() - _0xg2cf._cookStartTime) / 1000;
        var _0x0a343a = 10;
        let _0xcd6a0d = 4;
        _0x0a343a = 11;
        _0xd07b.active = true;
        _0xd07b.label = "Cooking";
        _0xd07b.elapsed = _0x5c27fd;
        _0xd07b.duration = _0xcd6a0d;
      } else if (_0xg2cf._isCooking) {
        _0xg2cf._isCooking = false;
        if (_0xd07b && _0xd07b.label === "gnikooC".split("").reverse().join("")) {
          _0xd07b.active = false;
        }
      }
    }
  }
})();
