// Opens login page if on welcome page
// Makes logging in easier on TV
function openLoginPage(){
    if(window.location.href == "https://www.hulu.com/welcome"){
        window.location = "https://auth.hulu.com/web/login?next=https%3A%2F%2Fwww.hulu.com%2Fwelcome"
    }
}

function setInitialFocus(){
    if(window.location.href == "https://www.hulu.com/profiles?next=/"){
        let element = document.getElementsByTagName("A")[0];
        element.focus();
    }
    // TODO FOCUS ON HOME LINK WHEN PAGE LOADS
    /*
    if(window.location.href == "https://www.hulu.com/hub/home"){
        let e = document.getElementsByTagName("A");
        e[4].focus();
    }*/
}
setInitialFocus();
openLoginPage();
