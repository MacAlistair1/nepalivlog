let viewCount = null;
let subscriberCount = null;
let videoCount = null;
let txt = "";

const viewCountElement = document.getElementById("viewCount");
const subscriberCountElement = document.getElementById("subscriberCount");
const videoCountElement = document.getElementById("videoCount");

const baseUrl =
  "https://raw.githubusercontent.com/MacAlistair1/scrap-data/main";

// Fetch the JSON data
fetch(`${baseUrl}/channel_info.json`)
  .then((response) => response.json())
  .then(async (data) => {
    viewCount = data.views;
    subscriberCount = data.subscribers;
    videoCount = data.videos;
    txt = await data.description;

    txt = txt.replace(
      "Welcome to Nepali Vlog, and We're thrilled to share our adventures with you.",
      ""
    );
    countUp(viewCountElement, viewCount, 7000); // Adjust duration as needed
    countUp(subscriberCountElement, subscriberCount, 7000);
    countUp(videoCountElement, videoCount, 7000);

    typeWriter();
  })
  .catch((error) => {
    console.log("Error fetching channel data:", error);
  });

function countUp(targetElement, endValue, duration) {
  let currentValue = 0;
  const increment = endValue / (duration / 16); // Assuming 60 frames per second

  const interval = setInterval(() => {
    currentValue += increment;
    targetElement.textContent = formatNumber(Math.floor(currentValue));

    if (currentValue >= endValue) {
      targetElement.textContent = formatNumber(endValue);
      clearInterval(interval);
    }
  }, 16);
}

function formatNumber(value) {
  if (value >= 1e9) {
    return (value / 1e9).toFixed(2) + "B +";
  } else if (value >= 1e6) {
    return (value / 1e6).toFixed(2) + "M +";
  } else if (value >= 1e3) {
    return (value / 1e3).toFixed(2) + "K +";
  } else {
    return value + " +";
  }
}

// Replace 'YOUR_API_KEY' with your actual YouTube Data API key
const apiKey = "YOUR_API_KEY";
const maxResults = 3; // Number of videos to display
const videosContainer = document.getElementById("videos-container");
const latestVideosContainer = document.getElementById(
  "latest-videos-container"
);

const panchPokhariVideosContainer = document.getElementById(
  "panch-pokhari-videos-container"
);

function fetchPopularVideos() {
  gapi.client
    .init({
      apiKey: apiKey,
      discoveryDocs: [
        "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
      ],
    })
    .then(() => {
      return gapi.client.youtube.videos.list({
        part: "snippet",
        chart: "mostPopular",
        regionCode: "US", // Change this to your desired region code
        maxResults: maxResults,
      });
    })
    .then(
      (response) => {
        displayVideos(response.result.items);
      },
      (error) => {
        console.error("Error fetching YouTube API:", error);
      }
    );
}

function displayLatestVideos() {
  latestVideosContainer.innerHTML = "";
  videos = [
    "1mlc6RT_JoU",
    "GPPhZWameXc",
    "QfFCrUQMTXg",
    "PW_ABREqaHI",
    "LbIIrsEdzbc",
    "tNt-tt6eRYw",
    "gQzVddTn-S8",
    "eosUO2jq99Q",
  ];

  videos.forEach((video, index) => {
    const videoDiv = document.createElement("div");
    videoDiv.classList.add("latest-video-item");

    const iframe = document.createElement("iframe");
    if (index == 0) {
      iframe.src = `https://www.youtube.com/embed/${video}?autoplay=1&`;
    } else {
      iframe.src = `https://www.youtube.com/embed/${video}`;
    }
    iframe.width = "450";
    iframe.height = "315";
    iframe.frameborder = "0";
    iframe.allowFullscreen = true;

    videoDiv.appendChild(iframe);
    latestVideosContainer.appendChild(videoDiv);
  });
}

function displayPanchPokhariVideos() {
  panchPokhariVideosContainer.innerHTML = "";

  videos = ["LbIIrsEdzbc", "PW_ABREqaHI"]; // Replace with your actual video IDs

  videos.forEach((video, index) => {
    const videoDiv = document.createElement("div");
    videoDiv.classList.add("panch-pokhari-video-item"); // Add a custom class for the Panch Pokhari Hike videos

    const iframe = document.createElement("iframe");
    if (index == 0) {
      iframe.src = `https://www.youtube.com/embed/${video}?autoplay=1&`;
    } else {
      iframe.src = `https://www.youtube.com/embed/${video}`;
    }
    iframe.width = "500";
    iframe.height = "315";
    iframe.frameborder = "0";
    iframe.allowFullscreen = true;

    videoDiv.appendChild(iframe);
    panchPokhariVideosContainer.appendChild(videoDiv);
  });
}

function displayVideos() {
  videosContainer.innerHTML = ""; // Clear previous content

  videos = [
    "ml-Ti89QeC8",
    "JqAFGSMcq5w",
    "h5Jyol0dj88",
    "qwEapAm_1HM",
    "o1elFPURix0",
    "3TyFvCXQBgM",
    "R4l5v4NDQgg",
  ];

  videos.forEach((video, index) => {
    const videoDiv = document.createElement("div");
    videoDiv.classList.add("video-item");

    const iframe = document.createElement("iframe");
    // if (index == 0) {
    //   iframe.src = `https://www.youtube.com/embed/${video}?autoplay=1&`;
    // } else {
    iframe.src = `https://www.youtube.com/embed/${video}`;
    // }
    iframe.width = "560";
    iframe.height = "315";
    iframe.frameborder = "0";
    iframe.allowFullscreen = true;

    videoDiv.appendChild(iframe);
    videosContainer.appendChild(videoDiv);
  });
}

// displayPanchPokhariVideos();
// displayLatestVideos();
// displayVideos();

// Load the YouTube API client
//  gapi.load('client', fetchPopularVideos);

let i = 0;
let speed = 5;

function typeWriter() {
  if (i < txt.length) {
    const char = txt.charAt(i);
    if (char === "\n") {
      document.getElementById("typewriter").innerHTML += "<br>";
    } else if (char === "#") {
      // Detect words starting with hashtag and make them bold until whitespace
      let word = "";
      while (
        i < txt.length &&
        txt.charAt(i) !== " " &&
        txt.charAt(i) !== "\n"
      ) {
        word += txt.charAt(i);
        i++;
      }
      document.getElementById("typewriter").innerHTML += "&nbsp;<b>" + word + "</b>";
      i--;
    } else if (i == txt.length-1) {
      document.getElementById("typewriter").innerHTML += `  <a
      href="#"
      class="u-btn u-button-style u-palette-5-base u-text-body-alt-color u-btn-1"
      >read more</a
    >`;
    } else {
      document.getElementById("typewriter").innerHTML += char;
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}
