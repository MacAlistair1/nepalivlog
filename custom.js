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

let headerVideo = document.getElementById("header-video");
let customVideo = document.getElementById("custom-video");
let latestVideoATag = document.getElementById("latest-video");

let videoId = "";

fetch("https://macalistair1.github.io/scrap-data/latest_yt_video.txt")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    if (data) {
      let videoUrl = `https://www.youtube.com/embed/${data}?controls=0&autoplay=1`;
      let videoWatchUrl = `https://www.youtube.com/watch?v=${data}`;
      setTimeout(() => {
        customVideo.style.display = "none";
      }, 2000);
      headerVideo.setAttribute("src", videoUrl);
      latestVideoATag.setAttribute("href", videoWatchUrl);
    }
  });
