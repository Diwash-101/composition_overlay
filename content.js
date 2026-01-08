// content.js
// Keep track of the listener so we can remove it before adding a new one
let activeComponentListener = null;

function drawGrid(gridType, frameType = "screen") {
  let overlay = document.getElementById("composition-grid-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "composition-grid-overlay";
    document.body.appendChild(overlay);
  }

  // Clean up old listeners first to prevent "Event Accumulation"
  if (activeComponentListener) {
    document.body.removeEventListener("mouseover", activeComponentListener);
    activeComponentListener = null;
  }

  // Set BASE styles that apply to all modes
  Object.assign(overlay.style, {
    position: "fixed", // Keep fixed so it stays on top of screen
    zIndex: "2147483647",
    pointerEvents: "none",
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    display: "block",
  });

  // Set MODE-SPECIFIC styles
  if (frameType === "screen") {
    Object.assign(overlay.style, {
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
    });
  } else if (frameType === "component") {
    // Define the function so we can reference it for removal later
    activeComponentListener = (e) => {
      const rect = e.target.getBoundingClientRect();
      Object.assign(overlay.style, {
        top: `${rect.top}px`, // Use rect.top directly for 'fixed' position
        left: `${rect.left}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`,
      });
    };
    document.body.addEventListener("mouseover", activeComponentListener);
  } else if (frameType === "custom") {
    let isDrawing = false;
    document.body.style.cursor = "crosshair";
    let startX = 0;
    let startY = 0;
    document.body.addEventListener("mousedown", (e) => {
      e.preventDefault();
      startX = e.clientX;
      startY = e.clientY;
      isDrawing = true;

      Object.assign(overlay.style, {
        top: `${startX}px`,
        left: `${startY}px`,
      });
    });
    document.body.addEventListener("mousemove", (e) => {
      if (!isDrawing) return;
      const currentX = e.clientX;
      const currentY = e.clientY;
      const width = Math.abs(currentX - startX);
      const height = Math.abs(currentY - startY);
      Object.assign(overlay.style, {
        top: `${Math.min(startY, currentY)}px`,
        left: `${Math.min(startX, currentX)}px`,
        width: `${width}px`,
        height: `${height}px`,
      });
    });
    document.body.addEventListener("mouseup", () => {
      isDrawing = false;
      document.body.style.cursor = "default";
    });
  }

  // Inject SVG
  overlay.innerHTML = GRID_TEMPLATES[gridType] || GRID_TEMPLATES["thirds"];
  // Handle rotation if needed
  if (gridType === "spiral") {
    chrome.storage.local.get({ rotation: 0 }, (res) => {
      currentRotation = res.rotation || 0;
      const svg = document.querySelector("#composition-grid-overlay svg");

      if (svg) {
        // Use transform-origin: center so it rotates in place
        svg.style.transformOrigin = "center";
        if (currentRotation === 0) {
          svg.style.transform = `scale(1)`;
        } else if (currentRotation === 90) {
          svg.style.transform = ` scaleY(-1)`;
        } else if (currentRotation === 180) {
          svg.style.transform = `scale(-1)`;
        } else if (currentRotation === 270) {
          svg.style.transform = ` scaleX(-1)`;
        } else {
          svg.style.transform = "scale(1)"; // Default to no rotation
        }

        console.log(`Rotated spiral to ${currentRotation} degrees`);
      }
    });
  }
}
chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "update_ui") {
    chrome.storage.local.get(
      { gridType: "thirds", frameType: "screen", rotation: 0 },
      (res) => {
        drawGrid(res.gridType, res.frameType);
      }
    );
  } else if (request.action === "toggle_grid") {
    document.getElementById("composition-grid-overlay")?.remove();
  }
});
