// const videoContainer = document.getElementById('videoContainer');
// window.addEventListener('load', (event) => {
//   const videoPlay = document.createElement('video');
//   videoPlay.classList.add('video');
//   videoContainer.appendChild(videoPlay);
// });

const playBtn = document.getElementById('playBtn');
const videoPlayer = document.getElementById('videoPlayer');
const videoContainer = document.getElementById('videoContainer');
console.log(videoPlayer);

videoContainer.addEventListener('click', handlePlayButton, false);

async function playVideo() {
  try {
    await videoPlayer.play();
    playBtn.classList.add("playing");
  } catch (err) {
    playBtn.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (videoPlayer.paused) {
    playVideo();
  } else {
    videoPlayer.pause();
    playBtn.classList.remove("playing");
  }
}