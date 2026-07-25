/**
 * background.js — Service Worker for Badge Updates
 *
 * The browser's event-driven background script for Tab Out.
 * Its only job: keep the toolbar badge showing the current open tab count.
 *
 * Since we no longer have a server, we query tabs directly.
 * The badge counts real web tabs (skipping browser-internal and extension pages).
 *
 * Color coding gives a quick at-a-glance health signal:
 *   Green  (#3d7a4a) → 1–10 tabs  (focused, manageable)
 *   Amber  (#b8892e) → 11–20 tabs (getting busy)
 *   Red    (#b35a5a) → 21+ tabs   (time to cull!)
 */

const extensionApi = globalThis.browser || globalThis.chrome;
const actionApi = extensionApi && (extensionApi.action || extensionApi.browserAction);

function isInternalBrowserUrl(url) {
  if (!url) return true;
  try {
    const protocol = new URL(url).protocol.replace(':', '');
    return [
      'about',
      'brave',
      'chrome',
      'chrome-extension',
      'edge',
      'moz-extension',
      'safari-extension',
      'safari-web-extension',
    ].includes(protocol);
  } catch {
    return true;
  }
}

async function setBadgeText(text) {
  if (actionApi && typeof actionApi.setBadgeText === 'function') {
    await actionApi.setBadgeText({ text });
  }
}

async function setBadgeBackgroundColor(color) {
  if (actionApi && typeof actionApi.setBadgeBackgroundColor === 'function') {
    await actionApi.setBadgeBackgroundColor({ color });
  }
}

// ─── Badge updater ────────────────────────────────────────────────────────────

/**
 * updateBadge()
 *
 * Counts open real-web tabs and updates the extension's toolbar badge.
 * "Real" tabs = not browser internals, extension pages, or about:blank.
 */
let badgeUpdateTimer = null;
let badgeUpdateInFlight = false;
let badgeUpdateQueued = false;

async function updateBadge() {
  if (!extensionApi || !extensionApi.tabs || !actionApi) return;

  try {
    const tabs = await extensionApi.tabs.query({});

    // Only count actual web pages — skip browser internals and extension pages
    const count = tabs.filter(t => !isInternalBrowserUrl(t.url)).length;

    // Don't show "0" — an empty badge is cleaner
    await setBadgeText(count > 0 ? String(count) : '');

    if (count === 0) return;

    // Pick badge color based on workload level
    let color;
    if (count <= 10) {
      color = '#3d7a4a'; // Green — you're in control
    } else if (count <= 20) {
      color = '#b8892e'; // Amber — things are piling up
    } else {
      color = '#b35a5a'; // Red — time to focus and close some tabs
    }

    await setBadgeBackgroundColor(color);

  } catch {
    // If something goes wrong, clear the badge rather than show stale data
    await setBadgeText('');
  }
}

function scheduleBadgeUpdate(delay = 300) {
  if (badgeUpdateTimer) clearTimeout(badgeUpdateTimer);

  badgeUpdateTimer = setTimeout(async () => {
    badgeUpdateTimer = null;

    if (badgeUpdateInFlight) {
      badgeUpdateQueued = true;
      return;
    }

    badgeUpdateInFlight = true;
    try {
      await updateBadge();
    } finally {
      badgeUpdateInFlight = false;

      if (badgeUpdateQueued) {
        badgeUpdateQueued = false;
        scheduleBadgeUpdate(delay);
      }
    }
  }, delay);
}

// ─── Event listeners ──────────────────────────────────────────────────────────

if (extensionApi && extensionApi.runtime && extensionApi.tabs) {
  // Update badge when the extension is first installed
  extensionApi.runtime.onInstalled.addListener(() => {
    scheduleBadgeUpdate(100);
  });

  // Update badge when the browser starts up
  if (extensionApi.runtime.onStartup) extensionApi.runtime.onStartup.addListener(() => {
    scheduleBadgeUpdate(500);
  });

  // Update shortly after a tab is opened so about:blank/new-tab transitions can
  // settle before we count. Avoid listening to normal page navigation because
  // Safari can emit many onUpdated events while a page is opening.
  extensionApi.tabs.onCreated.addListener(() => {
    scheduleBadgeUpdate(900);
  });

  // Update badge whenever a tab is closed
  extensionApi.tabs.onRemoved.addListener(() => {
    scheduleBadgeUpdate(100);
  });
}

// ─── Initial run ─────────────────────────────────────────────────────────────

// Run once after the service worker first loads, but keep it off the critical
// path for page navigation.
scheduleBadgeUpdate(500);
