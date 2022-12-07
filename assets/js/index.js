
const playBtn = document.getElementById('playBtn');
const videoPlayer = document.getElementById('videoPlayer');
const videoContainer = document.getElementById('videoContainer');
const videoBckg = document.getElementById('videoBckg');

window.addEventListener('load', (event) => {
  let browserName =   fnBrowserDetect();
  console.log('hello');
  // videoBckg.src = './assets/video/WhatsApp.mp4';
  videoBckg.src = './assets/video/ALPANGE-LOOP-1920.mp4';
  if (browserName === 'firefox') {
    console.log('hey');
    videoBckg.style.width = '100% !important';
  } else {
    console.log('ho');
  }
  // videoBckg.style.width = '100%';
  // videoBckg.style.height = '100%';
  // videoBckg.style.objectFit = 'cover';
  // videoBckg.style.position = 'fixed';
});

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














// videoContainer.addEventListener('click', handlePlayButton, false);

// async function playVideo() {
//   try {
//     await videoPlayer.play();
//     playBtn.classList.add("playing");
//   } catch (err) {
//     playBtn.classList.remove("playing");
//   }
// }

// function handlePlayButton() {
//   if (videoPlayer.paused) {
//     playVideo();
//   } else {
//     videoPlayer.pause();
//     playBtn.classList.remove("playing");
//   }
// }