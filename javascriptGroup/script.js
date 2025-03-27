const audio = document.getElementById('joshAudio');
const video = document.getElementById('joshVideo');

const audioControls = document.getElementById('audioControls');
const videoControls = document.getElementById('videoControls');

const audioVolume = document.getElementById('audioVolume');
const videoVolume = document.getElementById('videoVolume');

function playAudio() {
    if(audio.paused){
        audio.play();
        audioControls.textContent = 'Pause';
    }
    else{
        audio.pause();
        audioControls.textContent = 'Play';
    }
    
}
function playVideo() {
    if(video.paused){
        video.play();
        videoControls.textContent = 'Pause';
    }
    else{
        video.pause();
        videoControls.textContent = 'Play';
    }
}


audioVolume.addEventListener('input', function() {
    audio.volume = audioVolume.value; 
});


videoVolume.addEventListener('input', function() {
    video.volume = videoVolume.value; 
});

