# Tab Out Safari / Tab Out for Safari

> 中文 | English

Tab Out Safari is a Safari-ready fork of [Zara's original Tab Out](https://github.com/zarazhangrui/tab-out). It turns your browser's new tab page into a calm tab mission control: grouped open tabs, quick close actions, saved-for-later items, handwritten greetings, and a cleaner macOS-friendly UI.

Tab Out Safari 是基于 [Zara 原版 Tab Out](https://github.com/zarazhangrui/tab-out) 的 Safari 可用版本。它会把浏览器的新标签页变成一个更安静、更清晰的标签页控制台：自动按域名分组、快速关闭、稍后再看、手写体问候语，以及更贴近 macOS 的 UI。

---

## What's new in this fork / 这个版本有什么新变化

- Safari Web Extension support with a generated macOS Xcode project.
- Chrome/Chromium support is preserved through the same `extension/` source.
- WebExtension API compatibility through `browser` with `chrome` fallback.
- Refined UI with a blue-gray palette, soft page background, light cards, and handwritten greeting artwork.
- Faster startup: greeting, date, background, and Saved for later render before the open-tab grid.
- Staged tab-card reveal: cards appear from left to right, top to bottom, with a visible but quick cascade animation.
- More stable card grid: CSS grid replaces multi-column layout to avoid hover flicker and card misalignment.
- Local-only storage: open tabs and saved items stay inside the browser extension APIs.

- 支持 Safari Web Extension，并包含可直接构建的 macOS Xcode 工程。
- 保留 Chrome/Chromium 支持，同一份 `extension/` 源码仍可加载为 Chrome 扩展。
- 使用 `browser` API，并 fallback 到 `chrome`，方便跨浏览器运行。
- UI 重新优化：蓝灰色主色、浅色背景、浅灰卡片、手写体问候语。
- 启动更快：背景、日期、问候语和 Saved for later 会先渲染，Open Tabs 卡片随后出现。
- Tabs 卡片按从左到右、从上到下的顺序逐层出现，动画节奏更自然。
- 卡片布局更稳定：使用 CSS grid，避免 hover 闪烁和第二张卡片错位。
- 数据保持本地：打开的标签页和稍后再看列表只通过浏览器扩展 API 存储。

---

## Features / 功能

- Group open tabs by domain.
- Pull common homepages such as Gmail, X, LinkedIn, GitHub, and YouTube into a dedicated Homepages card.
- Close one tab, one domain group, duplicate tabs, or all open tabs.
- Save tabs for later before closing them.
- Jump to any existing tab across browser windows.
- Show tab count badges and duplicate badges.
- Keep browser-internal pages out of the real-tab count.
- Run locally with no server, no account, and no external API calls.

- 按域名自动分组打开的标签页。
- 将 Gmail、X、LinkedIn、GitHub、YouTube 等常见首页归到 Homepages 卡片。
- 支持关闭单个标签、整个域名组、重复标签，或一次性关闭所有打开标签。
- 可以把标签保存到 Saved for later 后再关闭。
- 点击任意条目即可跳转到已有标签页，而不是重复打开新页面。
- 显示标签数量 badge 和重复标签 badge。
- 自动排除浏览器内部页面，不把 `chrome://`、`about:`、扩展页面等计入真实标签数量。
- 完全本地运行，不需要服务器、账号或外部 API。

---

## Safari setup / Safari 安装与启用

### Option A: Build the included Safari project / 方式 A：构建已包含的 Safari 工程

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

然后在 Safari 里启用：

1. 打开 Safari。
2. 打开 Safari > 设置 > 高级，如有需要先启用“开发”菜单。
3. 打开 Safari > 设置 > 开发者，启用“允许未签名扩展”。
4. 打开 `.derived-data/Build/Products/Debug/TabOutSafari.app`，或直接在 Xcode 中运行工程。
5. 打开 Safari > 设置 > 扩展，启用 TabOutSafari。
6. 打开一个新标签页。

Safari may reset Allow unsigned extensions after quitting. Turn it back on during local development if the extension disappears.

Safari 退出后可能会重置“允许未签名扩展”，本地开发时如果扩展消失，需要重新打开这个选项。

### Option B: Regenerate the Safari wrapper / 方式 B：重新生成 Safari 包装工程

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

只有在你想从 WebExtension 源码重新生成 Xcode 工程时，才需要使用这个命令。

---

## Chrome / Chromium setup / Chrome 安装

```bash
git clone https://github.com/Anson-gzy/tab-out.git
cd tab-out
```

1. Open Chrome and go to `chrome://extensions`.
2. Enable Developer mode.
3. Click Load unpacked.
4. Select the `extension/` folder.
5. Open a new tab.

1. 打开 Chrome，进入 `chrome://extensions`。
2. 打开开发者模式。
3. 点击“加载已解压的扩展程序”。
4. 选择项目里的 `extension/` 文件夹。
5. 打开一个新标签页。

---

## Project structure / 项目结构

| Path | Purpose |
| --- | --- |
| `extension/` | Shared WebExtension source for Safari and Chrome. |
| `extension/assets/greetings/` | Handwritten greeting images used in the header. |
| `extension/icons/` | Browser extension icons in multiple sizes. |
| `safari/TabOutSafari/` | macOS Safari Web Extension wrapper and Xcode project. |
| `SAFARI.md` | Extra Safari development notes. |

| 路径 | 用途 |
| --- | --- |
| `extension/` | Safari 和 Chrome 共用的 WebExtension 源码。 |
| `extension/assets/greetings/` | 顶部手写体问候语图片。 |
| `extension/icons/` | 多尺寸浏览器扩展图标。 |
| `safari/TabOutSafari/` | macOS Safari Web Extension 包装工程和 Xcode 项目。 |
| `SAFARI.md` | Safari 开发补充说明。 |

---

## Development / 开发

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

编辑 `extension/` 后，如果要重新构建 Safari 版本，需要先把资源同步到 Safari wrapper。

Quick syntax check:

```bash
node --check extension/app.js
node --check extension/background.js
```

快速语法检查：

```bash
node --check extension/app.js
node --check extension/background.js
```

---

## Privacy / 隐私

Tab Out does not send your tabs to a server. It reads open tabs through browser extension APIs and stores Saved for later data in local extension storage.

Tab Out 不会把你的标签页发送到服务器。它只通过浏览器扩展 API 读取当前打开的标签页，并把 Saved for later 数据存储在本地扩展存储里。

---

## Attribution / 致谢

Original project by [Zara](https://x.com/zarazhangrui): [zarazhangrui/tab-out](https://github.com/zarazhangrui/tab-out).

原始项目来自 [Zara](https://x.com/zarazhangrui)：[zarazhangrui/tab-out](https://github.com/zarazhangrui/tab-out)。

---

## License / 许可证

MIT
