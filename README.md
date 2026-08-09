# Hide YouTube Sign Out

A lightweight Chrome extension that hides the **"Sign out"** button on YouTube (and YouTube Studio) to prevent accidental logouts.

## Features

- Completely hides the Sign out / Logout button in the account menu
- Works on both `youtube.com` and `studio.youtube.com`
- Supports English and Persian interface languages
- Extremely lightweight and uses minimal resources
- Automatically detects dynamically loaded menu items

## Installation (Developer Mode)

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (top right)
4. Click **Load unpacked**
5. Select the folder containing this extension
6. Refresh any open YouTube tabs

## Files

- `manifest.json` – Extension configuration
- `content.js` – Main script that hides the Sign out button
- `icon16.jpeg`, `icon32.jpeg`, `icon48.jpeg`, `icon128.jpeg` – Extension icons

## How it works

The extension uses a content script that:
1. Searches for elements containing "Sign out", "Logout", or the Persian equivalent
2. Looks for YouTube’s internal logout endpoint
3. Continuously monitors the page with a MutationObserver to catch dynamically loaded menus

## Notes

- This extension only hides the button in the UI. It does **not** prevent signing out through other methods (e.g. from Gmail or Google Account settings).
- If YouTube updates their interface, the extension may need a small update.

## License

MIT License – Feel free to use, modify, and distribute.
