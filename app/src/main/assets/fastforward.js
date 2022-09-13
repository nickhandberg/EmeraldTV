//if(document.body.contains(document.querySelector("#content-video-player"))){}

const FAST_FORWARD_RATE = 10.0;
let playerDiv;

// Creates observer to monitor when ads are playing
const observer = new MutationObserver(() => {
  let adIsPlaying = playerDiv.querySelector('div.AdUnitView');
  let players = playerDiv.querySelectorAll('video');

  // Handles speed changes depending on observation
  if (adIsPlaying) {
    players.forEach(fastForward);
  } else {
    players.forEach(backToNormal);
  }
});

// Increases player playback speed during ads
function fastForward (player) {
  player.playbackRate = FAST_FORWARD_RATE;
  player.muted = true;
}

// Returns player playback speed to normal
function backToNormal (player) {
  player.playbackRate = 1.0;
  player.muted = false;
}

// Attaches observer to web player app
function attachObserver () {
  playerDiv = document.querySelector('#web-player-app');
  if (playerDiv) {
    observer.observe(playerDiv, { attributes: false, childList: true, subtree: true });
  } else {
    setTimeout(attachObserver, 1000);
  }
}

attachObserver();
