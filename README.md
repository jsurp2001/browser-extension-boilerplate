# Browser Extension Boilerplate

A cross-browser extension boilerplate designed as a tutorial for beginners. This boilerplate targets **Chrome** and **Firefox** and includes essential features like popups, context menus, settings pages, and storage management. The project is organized in a way that is scalable, easy to understand, and designed to help you build extensions efficiently.

## Table of Contents

- [Features](#features)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
- [Building the Extension](#building-the-extension)
- [Key Components](#key-components)
  - [Manifest File](#manifest-file)
  - [Popup](#popup)
  - [Background Script](#background-script)
  - [Content Script](#content-script)
  - [Settings Page](#settings-page)
  - [Storage Helper](#storage-helper)
  - [Utility Scripts](#utility-scripts)
- [Permissions](#permissions)
- [Sample Icons](#sample-icons)
- [Resources](#resources)
- [Contributing](#contributing)

## Features

- **Popups**: Interactive UI when clicking the extension icon.
- **Context Menus**: Right-click menu items to perform actions.
- **Settings Page**: Manage user preferences with key-value storage.
- **Storage Management**: Save and retrieve settings using Chrome/Firefox storage APIs.
- **Content Scripts**: Interact with web pages.
- **Background Scripts**: Handle events and manage context menus.
- **Common Permissions**: Predefined permissions for essential functionalities.
- **Sample Icons**: Placeholder icons for visual representation.

## Directory Structure

```
/extension-boilerplate/
│
├── /assets/                 # Images and icons
│   ├── icon16.png
│   ├── icon48.png
│   └── icon128.png
│
├── /background/             # Background scripts
│   └── background.js
│
├── /content/                # Content scripts
│   └── content.js
│
├── /contextMenu/            # Context menu scripts
│   └── contextMenu.js
│
├── /popup/                  # Popup files
│   ├── popup.html
│   ├── popup.js
│   └── popup.css
│
├── /settings/               # Settings page files
│   ├── settings.html
│   ├── settings.js
│   └── settings.css
│
├── /storage/                # Storage helper scripts
│   └── storage.js
│
├── /styles/                 # Common styles
│   └── common.css
│
├── /scripts/                # Utility scripts
│   └── utils.js
│
├── manifest.json            # Manifest file
└── README.md                # This documentation
```

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/extension-boilerplate.git
   ```

2. **Navigate to the Directory:**

   ```bash
   cd extension-boilerplate
   ```

3. **Install Dependencies:**

   This boilerplate doesn't have external dependencies. However, if you plan to use bundlers or preprocessors, set them up accordingly.

## Building the Extension

### For Chrome:

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable **Developer mode** using the toggle switch.
3. Click on **Load unpacked** and select the `extension-boilerplate` directory.
4. The extension should now appear in the extensions list and the toolbar.

### For Firefox:

1. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
2. Click on **Load Temporary Add-on**.
3. Select the `manifest.json` file from the `extension-boilerplate` directory.
4. The extension should now appear in the extensions list and the toolbar.

> **Note:** Firefox requires signing for permanent add-ons. For development purposes, temporary loading is sufficient.

## Key Components

### Manifest File

- **Location:** `/manifest.json`
- **Purpose:** Defines the extension's metadata, permissions, and components.

### Popup

- **Files:**
  - `popup.html`: The HTML structure of the popup.
  - `popup.js`: Handles the popup's behavior.
  - `popup.css`: Styles specific to the popup.
- **Purpose:** Provides the user interface when the extension icon is clicked.

### Background Script

- **File:** `/background/background.js`
- **Purpose:** Runs in the background to handle events like context menu actions and listens for messages.

### Content Script

- **File:** `/content/content.js`
- **Purpose:** Injected into web pages to interact with their content and respond to messages from the background script.

### Settings Page

- **Files:**
  - `settings.html`: The HTML structure of the settings page.
  - `settings.js`: Handles the settings' behavior.
  - `settings.css`: Styles specific to the settings page.
- **Purpose:** Allows users to configure extension preferences.

### Storage Helper

- **File:** `/storage/storage.js`
- **Purpose:** Provides utility functions to interact with the browser's storage API, simplifying data persistence.

### Utility Scripts

- **File:** `/scripts/utils.js`
- **Purpose:** Contains reusable functions to assist with common tasks like logging and DOM manipulation.

## Permissions

The extension requests the following permissions:

- **storage**: To save and retrieve user settings.
- **tabs**: To interact with browser tabs.
- **contextMenus**: To create and manage context menu items.
- **activeTab**: To access the currently active tab.

> **Security Tip:** Always request only the permissions necessary for your extension's functionality to maintain user trust and comply with browser policies.

## Sample Icons

Placeholder icons are included in the `/assets/` directory. Replace these with your custom icons to personalize your extension.

- **icon16.png**: 16x16 pixels
- **icon48.png**: 48x48 pixels
- **icon128.png**: 128x128 pixels

> **Icon Guidelines:**
> - Ensure icons are clear and recognizable.
> - Follow [Chrome’s Icon Design Guidelines](https://developer.chrome.com/docs/extensions/mv3/icons/).
> - Maintain consistent color schemes and styles across all icon sizes.

## Resources

- **[Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)**.
- **[Firefox Extensions Documentation](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)**.
- **[Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/)**.
- **[WebExtensions API](https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions)**.
- **[MDN Web Docs](https://developer.mozilla.org/)**.
- **[JavaScript Tutorial](https://developer.mozilla.org/docs/Web/JavaScript/Guide)**.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements:

1. **Fork the Repository**
2. **Create a New Branch**
3. **Submit a Pull Request**

Please ensure your code adheres to standard coding practices and includes appropriate comments for clarity.

---

Happy Coding! 🚀