document.addEventListener("scroll", function () {
  // Get the scroll position
  var scrollPosition = window.scrollY || document.documentElement.scrollTop;

  // Get the offset of the photo map section
  var gallerySectionOffset = document.getElementById("map").offsetTop;

  // Select the footer element
  var footer = document.querySelector(".footer");

  // Toggle the class based on the scroll position
  if (scrollPosition > gallerySectionOffset) {
    footer.classList.remove("footer-hidden");
  } else {
    footer.classList.add("footer-hidden");
  }
});
