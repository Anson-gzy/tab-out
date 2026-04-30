# Tab Out for Safari

This fork packages Tab Out as a macOS Safari Web Extension for local use.

## Build the Safari project

From the repository root:

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

The generated Xcode project lives in `safari/`.

## Run locally in Safari

1. Open Safari.
2. Open Safari > Settings > Advanced, then enable the Develop menu if it is not already visible.
3. Open Safari > Settings > Developer, then enable Allow unsigned extensions.
4. Open the generated project in Xcode.
5. Select the TabOutSafari macOS app scheme and run it.
6. Open Safari > Settings > Extensions and enable TabOutSafari.
7. Open a new tab in Safari.

Safari resets the Allow unsigned extensions setting after quitting Safari, so turn it back on when needed during development.

## Notes

- The extension uses WebExtension APIs through `browser` when available and falls back to `chrome`.
- Open tabs and saved-for-later items remain local in the browser through `tabs` and `storage.local`.
- The new tab override is still declared with `chrome_url_overrides.newtab`, which is the shared WebExtension manifest key for replacing the browser new tab page.
- Favicon rendering uses the browser-provided `favIconUrl` only. If Safari does not provide an icon for a tab, Tab Out simply omits the image.
