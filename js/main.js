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
    // If the video source is already the same, do nothing
    if (videoElement.currentSrc === videoUrl) {
        return;
    }

    // Create a new video element specifically for preloading
    const preloadVideo = new Image();
    
    // Flag to track if the video is ready
    let isVideoReady = false;

    // Create a blob URL handler
    const handleBlobUrl = (blobUrl) => {
        // Preserve current video state
        const wasPaused = videoElement.paused;
        const currentTime = videoElement.currentTime;

        // Set the source to the blob URL without clearing the current video
        const sourceElement = document.createElement('source');
        sourceElement.src = blobUrl;
        sourceElement.type = 'video/mp4'; // Adjust type as needed

        // Replace existing sources
        while (videoElement.firstChild) {
            videoElement.removeChild(videoElement.firstChild);
        }
        videoElement.appendChild(sourceElement);

        // Reload the video
        videoElement.load();

        // Restore previous playback state
        if (!wasPaused) {
            videoElement.play();
        }
        videoElement.currentTime = currentTime;
    };

    // Fetch the video as a blob to prevent network interruptions
    fetch(videoUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.blob();
        })
        .then(blob => {
            const blobUrl = URL.createObjectURL(blob);
            handleBlobUrl(blobUrl);
        })
        .catch(error => {
            console.error('Video preload failed:', error);
        });
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