document.addEventListener("scroll", function () {
  var header = document.querySelector(".parallax-header");
  var fixedMenu = document.querySelector(".fixed-menu");

  // Adjust this value based on when you want the menu to appear
  var scrollThreshold = 60;

  if (window.scrollY > scrollThreshold) {
    fixedMenu.style.display = "flex";
  } else {
    fixedMenu.style.display = "none";
  }
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}
