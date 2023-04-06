// Get the video element and its controls
const video = document.getElementById("my-video");
const controls = document.getElementById("video-player");

// Play the video when the play button is clicked
controls.addEventListener("click", function() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});

// Display the current time of the video
video.addEventListener("timeupdate", function() {
  const timeDisplay = document.getElementById("time-display");
  const currentTime = Math.floor(video.currentTime);
  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime - (minutes * 60);
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}`;
  timeDisplay.innerHTML = formattedTime;
});
