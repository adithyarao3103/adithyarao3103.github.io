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

function setBackgroundGifPreloaded(divElement, gifUrl) {
    const gifImage = new Image();
    gifImage.onload = () => {
        divElement.style.backgroundImage = `url('${gifUrl}')`;
    };
    gifImage.onerror = () => {
        console.error('Failed to load media');
    };
    gifImage.src = gifUrl;
}
function setVideoPreloaded(videoElement, videoUrl) {
    // Preserve existing source if any
    const currentSrc = videoElement.currentSrc || videoElement.src;
    
    // Create a new video element for preloading
    const preloadVideo = document.createElement('video');
    
    // Set up event listeners
    preloadVideo.onloadedmetadata = () => {
        // Temporarily pause any current playback
        const wasPaused = videoElement.paused;
        const currentTime = videoElement.currentTime;

        // Create a new source element instead of directly changing src
        const newSource = document.createElement('source');
        newSource.src = videoUrl;
        
        // Replace existing source elements
        while (videoElement.firstChild) {
            videoElement.removeChild(videoElement.firstChild);
        }
        videoElement.appendChild(newSource);

        // Reload the video without disrupting playback
        videoElement.load();

        // Restore previous playback state if needed
        if (!wasPaused) {
            videoElement.play();
        }
        videoElement.currentTime = currentTime;
    };
    
    preloadVideo.onerror = () => {
        console.error('Failed to preload video:', videoUrl);
    };
    
    // Start preloading
    preloadVideo.src = videoUrl;
    preloadVideo.preload = 'metadata';
}

setVideoPreloaded(document.getElementById("bg_div"), "/assets/bg.mp4");

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