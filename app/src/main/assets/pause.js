let playerDiv2;


const observer2 = new MutationObserver(() => {
  let players2 = playerDiv2.querySelectorAll('video');



  players2.forEach(pause);
});


function pause (player) {
  if(player.paused()){
    player.play();
  }else{
    player.pause();
  }
}



// Attaches observer to web player app
function attachObserver () {
  playerDiv2 = document.querySelector('#web-player-app');
  if (playerDiv2) {
    observer2.observe(playerDiv2, { attributes: false, childList: true, subtree: true });
  } else {
    setTimeout(attachObserver, 1000);
  }
}

attachObserver();
