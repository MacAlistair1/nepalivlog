function runSpeedTest() {
  var startTime, lastTime, lastLoaded, currentLoaded;
  var downloadSize = 34400000; // 34.4 MB file

  startTime = lastTime = new Date().getTime();
  lastLoaded = currentLoaded = 0;

  fetch("https://nepalivlog.com/assets/shot/annapurna.mp4")
    .then((response) => {
      const contentLength = response.headers.get("content-length");
      console.log("Total file size:", contentLength);

      const reader = response.body.getReader();

      function readChunk() {
        reader
          .read()
          .then(({ done, value }) => {
            if (done) {
              console.log("Download complete");
              return;
            }

            currentLoaded += value.length;

            var currentTime = new Date().getTime();
            var deltaTime = (currentTime - lastTime) / 1000; // in seconds
            var deltaLoaded = currentLoaded - lastLoaded;

            // Update speed at least every 60ms
            if (deltaTime >= 0.06) {
              var speedMbps = (deltaLoaded / deltaTime / 1000000).toFixed(2); // Divide by 1 million for megabits per second

              // Update speed display
              document.getElementById("speed").innerHTML = speedMbps;

              // Update variables for next iteration
              lastTime = currentTime;
              lastLoaded = currentLoaded;
            }

            // Read the next chunk
            readChunk();
          })
          .catch((error) => {
            console.error("Error reading chunk:", error);
          });
      }

      // Start reading the stream
      readChunk();
    })
    .catch((error) => {
      console.error("Error fetching video:", error);
    });
}
