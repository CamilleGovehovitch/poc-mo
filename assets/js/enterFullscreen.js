function fullscreenEvent() {
  const isInFullScreen =
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenjlement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);
    if (!isInFullScreen) {
      const elemId = document.body.getAttribute('FSElemId');
      if (elemId) {
        exitFullscreen(elemId);
      }
    }
}

function endedVideo() {
  const elemId = document.body.getAttribute('FSElemId');
  if (elemId) {
    exitFullscreen(elemId);
  }
}

export function enterFullscreen(elemId) {
  const element = document.getElementById(elemId);

  document.removeEventListener('fullscreenchange', fullscreenEvent);
  document.addEventListener('fullscreenchange', fullscreenEvent);
  element.removeEventListener('ended', endedVideo);
  element.addEventListener('ended', endedVideo);
  // Double chance of it being triggered in Safari and others
  document.removeEventListener('webkitfullscreenchange', fullscreenEvent);
  document.addEventListener('webkitfullscreenchange', fullscreenEvent);
  document.removeEventListener('mozfullscreenchange', fullscreenEvent);
  document.addEventListener('mozfullscreenchange', fullscreenEvent);
  document.removeEventListener('msfullscreenchange', fullscreenEvent);
  document.addEventListener('msfullscreenchange', fullscreenEvent);

  const isInFullScreen =
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

  if (!isInFullScreen) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.webkitEnterFullscreen) {
      element.webkitEnterFullscreen();
    } else {
      element.classList.toggle('fullscreen');
    }
  }
  element.classList.remove('hidden');
  document.body.setAttribute('FSElemId', elemId);

  // Start video if not already playing
  if (!element.playing) {
    element.play();
  }
}

export function exitFullscreen(elemId = null) {
  const element = document.getElementById(elemId);

  const isInFullScreen =
    (document.fullscreenElement && document.fullscreenElement !== null) ||
    (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
    (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
    (document.msFullscreenElement && document.msFullscreenElement !== null);

  if (isInFullScreen) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else {
      element.classList.toggle('fullscreen');
    }
  }

  element.classList.add('hidden');
}

