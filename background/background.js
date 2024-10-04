// background/background.js

// Import the contextMenu script
importScripts('../contextMenu/contextMenu.js');

// You can add more background functionalities here if needed

// background/background.js
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "sampleContextMenu",
        title: "Sample Context Menu",
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sampleContextMenu") {
        chrome.tabs.sendMessage(tab.id, { message: "menu_clicked" });
    }
});
