var r = document.querySelector(':root');

// window.addEventListener("scroll", setNav);

rolling=false;


// let main= '#d9e7ff';
// let shadow = 'black';
// let link = '#002566';

// let main = '#fad5cd';
// let shadow = '#171108';
// let link = '#42180f'

let main = '#fce6ce';
let shadow = '#171108';
let link = '#754f2b'
// let link = '#f4a457'

// let maininv = '#081121';
// let shadowinv = '#9eb7e6';
// let linkinv = '#bfd2f5'

// let maininv = '#1a0906';
// let shadowinv = '#fad1c8';
// let linkinv = '#8a7370'


let maininv = '#26170a';
let shadowinv = '#ffddc0';
let linkinv = '#f4a457'


r.style.setProperty('--main', main);
r.style.setProperty('--shadow', shadow);
r.style.setProperty('--link', link);

indisplay = 1;

function setAbout(){
    // rolling = true;
    // setTimeout(setFalse, 500);
    // document.getElementById("research-button").className = "notpressed";
    // document.getElementById("about-button").className = "pressed";
    // document.getElementById("cv-button").className = "notpressed";
    // r.style.setProperty('--main', aboutmain);
    // r.style.setProperty('--shadow', aboutshadow);
    // r.style.setProperty('--inset', aboutinset);

    // document.getElementById("about").scrollIntoView();
    pressAction(1)

    // document.getElementById("about").style.transform = 'translateY(0)';
    // document.getElementById("research").style.transform = 'translateY(100vh)';
    // document.getElementById("cv-cont").style.transform = 'translateY(200vh)';
    
    // indisplay = 1;
}

function setResearch(){
    // rolling = true;
    // setTimeout(setFalse, 500);
    // document.getElementById("research-button").className = "pressed";
    // document.getElementById("about-button").className = "notpressed";
    // document.getElementById("cv-button").className = "notpressed";
    // r.style.setProperty('--main', researchmain);
    // r.style.setProperty('--shadow', researchshadow);
    // r.style.setProperty('--inset', researchinset);

    // document.getElementById("research").scrollIntoView();
    pressAction(2)


    // document.getElementById("about").style.transform = 'translateY(-100vh)';
    // document.getElementById("research").style.transform = 'translateY(0)';
    // document.getElementById("cv-cont").style.transform = 'translateY(100vh)';
    
    // indisplay = 2;
}


function setCV(){
    // rolling = true;
    // setTimeout(setFalse, 500);
    // document.getElementById("research-button").className = "notpressed";
    // document.getElementById("about-button").className = "notpressed";
    // document.getElementById("cv-button").className = "pressed";

    // document.getElementById("cv-cont").scrollIntoView();
    pressAction(3)


    // document.getElementById("about").style.transform = 'translateY(-200vh)';
    // document.getElementById("research").style.transform = 'translateY(-100vh)';
    // document.getElementById("cv-cont").style.transform = 'translateY(0)';
    
    // indisplay = 3;

}

function pressAction(i){
    if(i==1){
    elem = document.getElementById("about-button")
    }
    else if(i==2){
    elem = document.getElementById("research-button")
    }
    else{
    elem = document.getElementById("cv-button")
    }
    elem.className = "pressed";
    setTimeout(function (){elem.className = "notpressed"}, 200);

}


// function setFalse(){
//     rolling=false;
// }


// function setNav(){
//     if(!rolling){

//         if(document.getElementById("about").getBoundingClientRect().top > 0 && document.getElementById("about").getBoundingClientRect().bottom <= window.innerHeight){
//             document.getElementById("research-button").className = "notpressed";
//             document.getElementById("about-button").className = "pressed";
//             document.getElementById("cv-button").className = "notpressed";
//         }
//         else if(document.getElementById("research").getBoundingClientRect().top > 0 && document.getElementById("research").getBoundingClientRect().bottom <= window.innerHeight){
//             document.getElementById("research-button").className = "pressed";
//             document.getElementById("about-button").className = "notpressed";
//             document.getElementById("cv-button").className = "notpressed";
//         }
//         else if(document.getElementById("cv-cont").getBoundingClientRect().top > 0 && document.getElementById("cv-cont").getBoundingClientRect().bottom <= window.innerHeight){
//             document.getElementById("research-button").className = "notpressed";
//             document.getElementById("about-button").className = "notpressed";
//             document.getElementById("cv-button").className = "pressed";
//         }else{
//             document.getElementById("research-button").className = "notpressed";
//             document.getElementById("about-button").className = "notpressed";
//             document.getElementById("cv-button").className = "notpressed";
//         }
//     }
//     setTimeout(setNav, 500);
// }

// setNav();