const playBtn = document.getElementById('playBtn');
const videoPlayer = document.getElementById('videoPlayer');
const videoContainer = document.getElementById('videoContainer');
const videoBckg = document.getElementById('videoBckg');

const mobileWidth = 426;

window.addEventListener('load', (event) => {
  let browserName =   fnBrowserDetect();
  console.log('hello');
  // videoBckg.src = './assets/video/WhatsApp.mp4';
  videoBckg.src = './assets/video/carte-seasons-greetings-happy-new-year.mp4';
  // videoBckg.src = './assets/video/carte-seasons-greetings-happy-new-year2.mp4';
  // enterFullScreen(videoBckg);
  if (window.innerWidth < mobileWidth && screen.orientation.type === 'portrait-primary') {
    screen.orientation.type = 'landscape-primary';
    screen.orientation.lock('landscape-primary');
    console.log(screen.orientation.lock);
  } else {
    console.log(screen.orientation.lock);
  }
  videoBckg.play();
});
// window.onload = setTimeout(waitLoad, 2);

function fnBrowserDetect(){
                 
  let userAgent = navigator.userAgent;
  let browserName;
  
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
      browserName = "No browser detection";
    }
    return browserName;
}

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



document.addEventListener('fullscreenchange', (event) => {
  if (document.fullscreenElement) {
    console.log('Entered fullscreen:', document.fullscreenElement);
  } else {
    console.log('Exited fullscreen.');
  }
});

function waitLoad() {
  // enterFullScreen(videoBckg);
  console.log('this page is loaded');
}
