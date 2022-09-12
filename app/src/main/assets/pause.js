if(document.body.contains(document.querySelector("#content-video-player"))){
    let videoPlayer = document.getElementById("content-video-player");
    togglePause(videoPlayer);
}


// TODO Bring up video overlay when paused and hide when playing
function togglePause (player) {
  if(player.paused){
    player.play();
  }else{
    player.pause();
  }
}
