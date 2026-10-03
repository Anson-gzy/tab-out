/**
 * Fixture data for Mac App Store screenshots.
 * Realistic knowledge-worker tabs across standard domains.
 */

(function () {
  const BASE_TABS = [
    // Homepages group
    {
      id: 1,
      url: 'https://mail.google.com/mail/u/0/#inbox',
      title: 'Inbox (12) - Work Mail',
      windowId: 1,
      index: 0,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 2,
      url: 'https://x.com/home',
      title: 'Home / X',
      windowId: 1,
      index: 1,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/',
      title: 'YouTube',
      windowId: 1,
      index: 2,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // GitHub
    {
      id: 4,
      url: 'https://github.com/acme/core/pull/482',
      title: 'Fix race condition in sync worker · Pull Request #482 · acme/core',
      windowId: 1,
      index: 3,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 5,
      url: 'https://github.com/acme/core/issues/319',
      title: 'Memory leak on client reconnect · Issue #319 · acme/core',
      windowId: 1,
      index: 4,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 6,
      url: 'https://github.com/acme/dashboard/releases/tag/v2.4.0',
      title: 'Release v2.4.0 · acme/dashboard',
      windowId: 1,
      index: 5,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 7,
      url: 'https://github.com/acme/rfcs/issues/52',
      title: 'RFC: Unified caching strategy across edge workers · acme/rfcs',
      windowId: 1,
      index: 6,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // MDN Web Docs
    {
      id: 8,
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Streams_API',
      title: 'Streams API - Web APIs | MDN',
      windowId: 1,
      index: 7,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 9,
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries',
      title: 'CSS Container Queries - CSS | MDN',
      windowId: 1,
      index: 8,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 10,
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone',
      title: 'structuredClone() global function - Web APIs | MDN',
      windowId: 1,
      index: 9,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // Stack Overflow
    {
      id: 11,
      url: 'https://stackoverflow.com/questions/31061838/how-to-cancel-a-fetch-request',
      title: 'How to cancel a fetch request using AbortController? - Stack Overflow',
      windowId: 1,
      index: 10,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 12,
      url: 'https://stackoverflow.com/questions/25915634/difference-between-microtask-and-macrotask',
      title: 'Difference between microtasks and macrotasks in event loop - Stack Overflow',
      windowId: 1,
      index: 11,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // Figma
    {
      id: 13,
      url: 'https://www.figma.com/file/aBc123xyz/Design-System-2.0',
      title: 'Design System 2.0 / Components & Tokens – Figma',
      windowId: 1,
      index: 12,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 14,
      url: 'https://www.figma.com/file/dEf456uvw/Mobile-Navigation-Redesign',
      title: 'Mobile Navigation Redesign (Q2 Review) – Figma',
      windowId: 1,
      index: 13,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // Notion
    {
      id: 15,
      url: 'https://www.notion.so/workspace/Sprint-24-Roadmap',
      title: 'Sprint 24 Engineering Roadmap & Milestones – Notion',
      windowId: 1,
      index: 14,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 16,
      url: 'https://www.notion.so/workspace/Architecture-Decision-Records',
      title: 'Q2 Architecture Decision Records (ADRs) – Notion',
      windowId: 1,
      index: 15,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 17,
      url: 'https://www.notion.so/workspace/Incident-Postmortem-2026-05',
      title: 'Weekly Incident Postmortem & Action Items – Notion',
      windowId: 1,
      index: 16,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // Google Docs
    {
      id: 18,
      url: 'https://docs.google.com/document/d/1a2b3c4d/edit',
      title: 'Production Infrastructure SLA & SLOs 2026 - Google Docs',
      windowId: 1,
      index: 17,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 19,
      url: 'https://docs.google.com/spreadsheets/d/5e6f7g8h/edit',
      title: 'Q2 Capacity Planning & Cost Projections - Google Sheets',
      windowId: 1,
      index: 18,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // Hacker News
    {
      id: 20,
      url: 'https://news.ycombinator.com/item?id=38291042',
      title: 'Show HN: Fast SQLite replication over WebSocket | Hacker News',
      windowId: 1,
      index: 19,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 21,
      url: 'https://news.ycombinator.com/item?id=38295821',
      title: 'Ask HN: How do you structure large mono-repos in 2026? | Hacker News',
      windowId: 1,
      index: 20,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // Wikipedia
    {
      id: 22,
      url: 'https://en.wikipedia.org/wiki/Content-addressable_storage',
      title: 'Content-addressable storage - Wikipedia',
      windowId: 1,
      index: 21,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 23,
      url: 'https://en.wikipedia.org/wiki/Consistent_hashing',
      title: 'Consistent hashing - Wikipedia',
      windowId: 1,
      index: 22,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // Medium
    {
      id: 24,
      url: 'https://medium.com/engineering-digest/designing-resilient-offline-first-web-applications',
      title: 'Designing resilient offline-first Web applications - Engineering Digest',
      windowId: 1,
      index: 23,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 25,
      url: 'https://medium.com/system-design/understanding-memory-pressure-in-v8',
      title: 'Understanding memory pressure in V8 and WebKit - System Design',
      windowId: 1,
      index: 24,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // YouTube content
    {
      id: 26,
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      title: 'Building Distributed Systems with SQLite & Raft - YouTube',
      windowId: 1,
      index: 25,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 27,
      url: 'https://www.youtube.com/watch?v=y6120QOlsfU',
      title: 'What\'s New in Safari 19 and WebKit Web Standards - YouTube',
      windowId: 1,
      index: 26,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },

    // Localhost
    {
      id: 28,
      url: 'http://localhost:3000/dashboard',
      title: 'Local Dev Environment · Dashboard v2',
      windowId: 1,
      index: 27,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 29,
      url: 'http://localhost:3000/docs',
      title: 'API Documentation & Swagger UI',
      windowId: 1,
      index: 28,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
  ];

  // Helper for duplicate tabs in shot 03
  const DUPLICATE_TABS = [
    ...BASE_TABS,
    {
      id: 101,
      url: 'https://github.com/acme/core/pull/482',
      title: 'Fix race condition in sync worker · Pull Request #482 · acme/core',
      windowId: 1,
      index: 29,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 102,
      url: 'https://stackoverflow.com/questions/31061838/how-to-cancel-a-fetch-request',
      title: 'How to cancel a fetch request using AbortController? - Stack Overflow',
      windowId: 1,
      index: 30,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 103,
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Streams_API',
      title: 'Streams API - Web APIs | MDN',
      windowId: 1,
      index: 31,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
  ];

  // Saved items for shot 04 (frozen time is 09:12 AM on May 12, 2026)
  const FROZEN_MS = new Date('2026-05-12T09:12:00').getTime();
  const SAVED_ITEMS = [
    {
      id: 'saved-1',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API',
      title: 'Using Web Workers - Web APIs | MDN',
      favIconUrl: '',
      savedAt: new Date(FROZEN_MS - 25 * 60000).toISOString(), // 25 min ago
      completed: false,
      dismissed: false,
    },
    {
      id: 'saved-2',
      url: 'https://news.ycombinator.com/item?id=38299100',
      title: 'Show HN: Vector search in pure WebAssembly',
      favIconUrl: '',
      savedAt: new Date(FROZEN_MS - 2 * 3600000).toISOString(), // 2 hrs ago
      completed: false,
      dismissed: false,
    },
    {
      id: 'saved-3',
      url: 'https://github.com/acme/rfcs/pull/58',
      title: 'RFC #58: Zero-copy serialization across thread boundaries',
      favIconUrl: '',
      savedAt: new Date(FROZEN_MS - 5 * 3600000).toISOString(), // 5 hrs ago
      completed: false,
      dismissed: false,
    },
    {
      id: 'saved-4',
      url: 'https://medium.com/system-design/caching-patterns-at-scale',
      title: 'Caching patterns at scale: cache-aside vs write-through',
      favIconUrl: '',
      savedAt: new Date(FROZEN_MS - 24 * 3600000).toISOString(), // yesterday
      completed: false,
      dismissed: false,
    },
    {
      id: 'saved-5',
      url: 'https://en.wikipedia.org/wiki/Raft_(algorithm)',
      title: 'Raft consensus algorithm - Wikipedia',
      favIconUrl: '',
      savedAt: new Date(FROZEN_MS - 3 * 86400000).toISOString(), // 3 days ago
      completed: false,
      dismissed: false,
    },
  ];

  // Calm smaller set for shot 05 (~10 tabs)
  const PRIVATE_TABS = [
    {
      id: 1,
      url: 'https://mail.google.com/mail/u/0/#inbox',
      title: 'Inbox (4) - Work Mail',
      windowId: 1,
      index: 0,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 4,
      url: 'https://github.com/acme/core/pull/482',
      title: 'Fix race condition in sync worker · Pull Request #482 · acme/core',
      windowId: 1,
      index: 1,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 6,
      url: 'https://github.com/acme/dashboard/releases/tag/v2.4.0',
      title: 'Release v2.4.0 · acme/dashboard',
      windowId: 1,
      index: 2,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 8,
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Streams_API',
      title: 'Streams API - Web APIs | MDN',
      windowId: 1,
      index: 3,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 9,
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries',
      title: 'CSS Container Queries - CSS | MDN',
      windowId: 1,
      index: 4,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 13,
      url: 'https://www.figma.com/file/aBc123xyz/Design-System-2.0',
      title: 'Design System 2.0 / Components & Tokens – Figma',
      windowId: 1,
      index: 5,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 15,
      url: 'https://www.notion.so/workspace/Sprint-24-Roadmap',
      title: 'Sprint 24 Engineering Roadmap & Milestones – Notion',
      windowId: 1,
      index: 6,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 18,
      url: 'https://docs.google.com/document/d/1a2b3c4d/edit',
      title: 'Production Infrastructure SLA & SLOs 2026 - Google Docs',
      windowId: 1,
      index: 7,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 28,
      url: 'http://localhost:3000/dashboard',
      title: 'Local Dev Environment · Dashboard v2',
      windowId: 1,
      index: 8,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
    {
      id: 29,
      url: 'http://localhost:3000/docs',
      title: 'API Documentation & Swagger UI',
      windowId: 1,
      index: 9,
      active: false,
      favIconUrl: '',
      discarded: false,
      status: 'complete',
    },
  ];

  // For shot 04, a clean set of ~18 tabs so the two columns fit nicely
  const SAVED_SHOT_TABS = [
    BASE_TABS[0], // mail
    BASE_TABS[1], // x.com
    BASE_TABS[3], // github PR
    BASE_TABS[4], // github issue
    BASE_TABS[5], // github release
    BASE_TABS[7], // MDN streams
    BASE_TABS[8], // MDN container
    BASE_TABS[10], // stackoverflow
    BASE_TABS[12], // figma
    BASE_TABS[13], // figma 2
    BASE_TABS[14], // notion
    BASE_TABS[15], // notion 2
    BASE_TABS[17], // docs
    BASE_TABS[19], // HN
    BASE_TABS[21], // wikipedia
    BASE_TABS[23], // medium
    BASE_TABS[25], // youtube video
    BASE_TABS[27], // localhost
  ];

  globalThis.FIXTURES = {
    '01-hero': {
      tabs: BASE_TABS,
      deferred: [],
    },
    '02-grouped': {
      tabs: BASE_TABS,
      deferred: [],
    },
    '03-duplicates': {
      tabs: DUPLICATE_TABS,
      deferred: [],
    },
    '04-saved': {
      tabs: SAVED_SHOT_TABS,
      deferred: SAVED_ITEMS,
    },
    '05-private': {
      tabs: PRIVATE_TABS,
      deferred: [],
    },
  };
})();
