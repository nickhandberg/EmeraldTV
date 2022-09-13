// Removes all context menu buttons which hindered TV navigation
removeElementsByClass("ContextMenuButton");
removeElementsByClass("StandardEmphasisHorizontalTileContent__title-button");
removeElementsByClass("MediumEmphasisVerticalTile__footer");
removeElementsByClass('tophat');
removeElementsByClass("GlobalNavigation__skip-link");

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

if(window.location.href == "https://www.hulu.com/my-stuff"){
    removeElementsByClass("MyStuffBanner");
    removeElementsByClass("MyStuffTile__toggle");
}
// Removes ad tiles
removeElementsByClass("HighEmphasisTile--promoted-content-ad");

//Remove playback control buttons
removeElementsByClass("PlaybackControls");

//Remove playback settings button
removeElementsByClass("controls__setting-button");

//Removes up-next text during video playback
removeSingleElementByClass("PlayerMetadata__hitRegion",1);

//removes expand icon on currently playing text
removeElementsByClass("SvgIcon");

//Remove view mode control buttons
removeElementsByClass("ViewModeControlBar");

//Removes footer
removeElementsByClass("Footer-module-footer-2hIom");

//remove Ad sections on timeline bar
removeElementsByClass("TimelineAdBreaks");

//removes up next button during video playback
removeElementsByClass("UpNextButton");

//removes ads during pauses
removeElementsByClass("PauseAdAsset");


