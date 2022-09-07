// Removes elements by classname
function removeElementsByClass(classname){
    const elements = document.getElementsByClassName(classname);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

// Removes all context menu buttons which hindered TV navigation
removeElementsByClass("ContextMenuButton");