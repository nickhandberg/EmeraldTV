function scrollToCurrentFocus(){
    var el = document.activeElement;
    el.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    el.focus();
}
scrollToCurrentFocus();