function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
}

let footerYear = document.getElementById("year");
footerYear.innerHTML = new Date().getFullYear();

// let topSection = document.getElementById("sec-9249");
// topSection.style.backgroundImage = "url('./assets/gallery/9-min.png')";
