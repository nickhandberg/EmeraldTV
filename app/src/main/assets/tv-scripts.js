// Removes all context menu buttons which hindered TV navigation
removeElementsByClass("ContextMenuButton");
removeElementsByClass("StandardEmphasisHorizontalTileContent__title-button");
removeElementsByClass("MediumEmphasisVerticalTile__footer");
removeElementsByClass('tophat');
removeElementsByClass("GlobalNavigation__skip-link");
if(window.location.href == "https://www.hulu.com/my-stuff"){
    removeElementsByClass("MyStuffBanner");
    removeElementsByClass("MyStuffTile__toggle");
}
// Removes ad tiles
removeElementsByClass("HighEmphasisTile--promoted-content-ad");

//Remove playback control buttons
removeElementsByClass("PlaybackControls");

//Remove view mode control buttons
removeElementsByClass("ViewModeControlBar");

//Removes footer
removeElementsByClass("Footer-module-footer-2hIom");

//remove Ad sections on timeline bar
removeElementsByClass("TimelineAdBreaks");

// Disables logo button selection
disableSelectionByClass("GlobalNavigation__logo");

//Disables selection on playhead
disableSelectionByClass("Timeline__playhead");

//Disables selection of progress bar
disableSelectionByClass("Timeline__slider");

//disables selection of up next text
disableSelectionByClass("PlayerMetadata__hitRegion");

//May need to make TV only
disableSelectionByClass("Tile__title");

replaceWithTextByClass("HighEmphasisTile__title-button");
