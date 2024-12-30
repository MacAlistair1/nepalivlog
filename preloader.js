window.addEventListener("load", function () {});

setTimeout(() => {
  const preloader = document.querySelector(".preloader");
  const body = document.querySelector("body");

  // Hide preloader
  preloader.style.display = "none";

  // Show body and apply overflow
  body.style.overflow = "auto";
}, 1500);
