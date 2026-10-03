# Mac App Store screenshots v2 — spec

The v1 set was rejected by the user: all five looked the same (same window, same position,
same layout, only the caption changed). v2 must make every page visually distinct at
thumbnail size, while staying one coherent series.

Output: 5 PNG files, exactly 2880x1800, RGB (no alpha), in `appstore/screenshots/out/`
named `01-hero.png` … `05-private.png` (keep the file names; 05 is now the "swoosh" page).
One command regenerates all: `bash appstore/screenshots/render.sh`.

## Hard rules (unchanged from v1)

- Every piece of UI is the REAL dashboard rendered from `extension/index.html` + `style.css`
  + `app.js`, unmodified, via the existing mock-API harness and fixtures. Nothing under
  `extension/` or `safari/` changes. No hand-drawn fake UI (App Review 2.3.3).
- Headless Google Chrome; final PNGs 2880x1800, opaque.
- English only. No prices, rankings, ratings, Apple logos, device frames.
- Captions have NO trailing period. No em dashes.

## Visual identity (Tab Out's own, not FlowIt's)

- Palette from extension/style.css: ink `#24384a`, slate `#547a95`, page `#e8edf2`,
  paper `#ffffff`, duplicate amber (read the exact amber the app uses for "(2x)").
- Headline font: the serif the app uses for "Open tabs" (`ui-serif, "New York", Georgia`),
  large (150–200px at 2880 wide), tight leading, with ONE word per headline set in italic
  slate as the accent. Subhead: SF Pro (`-apple-system`) 52–60px, muted ink.
- A simple macOS-style window frame (rounded 28px corners, traffic lights, thin title bar)
  drawn in CSS around the full dashboard when a window is shown.
- "Lifted card": a real card of the dashboard shown magnified (1.5–2.2x) on its own, with
  rounded corners and a soft large shadow, overlapping the window or floating free. Produce
  it by rendering the harness again and clipping to that element (e.g. an iframe of the
  harness scaled with CSS transform and clipped to the element's bounding box measured via
  getBoundingClientRect), so it is pixel-real, not redrawn.

## The five pages — each a different composition

| file | background | headline (accent word in italics) | subhead | composition | dashboard state |
|---|---|---|---|---|---|
| 01-hero.png | ink `#24384a`, headline in white | Every open tab, *one* calm page | Tab Out turns Safari's new tab into a map of everything you have open | headline top-left; window large, anchored bottom-right and bleeding off the right and bottom edges of the canvas (cropped), slight upward perspective is NOT allowed, keep it flat | full: ~29 tabs, 12 domains |
| 02-grouped.png | page `#e8edf2` | Sorted by *site*, automatically | Every tab lands in a card for its website, so you find any page in a second | headline in left 38% column, vertically centred; window on the right 60%; the GitHub card lifted at ~1.8x, overlapping the window's left edge | full set |
| 03-duplicates.png | warm white `#f7f4ee` | *Duplicates*, gone in one click | Same page open twice? Tab Out flags it and keeps just one | NO window. Headline centred at top; below it two lifted cards side by side at ~2x: GitHub with "(2x)" + "Close 1 duplicate", and Stack Overflow with "(2x)"; a thin slate hand-drawn-style SVG arrow pointing at one "Close 1 duplicate" button | duplicates state |
| 04-saved.png | slate `#547a95`, headline white | Save it for *later*, close the rest | Park a page on a simple checklist, then clear the clutter | mirrored: window on the LEFT 60% (bleeding off the left edge), headline right column; the "Saved for later" sidebar lifted at ~1.8x overlapping the window's right edge | saved state, 5 saved items |
| 05-private.png | page `#e8edf2` | Close tabs with a *swoosh* | A satisfying burst of confetti every time you clear a group. All local, nothing tracked | headline centred top; window centred below, full width-ish; the real confetti animation captured mid-burst over a card that is closing | trigger the app's real close action (click a card's "Close all N tabs" in the harness) and screenshot ~250–400ms into the confetti; make the capture deterministic (freeze Math.random with a seeded PRNG and use --virtual-time-budget or a fixed wait) |

## Check before you finish

Open and look at every PNG at full size: nothing clipped unintentionally, no empty
dashboard, lifted cards are crisp (rendered at 2x device scale, not upscaled bitmaps),
pages look clearly different from each other as thumbnails, confetti visible on 05.
