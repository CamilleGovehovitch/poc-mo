const playBtn = document.getElementById('playBtn');
const videoPlayer = document.getElementById('videoPlayer');
const videoContainer = document.getElementById('videoContainer');
const videoBckg = document.getElementById('videoBckg');
const bckContainer = document.getElementById('bckContainer');
const mobileWidth = 426;
const fullScreenBtn = document.getElementById('fullScreenBtn');
// var playPromise = videoBckg.play();
let browserName;
 

window.addEventListener('load', (event) => {
  videoBckg.src = './assets/video/airfrance-klm1.m4v';
  if (browserName === 'chrome') {
    // videoBckg.muted = false;
  }
});

bckContainer.addEventListener('click', (event) => {
  // playBtn.classList.remove('playing');
  // videoBckg.muted = false;
})

bckContainer.addEventListener('touchtart', (event) => {
  // playBtn.classList.remove('playing');
  // enableMute();
})

fullScreenBtn.addEventListener("click", (event) => {
  handlePlayButton();
  enterFullScreen(videoBckg);

}, false);

// playBtn.addEventListener("touchtart", (event) => {
//   handlePlayButton();
//   enterFullScreen(videoBckg);
//   // disableMute();

// }, false);

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
    fullScreenBtn.classList.add("playing");
    videoBckg.play();
  } catch (err) {
    fullScreenBtn.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (videoBckg.paused) {
    playVideo();
  } else {
    // videoBckg.pause();
    videoBckg.play();

    fullScreenBtn.classList.add("playing");
    fullScreenBtn.classList.remove("playing");

  }
}

function fnBrowserDetect(){
                 
  let userAgent = navigator.userAgent;
  
  if(userAgent.match(/chrome|chromium|crios/i)){
      browserName = "chrome";
    }else if(userAgent.match(/firefox|fxios/i)){
      browserName = "firefox";
    }  else if(userAgent.match(/safari/i)){
      browserName = "safari";
    }else if(userAgent.match(/opr\//i)){
      browserName = "opera";
    } else if(userAgent.match(/edg/i)){
      browserName = "edge";
    }else{
      browserName="No browser detection";
    }
  
return browserName;
}

function enableMute() { 
  videoBckg.muted = true;
} 

function disableMute() { 
  videoBckg.muted = false;
} 