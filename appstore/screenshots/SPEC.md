# Mac App Store screenshots — spec

Output: 5 PNG files, exactly 2880x1800, RGB (no alpha), in `appstore/screenshots/out/`
named `01-hero.png` … `05-private.png`. One command regenerates all of them:
`bash appstore/screenshots/render.sh`.

## How

- Render the REAL dashboard: `extension/index.html` + `extension/style.css` + `extension/app.js`,
  unmodified. Do not edit anything under `extension/` or `safari/`.
- `appstore/screenshots/harness.html` (or similar) defines `globalThis.browser` before `app.js`
  loads, mocking exactly what app.js calls: `tabs.query/create/remove/update`,
  `windows.getCurrent/update`, `storage.local.get/set`, `runtime.getURL`.
  Fixtures come from a JSON/JS file in the same folder. No network: no remote favicons
  (leave `favIconUrl` empty or use local data URIs).
- Freeze time to a morning (e.g. 09:12) so the greeting is "Good morning".
- Render with headless Chrome (`/Applications/Google Chrome.app`) at window 1440x900
  and `--force-device-scale-factor=2`, OR render the framed composite directly at 2880x1800
  with scale 1. Either way the final PNG is 2880x1800.
- Composite = soft background matching the extension's palette (read the colors from
  style.css), a short headline + one-line subhead at the top in a clean sans
  (-apple-system / SF Pro), and the dashboard shown inside a simple macOS Safari-like
  window frame (rounded corners, traffic lights, an address bar that reads "New Tab"; drawn
  with HTML/CSS, no Apple logos, no real Safari UI screenshots). The dashboard must be
  large and legible; it is the product.
- Text is English only. No device frames, no prices, no "#1" or "best" claims, no Apple
  trademarks other than the words "Safari" and "Mac".

## The five shots

| file | headline | subhead | state of the dashboard |
|---|---|---|---|
| 01-hero.png | All your open tabs. One calm page. | Tab Out turns Safari's new tab into a clear map of everything you have open. | ~28 tabs across ~8 domains, Homepages group present |
| 02-grouped.png | Grouped by site, automatically | Every tab sorted into a card per domain, so you find any page in a second. | same data, emphasise cards (crop/zoom into the grid is fine) |
| 03-duplicates.png | Spot duplicates. Close them in one click. | Same page open twice? Tab Out flags it and keeps just one. | at least two groups with an amber "(2x)" / duplicate badge visible |
| 04-saved.png | Save for later, close without guilt | Park a tab on your reading list, then clear the clutter. | "Saved for later" sidebar open with 4-5 items |
| 05-private.png | 100% local. No account. No tracking. | Your tabs never leave your Mac. Free and open source. | a calm, smaller set of tabs (~10) |

## Fixture tabs (realistic, English)

Domains to use: github.com (PRs/issues), stackoverflow.com, developer.mozilla.org,
en.wikipedia.org, news.ycombinator.com, docs.google.com, figma.com, notion.so, medium.com,
youtube.com (one homepage + a couple of videos), mail.google.com (inbox = homepage group),
x.com (home = homepage group), localhost:3000. Titles must look like real pages a knowledge
worker would have open (e.g. "Fix race condition in sync worker · Pull Request #482").
No personal names, emails or anything that looks like real private data.

## Check before you finish

Open every PNG and look at it (not just dimensions): text not clipped, no empty dashboard,
no console-error state, no scrollbars, greeting visible.
