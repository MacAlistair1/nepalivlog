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

let headerVideo = document.getElementById("header-video");
let customVideo = document.getElementById("custom-video");
let latestVideoATag = document.getElementById("latest-video");

let videoId = "";

fetch("https://macalistair1.github.io/scrap-data/latest_yt_video.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data) {
      let videoUrl = `https://www.youtube.com/embed/${data.videoId}?controls=0&autoplay=1`;
      let videoWatchUrl = `https://www.youtube.com/watch?v=${data.videoId}`;
      setTimeout(() => {
        customVideo.style.display = "none";
      }, 2000);
      headerVideo.setAttribute("src", videoUrl);
      latestVideoATag.setAttribute("href", videoWatchUrl);
    }
  });

let galleryImage = document.getElementsByClassName("u-image-4")[0];

fetch("https://macalistair1.github.io/scrap-data/reel.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data) {
      galleryImage.innerHTML = `<iframe width="400" height="450" src="${data.url}/embed" border="0" class="insta-reel"></iframe>`;
    }
  });
