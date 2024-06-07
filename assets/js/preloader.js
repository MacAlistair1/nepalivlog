window.addEventListener("load", function () {});

setTimeout(() => {
  const preloader = document.querySelector(".preloader");
  const body = document.querySelector("body");
  // const logo = document.querySelector(".fixed-menu .logo");
  const socialIcon = document.querySelectorAll(".profile-links .icon");

  // Hide preloader
  preloader.style.display = "none";

  // Show body and apply overflow
  body.style.overflow = "auto";

  // Trigger logo animation
  // logo.style.animation = "scaleAnimation 1s ease-in-out infinite";

  socialIcon.forEach((el) => {
    el.style.animation = "scaleAnimation 2s ease-in-out infinite";
  });
}, 1500);
