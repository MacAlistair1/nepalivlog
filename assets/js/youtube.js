var viewCount = null;
var subscriberCount = null;
var videoCount = null;

const viewCountElement = document.getElementById("viewCount");
const subscriberCountElement = document.getElementById("subscriberCount");
const videoCountElement = document.getElementById("videoCount");

// Fetch the JSON data
fetch("assets/json/channel.json")
  .then((response) => response.json())
  .then((data) => {
    const channel = data.items[0];

    viewCount = channel.statistics.viewCount;
    subscriberCount = channel.statistics.subscriberCount;
    videoCount = channel.statistics.videoCount;

    countUp(viewCountElement, viewCount, 7000); // Adjust duration as needed
    countUp(subscriberCountElement, subscriberCount, 7000);
    countUp(videoCountElement, videoCount, 7000);
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
    "LbIIrsEdzbc",
    "PW_ABREqaHI",
    "QfFCrUQMTXg",
    "GPPhZWameXc",
    "1mlc6RT_JoU",
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
    iframe.width = "500";
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
displayLatestVideos();
displayVideos();

// Load the YouTube API client
//  gapi.load('client', fetchPopularVideos);
