

const playBtn = document.getElementById('playBtn');
const videoPlayer = document.getElementById('videoPlayer');
const videoContainer = document.getElementById('videoContainer');
const videoBckg = document.getElementById('videoBckg');
window.addEventListener('load', (event) => {
  console.log('hello');
  videoBckg.src = './assets/video/WhatsApp.mp4';
});

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