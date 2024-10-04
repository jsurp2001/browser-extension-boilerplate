// contextMenu/contextMenu.js

// Function to create context menu items
function createContextMenus() {
    chrome.contextMenus.create({
        id: "sampleContextMenu",
        title: "Sample Context Menu",
        contexts: ["all"]
    });
}

// Listener for context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sampleContextMenu") {
        chrome.tabs.sendMessage(tab.id, { message: "menu_clicked" });
    }
});

// Initialize context menus when the extension is installed or updated
chrome.runtime.onInstalled.addListener(() => {
    createContextMenus();
});
