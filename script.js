function toggleDarkMode() {
    console.log("Toggled dark mode");
    document.body.classList.toggle('dark-mode');
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    console.log("YouTube IFrame API ready");
    player = new YT.Player('youtubePlayer', {
        events: {
            'onStateChange': onPlayerStateChange
        },
        playerVars: {
            listType: 'playlist',
            list: 'PLsrWIRwPFNHBSH_VvO2TJF2d50OW2DegQ',
            autoplay: 1,
            loop: 1
        }
    });
}

function onPlayerStateChange(event) {
    console.log("Player state changed:", event.data);
    if (event.data === YT.PlayerState.ENDED) {
        console.log("Video ended, playing next video");
        player.nextVideo();
    }
}
