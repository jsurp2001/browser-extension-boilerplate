// storage/storage.js
const StorageHelper = {
    save(key, value) {
        return new Promise((resolve) => {
            chrome.storage.sync.set({ [key]: value }, resolve);
        });
    },
    get(key) {
        return new Promise((resolve) => {
            chrome.storage.sync.get([key], (result) => resolve(result[key]));
        });
    }
};

// Example usage:
// StorageHelper.save('myKey', 'myValue').then(() => console.log('Saved!'));
