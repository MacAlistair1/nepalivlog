var i = 0;
var txt =
  "Join us as We explore the world's most fascinating destinations and immerse ourselves in different cultures. From hiking up scenic mountain trails to trying new cuisines, our vlogs offer a window into the beautiful and diverse world we live in. \n\n We're committed to authenticity and transparency in our vlogs, sharing not just the highlights, but also the challenges and learning experiences that come with travel. Our hope is that by sharing our journey, We can inspire you to embark on your own adventures and broaden your horizons. \n\n So, whether you're an avid traveler or simply looking for some inspiration for your next trip, We invite you to join us on this journey of exploration and discovery. Don't forget to subscribe, leave comments, and share your own travel experiences with us. Let's explore the world together! \n #nepal #naturelovers #macalistairvlogs #nepalivlog";
var speed = 10;

function typeWriter() {
  if (i < txt.length) {
    const char = txt.charAt(i);
    if (char === "\n") {
      document.getElementById("typewriter").innerHTML += "<br>";
    } else if (char === "#") {
      // Detect words starting with hashtag and make them bold until whitespace
      var word = "";
      while (
        i < txt.length &&
        txt.charAt(i) !== " " &&
        txt.charAt(i) !== "\n"
      ) {
        word += txt.charAt(i);
        i++;
      }
      document.getElementById("typewriter").innerHTML += "<b>" + word + "</b>";
      i--; // Move the index back to handle the whitespace or newline character in the next iteration
    } else {
      document.getElementById("typewriter").innerHTML += char;
    }
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

document.getElementById("year").innerHTML = new Date().getFullYear();
