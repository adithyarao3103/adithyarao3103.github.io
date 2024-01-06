var r = document.querySelector(':root');

// window.addEventListener("wheel", handleWheel);

function handleWheel(e){
    window.removeEventListener("wheel", handleWheel)
    scroll(e)

    setTimeout(()=>{
    window.addEventListener("wheel", handleWheel);},1000); // return event after 1 second
}


function scroll(event){
    scrollamt = event.deltaY;

    if(Math.abs(scrollamt) < 100){
        return;
    }
    
    if(scrollamt > 0){
        if(indisplay == 1){
            setResearch();
            console.log("res");
        }
        if(indisplay == 2){
            setCV();
            console.log("cv");
        }
    }
    else{
        if(indisplay == 3){
            setResearch();
            console.log('res');
        }
        if(indisplay == 2){
            setAbout();
            console.log("abt");
        }

    }
}

indisplay = 1;


function setAbout(){
    document.getElementById("research-button").className = "notpressed";
    document.getElementById("about-button").className = "pressed";
    document.getElementById("cv-button").className = "notpressed";
    // r.style.setProperty('--main', aboutmain);
    // r.style.setProperty('--shadow', aboutshadow);
    // r.style.setProperty('--inset', aboutinset);

    document.getElementById("about").style.transform = 'translateY(0)';
    document.getElementById("research").style.transform = 'translateY(100vh)';
    document.getElementById("cv-cont").style.transform = 'translateY(200vh)';
    
    indisplay = 1;
}

function setResearch(){
    document.getElementById("research-button").className = "pressed";
    document.getElementById("about-button").className = "notpressed";
    document.getElementById("cv-button").className = "notpressed";
    // r.style.setProperty('--main', researchmain);
    // r.style.setProperty('--shadow', researchshadow);
    // r.style.setProperty('--inset', researchinset);

    document.getElementById("about").style.transform = 'translateY(-100vh)';
    document.getElementById("research").style.transform = 'translateY(0)';
    document.getElementById("cv-cont").style.transform = 'translateY(100vh)';
    
    indisplay = 2;
}


function setCV(){
    document.getElementById("research-button").className = "notpressed";
    document.getElementById("about-button").className = "notpressed";
    document.getElementById("cv-button").className = "pressed";

    document.getElementById("about").style.transform = 'translateY(-200vh)';
    document.getElementById("research").style.transform = 'translateY(-100vh)';
    document.getElementById("cv-cont").style.transform = 'translateY(0)';
    
    indisplay = 3;

}

let aboutmain = "#b3d2de";
let aboutshadow = "#85a1ac";
let aboutinset = "#c1dfeb";

let researchmain = "#d2b48c";;
let researchshadow = "#987445";
let researchinset = "#e5d3b3";