const playBtn = document.getElementById('playBtn');
const videoPlayer = document.getElementById('videoPlayer');
const videoContainer = document.getElementById('videoContainer');
const videoBckg = document.getElementById('videoBckg');
const bckContainer = document.getElementById('bckContainer');
const mobileWidth = 426;
const fullScreenBtn = document.getElementById('fullScreenBtn');
let myScreenOrientation = window.screen.orientation;


// var playPromise = videoBckg.play();
let browserName;
 

window.addEventListener('load', (event) => {
  videoBckg.src = './assets/video/airfrance-klm1.m4v';
  var current_mode = screen.orientation;
  console.log(current_mode.type)
  console.log(current_mode.angle)
});

fullScreenBtn.addEventListener("click", (event) => {
  handlePlayButton();
  enterFullScreen(videoBckg);
  // disableMute();
  
}, false);

fullScreenBtn.addEventListener("touchtart", (event) => {
  enterFullScreen(videoBckg);
  browserName = fnBrowserDetect();
  screen.orientation.unlock();
  myScreenOrientation.lock("landscape-primary")
		.then(function() {
      handlePlayButton();
		})
		.catch(function(error) {
			alert(error);
		});
  
}, false);

function enterFullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
    disableMute();
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
    disableMute();
  } catch (err) {
    fullScreenBtn.classList.remove("playing");
  }
}

function handlePlayButton() {
  if (videoBckg.paused) {
    playVideo();
  } else {
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