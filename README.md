# Tab Out Safari

[Read in Chinese](README.zh-CN.md)

Tab Out Safari is a Safari-ready fork of [Zara's original Tab Out](https://github.com/zarazhangrui/tab-out). It turns your browser's new tab page into a calm tab mission control: grouped open tabs, quick close actions, saved-for-later items, handwritten greetings, and a cleaner macOS-friendly UI.

---

## What's New In This Fork

- Safari Web Extension support with an included macOS Xcode project.
- Chrome and Chromium support preserved through the same `extension/` source.
- WebExtension compatibility through `browser` with `chrome` fallback.
- Refined UI with a blue-gray palette, soft page background, light cards, and handwritten greeting artwork.
- Faster startup: the background, greeting, date, and Saved for later area render before the open-tab grid.
- Staged tab-card reveal: cards appear from left to right, top to bottom, with a visible but quick cascade animation.
- More stable card grid: CSS grid replaces multi-column layout to avoid hover flicker and card misalignment.
- Local-only storage: open tabs and saved items stay inside browser extension APIs.

---

## Features

- Group open tabs by domain.
- Pull common homepages such as Gmail, X, LinkedIn, GitHub, and YouTube into a dedicated Homepages card.
- Close one tab, one domain group, duplicate tabs, or all open tabs.
- Save tabs for later before closing them.
- Jump to any existing tab across browser windows.
- Show tab count badges and duplicate badges.
- Keep browser-internal pages out of the real-tab count.
- Run locally with no server, no account, and no external API calls.

---

## Safari Setup

### Option A: Build The Included Safari Project

```bash
cd safari/TabOutSafari
xcodebuild -project TabOutSafari.xcodeproj \
  -scheme TabOutSafari \
  -configuration Debug \
  -derivedDataPath ../../.derived-data \
  build CODE_SIGNING_ALLOWED=NO
```

Then enable it in Safari:

1. Open Safari.
2. Open Safari > Settings > Advanced and enable the Develop menu if needed.
3. Open Safari > Settings > Developer and enable Allow unsigned extensions.
4. Open the generated macOS app from `.derived-data/Build/Products/Debug/TabOutSafari.app`, or run the project from Xcode.
5. Open Safari > Settings > Extensions and enable TabOutSafari.
6. Open a new tab.

Safari may reset Allow unsigned extensions after quitting. Turn it back on during local development if the extension disappears.

### Option B: Regenerate The Safari Wrapper

```bash
xcrun safari-web-extension-packager extension \
  --project-location safari \
  --app-name TabOutSafari \
  --bundle-identifier com.guziyang.tabout \
  --macos-only \
  --swift \
  --copy-resources \
  --no-open \
  --no-prompt
```

Use this only if you want to regenerate the Xcode project from the WebExtension source.

---

## Chrome / Chromium Setup

```bash
git clone https://github.com/Anson-gzy/tab-out.git
cd tab-out
```

1. Open Chrome and go to `chrome://extensions`.
2. Enable Developer mode.
3. Click Load unpacked.
4. Select the `extension/` folder.
5. Open a new tab.

---

## Project Structure

| Path | Purpose |
| --- | --- |
| `extension/` | Shared WebExtension source for Safari and Chrome. |
| `extension/assets/greetings/` | Handwritten greeting images used in the header. |
| `extension/icons/` | Browser extension icons in multiple sizes. |
| `safari/TabOutSafari/` | macOS Safari Web Extension wrapper and Xcode project. |
| `SAFARI.md` | Extra Safari development notes. |

---

## Development

After editing files in `extension/`, sync them into the Safari wrapper before building:

```bash
cp extension/app.js "safari/TabOutSafari/TabOutSafari Extension/Resources/app.js"
cp extension/background.js "safari/TabOutSafari/TabOutSafari Extension/Resources/background.js"
cp extension/index.html "safari/TabOutSafari/TabOutSafari Extension/Resources/index.html"
cp extension/manifest.json "safari/TabOutSafari/TabOutSafari Extension/Resources/manifest.json"
cp extension/style.css "safari/TabOutSafari/TabOutSafari Extension/Resources/style.css"
rsync -a extension/assets/ "safari/TabOutSafari/TabOutSafari Extension/Resources/assets/"
rsync -a extension/icons/ "safari/TabOutSafari/TabOutSafari Extension/Resources/icons/"
```

Quick syntax check:

```bash
node --check extension/app.js
node --check extension/background.js
```

---

## Privacy

Tab Out does not send your tabs to a server. It reads open tabs through browser extension APIs and stores Saved for later data in local extension storage.

---

## Attribution

Original project by [Zara](https://x.com/zarazhangrui): [zarazhangrui/tab-out](https://github.com/zarazhangrui/tab-out).

---

## License

MIT
