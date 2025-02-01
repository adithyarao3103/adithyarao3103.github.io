document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('year-mob').textContent = new Date().getFullYear();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BG VIDEO

vids = ['uni-1.mp4', 'magfield.mp4'];
init_vids = ['frame-universe.mp4', 'frame-magfield.mp4', 'frame-lattice.mp4', 'frame-cern.mp4'];
bgs = ['uni-1.jpg', 'frame-magfield.png', 'frame-lattice.webp', 'frame-cern.webp'];

descs = [
    `the evolution of universe simulated on a supercomputer by the <a href="https://www.exascaleproject.org/research-project/exasky/" target="_blank">Exasky project</a>. Full video <a href="https://vimeo.com/1031341849" target="_blank">here</a>.`,
    `simulation of the  interstellar magnetic field strength by <a href="https://www.tng-project.org/media/" target="_blank">The IllustrisTNG Project</a>`,
    `lattice simulation of the Quantum Chromodynamics Vacuum on a supercomputer by <a href="http://www.physics.adelaide.edu.au/theory/staff/leinweber/VisualQCD/Nobel/index.html" target="_blank">Derek B. Leinweber</a>`,
    `nothing`
];

// choice = Math.floor(Math.random() * vids.length);
const choice=0;

document.body.style.backgroundImage = `url(/assets/${bgs[choice]})`;
document.getElementById("vid-desc").innerHTML = descs[choice];

const playbackRate = 2;

function createInitialBackground(){
    const bgContainer = document.createElement('div');
    bgContainer.className = 'bg-cont';
    bgContainer.id = 'before-bg';
    bgContainer.innerHTML = `
        <div class="bg-cont" id="before-bg">
            <div class="bdrop-bg"></div>
        </div>
    `;
    document.body.appendChild(bgContainer);
}

createInitialBackground();

function createVideoBackground(videoSrc) {
    const bgContainer = document.createElement('div');
    bgContainer.className = 'bg-cont';
    bgContainer.id = 'main-video';
    const videoElement = document.createElement('video');
    videoElement.className = 'bg_div';
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = false;    
    videoElement.onloadstart = function() {
        this.playbackRate = playbackRate;
    };
    const sourceElement = document.createElement('source');
    sourceElement.src = videoSrc;
    sourceElement.type = 'video/mp4';
    videoElement.appendChild(sourceElement);
    const backdropDiv = document.createElement('div');
    backdropDiv.className = 'bdrop-bg';
    bgContainer.appendChild(videoElement);
    bgContainer.appendChild(backdropDiv);

    const appendToDomWhenReady = () => {
        if (videoElement.readyState >= 2) {
            document.body.appendChild(bgContainer);
            setTimeout(replace, videoElement.duration*1000/videoElement.playbackRate + 100);
            videoElement.removeEventListener('canplay', appendToDomWhenReady);
            document.getElementById("before-bg").remove();
        }
    };

    videoElement.addEventListener('canplay', appendToDomWhenReady);
    appendToDomWhenReady();
    
    return bgContainer;
}

createVideoBackground(`/assets/${vids[choice]}`);

const loopBgContainer = document.createElement('div');
loopBgContainer.className = 'bg-cont';
const loopVideoElement = document.createElement('video');
loopVideoElement.className = 'bg_div';
loopVideoElement.autoplay = true;
loopVideoElement.muted = true;
loopVideoElement.loop = true;    
loopVideoElement.onloadstart = function() {
    this.playbackRate = playbackRate;
};
const loopSourceElement = document.createElement('source');
loopSourceElement.src = '/assets/uni-loop.mp4';
loopSourceElement.type = 'video/mp4';
loopVideoElement.appendChild(loopSourceElement);
const loopBackdropDiv = document.createElement('div');
loopBackdropDiv.className = 'bdrop-bg';
loopBgContainer.appendChild(loopVideoElement);
loopBgContainer.appendChild(loopBackdropDiv);


function replace(){
    // console.log('replacing');
    const mainVideo = document.getElementById('main-video');
    document.body.appendChild(loopBgContainer);  
    mainVideo.remove();    
    // console.log('done');
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navigation Bar - Desktop


function checkMobile(){
    return(parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--mobile')));
}

var menuClose=1;

window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    navBarChange(scroll)
});

function navBarChange(scroll){
    nav = document.getElementById("navbar");
    if (checkMobile()){
        nav.style.background = '#ffffff';
        for (child of nav.children){
            child.style.color = '#000000';
        }
    }
    else{
        if(scroll>125){
            nav.style.background = '#ffffff';
            for (child of nav.children){
                child.style.color = '#000000';
            }
        }
        else{
            nav.style.background = '#ffffff50';
            for (child of nav.children){
                // child.style.color = '#ffffff';
                child.style.borderColor = 'transparent';  
            }
        }
    }
}

navBarChange(window.scrollY);

window.onresize = function(){
    navBarChange(window.scrollY);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Navigation Bar - Mobile


function toggleMenu(){
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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Random 

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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Name flip

const hover = document.getElementById('name');
const card = document.querySelector('#name-container');
const nameDisplay = document.getElementById('name-text');
let intervalId = null;

const names = {
    english: 'Adithya...',
    kannada: 'ಆದಿತ್ಯ...',
    hindi: 'आदित्य...' 
};

const languages = ['english', 'kannada', 'hindi'];
let currentIndex = 0;

rotation = 360;

function updateName() {
    card.style.transform = `rotateX(${rotation}deg)`;
    rotation = (rotation + 360) % 720;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % languages.length;
        nameDisplay.textContent = names[languages[currentIndex]];
    }, 250);

    setTimeout(updateName, 5000);
}

setTimeout(updateName, 5000);

// hover.addEventListener('mouseenter', () => {
//     updateName();
//     intervalId = setInterval(updateName, 2000);
// });

// hover.addEventListener('mouseleave', () => {
//     clearInterval(intervalId);
//     if (currentIndex == 0) return;
//     card.style.transform = `rotateX(${rotation}deg)`;
//     rotation += 360;
//     setTimeout(() => {
//         nameDisplay.textContent = names.english;
//         currentIndex = 0;
//     }, 250);
// });



const audio = new Audio('/assets/pronounce.mp3');
const playButton = document.querySelector('#name');
const playButton_mob = document.querySelector('#pronounce');

playButton.addEventListener('click', function() {

    audio.currentTime = 0;
    document.querySelector('#name').style.cursor = 'url(/assets/volume-fill.svg), auto';

    audio.play();
    audio.onended = function () {
        document.querySelector('#name').style.cursor = 'url(/assets/volume.svg), auto';
    }
});

playButton_mob.addEventListener('click', function() {
    
    audio.currentTime = 0;
    document.querySelector("#volume-button-path").style.fillOpacity = 1;

    audio.play();
    audio.onended = function (){
        document.querySelector("#volume-button-path").style.fillOpacity = 0;
    }

});
