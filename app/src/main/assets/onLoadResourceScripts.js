// Removes elements by classname
function removeElementsByClass(classname){
    let elements = document.getElementsByClassName(classname);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

function disableSelectionByClass(classname){
    let elements = document.getElementsByClassName(classname);
    for(let i=0; i<elements.length; i++){
        elements[i].tabIndex = -1;
    }
}

function replaceWithTextByClass(classname){
    var d;
    let elements = document.getElementsByClassName(classname);
    for(let i=0; i<elements.length; i++){
        d = document.createElement("p");
        d.innerHTML = elements[i].innerHTML;
        elements[i].parentNode.replaceChild(d, elements[i]);
    }
}


// Removes all context menu buttons which hindered TV navigation
removeElementsByClass("ContextMenuButton");
removeElementsByClass("StandardEmphasisHorizontalTileContent__title-button");
removeElementsByClass("MediumEmphasisVerticalTile__footer");
removeElementsByClass('tophat');
// Removes ad tiles
removeElementsByClass("HighEmphasisTile--promoted-content-ad");
removeElementsByClass("GlobalNavigation__skip-link");

disableSelectionByClass("GlobalNavigation__logo");
replaceWithTextByClass("HighEmphasisTile__title-button");
