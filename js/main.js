//     String.prototype.replaceAll = function(search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, 'g'), replacement);
// };

//     $("text").each(function(){
//         var str = $(this).html();
//         var re = /[^\s]/;
//         var subst = '<span><div class="bdrop"></div>$&</span>';
//         var result = str.replaceAll(re, subst);
//         $(this).html(result);
//     }
// );

// String.prototype.replaceAll = function(search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, 'g'), replacement);
// };

// $("text").each(function(){
//     var str = $(this).html();
//     var re = /[^\s]+/g; // Matches sequences of non-whitespace characters
//     var subst = '<span><div class="bdrop"></div>$&</span>';
//     var result = str.replaceAll(re, subst);
//     $(this).html(result);
// });

// String.prototype.replaceAll = function(search, replacement) {
//     var target = this;
//     return target.replace(new RegExp(search, 'g'), replacement);
// };

// $("text").each(function(){
//     var str = $(this).html();
//     var re = /./g; // Matches every character, including whitespace
//     var subst = '<span><div class="bdrop"></div>$&</span>';
//     var result = str.replaceAll(re, subst);
//     $(this).html(result);
// });

// function setVideoPreloaded(videoElement, videoUrl) {
//     // If the video source is already the same, do nothing
//     if (videoElement.currentSrc === videoUrl) {
//         return;
//     }

//     // Create a hidden video element for preloading
//     const preloadVideo = document.createElement('video');
//     preloadVideo.style.display = 'none';
//     document.body.appendChild(preloadVideo);

//     // Capture current video state
//     const currentSrc = videoElement.currentSrc;
//     const isPaused = videoElement.paused;
//     const currentTime = videoElement.currentTime;

//     // Event listener for successful preload
//     preloadVideo.onloadedmetadata = () => {
//         // Clone the preloaded video's track to the original video
//         const clonedTracks = Array.from(preloadVideo.textTracks);
        
//         // Temporarily pause the original video
//         videoElement.pause();

//         // Preserve all existing attributes and tracks
//         while (videoElement.firstChild) {
//             videoElement.removeChild(videoElement.firstChild);
//         }

//         // Clone tracks
//         clonedTracks.forEach(track => {
//             const clonedTrack = document.createElement('track');
//             clonedTrack.kind = track.kind;
//             clonedTrack.label = track.label;
//             clonedTrack.srclang = track.language;
//             clonedTrack.src = track.src;
//             videoElement.appendChild(clonedTrack);
//         });

//         // Create and append new source
//         const newSource = document.createElement('source');
//         newSource.src = videoUrl;
//         videoElement.appendChild(newSource);

//         // Reload video without clearing current content
//         videoElement.load();

//         // Restore previous state
//         videoElement.currentTime = currentTime;
//         if (!isPaused) {
//             videoElement.play();
//         }

//         // Clean up preload video
//         document.body.removeChild(preloadVideo);
//     };

//     // Error handling
//     preloadVideo.onerror = () => {
//         console.error('Failed to preload video:', videoUrl);
//         document.body.removeChild(preloadVideo);
//     };

//     // Start preloading
//     preloadVideo.src = videoUrl;
// }

function createVideoBackground(videoSrc) {
    // Create the container div
    const bgContainer = document.createElement('div');
    bgContainer.className = 'bg-cont';

    // Create the video element
    const videoElement = document.createElement('video');
    videoElement.className = 'bg_div';
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;
    
    // Add onloadstart event to set playback rate
    videoElement.onloadstart = function() {
        this.playbackRate = 0.5;
    };

    // Create source element
    const sourceElement = document.createElement('source');
    sourceElement.src = videoSrc;
    sourceElement.type = 'video/mp4';

    // Append source to video
    videoElement.appendChild(sourceElement);

    // Create backdrop div
    const backdropDiv = document.createElement('div');
    backdropDiv.className = 'bdrop-bg';

    // Append video and backdrop to container
    bgContainer.appendChild(videoElement);
    bgContainer.appendChild(backdropDiv);

    // Function to append to DOM when video is ready
    const appendToDomWhenReady = () => {
        if (videoElement.readyState >= 2) { // HAVE_CURRENT_DATA or higher
            document.body.appendChild(bgContainer);
            videoElement.removeEventListener('canplay', appendToDomWhenReady);
            document.getElementById("before-bg").remove();
        }
    };

    // Add event listener to append when video is ready
    videoElement.addEventListener('canplay', appendToDomWhenReady);

    // Attempt initial append in case video is already cached
    appendToDomWhenReady();



    return bgContainer;
}

createVideoBackground('/assets/bg.mp4');

// setVideoPreloaded(document.getElementById("bg_div"), "/assets/bg.mp4");

function checkMobile(){
    return(window.getComputedStyle(document.documentElement).getPropertyValue('--mobile'))
}

var menuClose=1;

function toggleMenu(){
    console.log("toggleMenu");
    if (checkMobile()){
        if (menuClose){
            menuClose = 0;
            document.getElementById("navbar").classList.remove('navClose');
            document.getElementById("navbar").classList.add('navOpen');
        }
        else{
            menuClose = 1;
            document.getElementById("navbar").classList.remove('navOpen');
            document.getElementById("navbar").classList.add('navClose');
        }
    }
}

menu = document.getElementById("navbar");
menuButton = document.getElementById("navbar-mob");

document.addEventListener('click', (event) => {
    if (menuClose == 0 && !menu.contains(event.target) && !menuButton.contains(event.target)) {
    toggleMenu()
    }
});

function getHeight(){
    if (checkMobile()){
        var r = document.querySelector(':root');
        r.style.setProperty('--mobile-height', screen.height + 'px');
        // setTimeout(getHeight, 1000);
    }
}

function scrolltoSocials(){
    if (checkMobile()==0){
        document.getElementById('socials').scrollIntoView();
    }
    else{
        document.getElementById('socials-mobile').scrollIntoView();
    }
}

getHeight();