const buttons = [
  "thirds",
  "golden",
  "crosshair",
  "spiral",
  "rotateSpiral",
  "rotateCrosshair",
];
const radioButtons = ["screen", "component", "custom"];

radioButtons.forEach((type) => {
  document.getElementById(type).addEventListener("click", () => {
    {
      chrome.storage.local.set({ frameType: type }, () => {
        // After setting, tell background to refresh the grid
        chrome.runtime.sendMessage({ action: "refresh_grid" });
      });
    }
  });
});

buttons.forEach((type) => {
  if (type === "rotateSpiral") {
    document.getElementById(type).addEventListener("click", () => {
      // Special handling for rotateSpiral
      chrome.storage.local.get({ rotation: 0 }, (res) => {
        const newRotation = (res.rotation + 90) % 360;
        chrome.storage.local.set(
          { gridType: "spiral", rotation: newRotation },
          () => {
            chrome.runtime.sendMessage({ action: "refresh_grid" });
          }
        );
      });
    });
  } else if (type === "rotateCrosshair") {
    document.getElementById(type).addEventListener("click", () => {
      chrome.storage.local.get({ gridType: "crosshair" }, (res) => {
        let newGridType =
          res.gridType === "crosshair" ? "crosshairX" : "crosshair";
        chrome.storage.local.set({ gridType: newGridType }, () => {
          // After setting, tell background to refresh the grid
          chrome.runtime.sendMessage({ action: "refresh_grid" });
        });
      });
    });
  } else {
    document.getElementById(type).addEventListener("click", () => {
      chrome.storage.local.set({ gridType: type }, () => {
        // After setting, tell background to refresh the grid
        chrome.runtime.sendMessage({ action: "refresh_grid" });
      });
    });
  }
});

document.getElementById("Off").addEventListener("click", () => {
  chrome.runtime.sendMessage({ action: "toggle_grid" });
});
