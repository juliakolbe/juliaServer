const video = document.getElementById("glacierVideo"); /* this grabs the video element */ 
const playPauseButton = document.getElementById("playPauseButton"); /* this grabs the button element */ 

playPauseButton.addEventListener("click", function () { 
    if (video.paused) {  
        video.play(); /* this turns on the video, so it is playing. It will offer the pause button. */ 
        playPauseButton.innerHTML = "Pause"; /* video is playing, button therefore says (or "offers") to pause */ 
        console.log("Video is playing"); /* debugging help */
    }
    else {
        video.pause(); /* this pauses the video, so it's no longer playing and offers the play button instead */ 
        playPauseButton.innerHTML = "Play"; 
        console.log("Video is paused"); 
    }   
});

video.addEventListener ("ended", function () { /* when the video ends (or before it begins) we can offer the viewer the choice to press play to start */ 
    playPauseButton.innerHTML = "Play";
});