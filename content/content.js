// content/content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "menu_clicked") {
        alert("Context menu clicked!");
    }
});
