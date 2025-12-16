# 🚀SpeedFast – Brave/Chrome Extension✨

⏩A lightweight browser extension that adds **2.5× and 3× playback speed controls** directly to the YouTube player.  
Works on **Brave** and **Chrome** (Manifest V3).

---

## 🎮Features⚡

- Adds **2.5× and 3× speed buttons** inside YouTube’s native control bar  
- Buttons are perfectly aligned with YouTube UI  
- Works across video navigation (no refresh needed)  
- No ads, no tracking, no external libraries  
- Minimal permissions

---

## 🧠How It Works🛠️

The extension injects a content script into YouTube pages that:
- Detects the `<video>` element
- Overrides the playback rate beyond YouTube’s default limit
- Uses a `MutationObserver` to re-inject controls when YouTube reloads its player

---

## 📥Installation (Developer Mode)🔧

### ⏩Brave / Chrome🔍

1. Clone or download this repository
2. Open your browser and go to:
   - `brave://extensions` (Brave)
   - `chrome://extensions` (Chrome)
3. Enable **Developer mode**
4. Click **Load unpacked**
5. Select the project folder
6. Reload YouTube

You should see **2.5×** and **3×** buttons inside the video controls.

---

## 📁Project Structure🧱
```

SpeedFast/
│
├── manifest.json     # Extension configuration (Manifest V3)
├── content.js        # Injects buttons and controls playback speed
├── content.css       # Aligns buttons with YouTube UI README.md
├── popup.html        # Basic Structure
└── popup.js          # Inter-process communication with browser

```

---

## 🔐Permissions Used🛡️

- `scripting` – required to inject scripts into YouTube pages

No background scripts.  
No persistent permissions.

---

## ✅Compatibility🌐

- ✅ Brave Browser  
- ✅ Google Chrome  
- ❌ Firefox (Manifest V3 support differs)

---

## ⚠️Known Limitations🐞

- YouTube may internally reset playback rate when switching videos (handled by observer)
- Extreme speeds (>3×) may cause audio distortion depending on the system

---

## 💡Future Enhancements🚧

- Keyboard shortcuts (e.g. Shift + 3 = 3×)
- Custom speed slider
- Auto-lock default speed
- Popup-based UI

---

## 📄License⚖️

MIT License
