function scrollToCurrentFocus(){
    if(!document.getElementById("content-video-player").hasAttribute("src")){
        var el = document.activeElement;
        el.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
        el.focus();
    }

}
scrollToCurrentFocus();