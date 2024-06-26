var r = document.querySelector(':root');

// window.addEventListener("scroll", setNav);

rolling=false;

dark = false;

// let main= '#d9e7ff';
// let shadow = 'black';
// let link = '#002566';

// let main = '#fad5cd';
// let shadow = '#171108';
// let link = '#42180f'

// This was OG
let main = '#fce6ce';
let shadow = '#171108';
let link = '#f4a457';


// let main = '#86CFC5';
// let shadow = '#29363f';
// let link = '#ffffff';

// let maininv = '#081121';
// let shadowinv = '#9eb7e6';
// let linkinv = '#bfd2f5'

// let maininv = '#1a0906';
// let shadowinv = '#fad1c8';
// let linkinv = '#8a7370'


let maininv = '#26170a';
let shadowinv = '#ffddc0';
let linkinv = '#f4a457'

function switchtolight(){
    document.getElementById("switch").classList.add('bi-moon');
    document.getElementById("switch").classList.remove('bi-sun');
    dark = false;
    
    r.style.setProperty('--main', main);
    r.style.setProperty('--shadow', shadow);
    r.style.setProperty('--link', link);
}

function switchtodark(){
    document.getElementById("switch").classList.remove('bi-moon');
    document.getElementById("switch").classList.add('bi-sun');
    dark = true;

    r.style.setProperty('--main', maininv);
    r.style.setProperty('--shadow', shadowinv);
    r.style.setProperty('--link', linkinv);
}


r.style.setProperty('--main', main);
r.style.setProperty('--shadow', shadow);
r.style.setProperty('--link', link);


function invert(){
    if(dark){
       switchtolight();
    }
    else{
        switchtodark();
    }
}

function setNav(){
    if(!rolling){

        if(document.getElementById("about").getBoundingClientRect().top > 0 && document.getElementById("about").getBoundingClientRect().bottom < window.innerHeight){
            document.getElementById("research-button").className = "notpressed";
            document.getElementById("about-button").className = "pressed";
            document.getElementById("cv-button").className = "notpressed";
        }
        else if(document.getElementById("research").getBoundingClientRect().top > 0 && document.getElementById("research").getBoundingClientRect().bottom < window.innerHeight){
            document.getElementById("research-button").className = "pressed";
            document.getElementById("about-button").className = "notpressed";
            document.getElementById("cv-button").className = "notpressed";
        }
        else if(document.getElementById("cv-cont").getBoundingClientRect().top > 0 && document.getElementById("cv-cont").getBoundingClientRect().bottom < window.innerHeight){
            document.getElementById("research-button").className = "notpressed";
            document.getElementById("about-button").className = "notpressed";
            document.getElementById("cv-button").className = "pressed";
        }
    }
    setTimeout(setNav, 500);
}

setNav();

function setFalse(){
    rolling=false;
}


indisplay = 1;

function setAbout(){
    rolling = true;
    setTimeout(setFalse, 500);
    document.getElementById("research-button").className = "notpressed";
    document.getElementById("about-button").className = "pressed";
    document.getElementById("cv-button").className = "notpressed";
    // r.style.setProperty('--main', aboutmain);
    // r.style.setProperty('--shadow', aboutshadow);
    // r.style.setProperty('--inset', aboutinset);

    document.getElementById("about").scrollIntoView();

    // document.getElementById("about").style.transform = 'translateY(0)';
    // document.getElementById("research").style.transform = 'translateY(100vh)';
    // document.getElementById("cv-cont").style.transform = 'translateY(200vh)';
    
    indisplay = 1;
}

function setResearch(){
    rolling = true;
    setTimeout(setFalse, 500);
    document.getElementById("research-button").className = "pressed";
    document.getElementById("about-button").className = "notpressed";
    document.getElementById("cv-button").className = "notpressed";
    // r.style.setProperty('--main', researchmain);
    // r.style.setProperty('--shadow', researchshadow);
    // r.style.setProperty('--inset', researchinset);

    document.getElementById("research").scrollIntoView();


    // document.getElementById("about").style.transform = 'translateY(-100vh)';
    // document.getElementById("research").style.transform = 'translateY(0)';
    // document.getElementById("cv-cont").style.transform = 'translateY(100vh)';
    
    indisplay = 2;
}


function setCV(){
    rolling = true;
    setTimeout(setFalse, 500);
    document.getElementById("research-button").className = "notpressed";
    document.getElementById("about-button").className = "notpressed";
    document.getElementById("cv-button").className = "pressed";

    document.getElementById("cv-cont").scrollIntoView();


    // document.getElementById("about").style.transform = 'translateY(-200vh)';
    // document.getElementById("research").style.transform = 'translateY(-100vh)';
    // document.getElementById("cv-cont").style.transform = 'translateY(0)';
    
    indisplay = 3;

}

let aboutmain = "#b3d2de";
let aboutshadow = "#85a1ac";
let aboutinset = "#c1dfeb";

let researchmain = "#d2b48c";;
let researchshadow = "#987445";
let researchinset = "#e5d3b3";

