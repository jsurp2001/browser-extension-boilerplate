// settings.js
document.getElementById('saveButton').addEventListener('click', () => {
    const value = document.getElementById('settingInput').value;
    chrome.storage.sync.set({ userSetting: value }, () => {
        alert('Setting saved!');
    });
});
