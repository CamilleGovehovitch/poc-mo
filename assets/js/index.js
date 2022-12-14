const playBtn = document.getElementById('playBtn');
const videoPlayer = document.getElementById('videoPlayer');
const videoContainer = document.getElementById('videoContainer');
const videoBckg = document.getElementById('videoBckg');
const bckContainer = document.getElementById('bckContainer');
const mobileWidth = 426;
// var playPromise = videoBckg.play();

window.addEventListener('load', (event) => {
  videoBckg.src = './assets/video/airfrance-klm1.m4v';
});

bckContainer.addEventListener('click', (event) => {
  playBtn.classList.remove('playing');
})

bckContainer.addEventListener('touchtart', (event) => {
  playBtn.classList.remove('playing');
})

playBtn.addEventListener("click", (event) => {
  handlePlayButton();
  enterFullScreen(videoBckg);

}, false);

playBtn.addEventListener("touchtart", (event) => {
  handlePlayButton();
  enterFullScreen(videoBckg);

}, false);

function enterFullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  }else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();     // Firefox
  }else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();  // Safari
  }else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();      // IE/Edge
  }
};


async function playVideo() {
  try {
    await videoBckg.play();
    playBtn.classList.add("playing");
  } catch (err) {
    playBtn.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (videoBckg.paused) {
    playVideo();
  } else {
    videoBckg.pause();
    playBtn.classList.add("playing");
  }
}