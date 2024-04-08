const elements = document.querySelectorAll(".count");

elements.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    // Reset animation
    el.style.animation = "none";

    // Trigger reflow (force reflow to apply the reset)
    el.offsetHeight;

    // Apply animation
    el.style.animation = "count-up 0.5s ease-in-out";
  });
});

const videoEls = document.querySelectorAll(".video-item");

videoEls.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    // Reset animation
    el.style.animation = "none";

    // Trigger reflow (force reflow to apply the reset)
    el.offsetHeight;

    // Apply animation
    el.style.animation = "count-up 1s ease-in-out";
  });
});

const socialIcons = document.querySelectorAll(".profile-links .icon");

socialIcons.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    // Reset animation
    el.style.animation = "none";

    // Trigger reflow (force reflow to apply the reset)
    el.offsetHeight;

    // Apply animation
    el.style.animation = "count-up 1s ease-in-out";
  });
});
