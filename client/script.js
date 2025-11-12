// Initialize Lucide icons
lucide.createIcons();

// Function to toggle the key activities details
function toggleDetails(contentId, arrowId) {
  const content = document.getElementById(contentId);
  const arrow = document.getElementById(arrowId);

  // Check if content is currently visible
  const isHidden = content.classList.contains("hidden");

  if (isHidden) {
    // Show content
    content.classList.remove("hidden");
    // Set max-height for smooth transition
    content.style.maxHeight = content.scrollHeight + "px";
    arrow.classList.add("rotate-180");
  } else {
    // Hide content
    content.style.maxHeight = "0";
    arrow.classList.remove("rotate-180");

    // Add hidden class after transition completes
    content.addEventListener(
      "transitionend",
      function handler() {
        content.classList.add("hidden");
        content.removeEventListener("transitionend", handler);
      },
      { once: true }
    );
  }

  // Ensure the initial height is set correctly for subsequent toggles
  if (isHidden) {
    // We need to re-read the height after making it visible for the transition to work
    requestAnimationFrame(() => {
      content.style.maxHeight = content.scrollHeight + "px";
    });
  } else {
    content.style.maxHeight = "0px";
  }
}

// Apply max-height transition property globally to all key-details
document.querySelectorAll(".key-details").forEach((el) => {
  el.style.transition = "max-height 0.4s ease-in-out";
  el.style.maxHeight = "0"; // Initialize hidden state height
});
