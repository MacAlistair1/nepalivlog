window.addEventListener("load", function () {});

setTimeout(() => {
  const preloader = document.querySelector(".preloader");
  const body = document.querySelector("body");
  const socialIcon = document.querySelectorAll(".profile-links .icon");

  // Hide preloader
  preloader.style.display = "none";

  body.style.overflow = "auto";

  socialIcon.forEach((el) => {
    el.style.animation = "scaleAnimation 2s ease-in-out infinite";
  });
}, 1500);
