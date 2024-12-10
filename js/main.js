vids = ['universe.mp4'];
init_vids = ['frame-universe.mp4', 'frame-lattice.mp4', 'frame-cern.mp4'];
bgs = ['frame-universe.jpg', 'frame-lattice.webp', 'frame-cern.webp'];

descs = [
    `simulation of the entire universe on a supercomputer by the <a href="https://www.exascaleproject.org/research-project/exasky/">Exasky project</a>. Full video <a href="https://vimeo.com/1031341849" target="_blank">here</a>.`,
    `lattice simulation of the Quantum Chromodynamics Vacuum on a supercomputer by <a href="http://www.physics.adelaide.edu.au/theory/staff/leinweber/VisualQCD/Nobel/index.html" target="_blank">Derek B. Leinweber</a>`,
    `nothing`
]

// choice = Math.floor(Math.random() * vids.length);
choice=0;

document.body.style.backgroundImage = `url(/assets/${bgs[choice]})`;
document.getElementById("vid-desc").innerHTML = descs[choice];

function createInitialBackground(){
    const bgContainer = document.createElement('div');
    bgContainer.className = 'bg-cont';
    bgContainer.id = 'before-bg';
    bgContainer.innerHTML = `
        <div class="bg-cont" id="before-bg">
            <video onloadstart="this.playbackRate = 0.5;" autoplay muted loop class="bg_div"><source src="/assets/${init_vids[choice]}" type="video/mp4"></video>
            <div class="bdrop-bg"></div>
        </div>
    `;
    document.body.appendChild(bgContainer);
}

createInitialBackground();

function createVideoBackground(videoSrc) {
    const bgContainer = document.createElement('div');
    bgContainer.className = 'bg-cont';
    const videoElement = document.createElement('video');
    videoElement.className = 'bg_div';
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.loop = true;    
    videoElement.onloadstart = function() {
        this.playbackRate = choice == 1? 0.5: 1;
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
            videoElement.removeEventListener('canplay', appendToDomWhenReady);
            document.getElementById("before-bg").remove();
        }
    };

    videoElement.addEventListener('canplay', appendToDomWhenReady);
    appendToDomWhenReady();
    return bgContainer;
}

createVideoBackground(`/assets/${vids[choice]}`);










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