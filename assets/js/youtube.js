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
      document.getElementById("typewriter").innerHTML +=
        "&nbsp;<b>" + word + "</b>";
      i--;
    } else {
      document.getElementById("typewriter").innerHTML += char;
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}
