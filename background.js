// background.js
// background.js

const defaults = {
  gridType: "thirds",
  frameType: "screen",
  rotation: 0,
};

// Runs when the browser opens
chrome.runtime.onStartup.addListener(() => {
  chrome.storage.local.set(defaults, () => {
    console.log("Extension reset to defaults on startup.");
  });
});

// Runs when the extension is first installed or updated
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set(defaults);
});
chrome.runtime.onMessage.addListener((request) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    if (request.action === "refresh_grid") {
      chrome.tabs
        .sendMessage(activeTab.id, { action: "update_ui" })
        .catch(() => {
          chrome.scripting.executeScript(
            {
              target: { tabId: activeTab.id },
              files: ["grids.js", "content.js"],
            },
            () => {
              chrome.tabs.sendMessage(activeTab.id, { action: "update_ui" });
            }
          );
        });
    } else if (request.action === "toggle_grid") {
      // Simple toggle logic
      chrome.tabs.sendMessage(activeTab.id, { action: "toggle_grid" });
    }
  });
});
