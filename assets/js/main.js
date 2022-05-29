var lag = 200;

function changein(){
    document.getElementById('incircle').style.width = '30px';
    document.getElementById('incircle').style.height = '30px';
    document.getElementById('outcircle').style.height = '31px';
    document.getElementById('outcircle').style.width = '31px';
}


function changeout(){
    document.getElementById('incircle').style.width = '10px';
    document.getElementById('incircle').style.height = '10px';
    document.getElementById('outcircle').style.height = '50px';
    document.getElementById('outcircle').style.width = '50px';
}

/*
var soc = document.getElementsByClassName('socicon');
for(i=0;i<soc.length;i++){
    soc[i].addEventListener('mouseenter', function(e){
        changein();
        lag=1;});
    soc[i].addEventListener('mouseleave', function(e){
        changeout();
        lag = 200});
    soc[i].style.animationDelay = i*500 + 'ms';
}

var send = document.getElementsByClassName('submit-button')[0];

    send.addEventListener('mouseenter', function(e){
        changein();
        lag=1;});
    send.addEventListener('mouseleave', function(e){
        changeout();
        lag = 200});
*/

var hb = document.getElementsByTagName('button');
for(i=0;i<hb.length;i++){
    hb[i].addEventListener('mouseenter', function(e){
        changein();
        lag=1;});
    hb[i].addEventListener('mouseleave', function(e){
        changeout();
        lag = 200});
}

function setouter(x,y){
    document.getElementById("outcircle").style.left = x + "px";
    document.getElementById("outcircle").style.top = y + "px";   
}

const onMouseMove = (e) =>{
  document.getElementById('incircle').style.left = e.clientX + 'px';
  document.getElementById('incircle').style.top = e.clientY + 'px';
  setTimeout(function(){setouter(e.clientX, e.clientY);}, lag);
  document.getElementById('pointer').style.opacity = '1';
}
document.addEventListener('mousemove', onMouseMove);

document.addEventListener("mouseleave", function(event){

  if(event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight))
  {

  document.getElementById('pointer').style.opacity = '0';

  }
});

document.addEventListener("mouseenter", function(event){
  document.getElementById('pointer').style.opacity = '1';
});

/*
function scrollheader(){
window.addEventListener("scroll", (event) => {  

    scroly = this.scrollY;
    elems = document.getElementsByClassName('hb');
    if(scroly > 100){
        document.getElementById('header').setAttribute("class", "headerhover");
    	for(i=0; i<elems.length; i++){
    		elems[i].style.color = "black";
    		elems[i].style.border = "2px solid black";
    	}
    }
    else{
        document.getElementById('header').setAttribute("class", "header");
    	for(i=0; i<elems.length; i++){
    		elems[i].style.color = "#fff";
    		elems[i].style.border = "2px solid #fff";
    	}
    }

    if(scroly>150){
        document.body.setAttribute("class","white");        
    }
    else {
         document.body.setAttribute("class","black");       
    }

    try{txt = document.getElementById("fluidtxt");
    txt.style.top = -scroly/2 -10 + "px";
    txt.style.opacity = 1.2- scroly/200;}

    catch(err) {}

    try{txt = document.getElementById("fluidtxtmobi");
    txt.style.top = -scroly/7 -10 + "px";
    txt.style.opacity = 1.2- scroly/700;}

    catch(err) {}

    if(scroly>750){
    var scale = "scale(";
    var value = scroly/375 - 1.35;
    var trans = 10 + scroly/375;
    var endd = ") translateX(10%)";
    var inner = scale + value + endd
    document.getElementById('holder').style.opacity = 3-scroly/375;
    if(3-scroly/375 < 0){
    document.getElementById('holder').style.transform = "scale(1)";
    }
    else{
            document.getElementById('holder').style.transform = inner;
    }
    }
    else{
         document.getElementById('holder').style.opacity = 1;
        document.getElementById('holder').style.transform = "scale(0.65) translateX(10%)";
        document.getElementById('holder').style.visibility = "visible";

    }


    if(scroly>1150){
        document.getElementById('physics').style.opacity = 1;
        document.getElementById('coding').style.transform = "translateX(0.5%)";
        document.getElementById('coding').style.opacity = 1;
        document.getElementById('art').style.transform = "translateX(0.5%)";
        document.getElementById('art').style.opacity = 1;
        document.getElementById('music').style.transform = "translateX(0.5%)";
        document.getElementById('music').style.opacity = 1;
        document.getElementById('photography').style.transform = "translateX(0.5%)";
        document.getElementById('photography').style.opacity = 1;
        document.getElementById('world').style.opacity = 0.2;
    }

    
});
}

scrollheader();*/

window.addEventListener('load',() =>{
    document.getElementById('loading').style.display = "none";
    document.getElementById('loading').style.pointerEvents = "none";
    document.body.style.overflowY= "auto";
});


function closemenu(){
    document.getElementById("menu").style.visibility = "hidden"; 
    document.getElementById("menu").style.left = "100vh";
    document.getElementById("innerbutton").style.transform = "rotate(0deg) translate(0px)";
    document.getElementById('menubutton').setAttribute("onclick", "menu()")
}

function menu(){
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("menu").style.left = "0vh";
    document.getElementById("innerbutton").style.transform = "rotate(-45deg) translate(-30px)";
    document.getElementById('menubutton').setAttribute("onclick", "closemenu()")
}


/*
function loop(){

   if(document.getElementById('skills').getBoundingClientRect().top < 0.25*window.innerHeight)
    {
        document.getElementById('header').setAttribute('class', 'headerhover blue');
    }
    else{
        document.getElementById('header').setAttribute('class', 'headerhover');
    }
    
    setTimeout(function(){loop();},1000/60);

}

loop();
*/

entries = document.getElementsByClassName('exp');

for (var i = entries.length - 1; i >= 0; i--) {
    entries[i].style.transitionDelay = i*300 + 'ms';
    entries[i].style.animationDelay = i*200 + 'ms';
}

function skillsloop(){
    if (document.getElementById('skills').getBoundingClientRect().top < 0.45*window.innerHeight) 
    {
        for (var i = entries.length - 1; i >= 0; i--) {
            width = entries[i].style.getPropertyValue('--exp');
            entries[i].style.width = width;
        }
    }
    else{
        for (var i = entries.length - 1; i >= 0; i--) {
            entries[i].style.width = '0';
        }

    requestAnimationFrame(skillsloop);
    }
}

skillsloop();


  function Stars(numberOfStars, divID){
    var chosenDiv = document.getElementById(divID)  
    chosenDiv.style.display = "none";
    chosenDiv.innerHTML = "";
    function randomFrom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    var text = "";
    var i; 
    for (i = 0; i < numberOfStars; i++) {
        bigRange = Array.apply(null, Array(100)).map(function (_, i) {return i;});
        smallRange = Array.apply(null, Array(10)).map(function (_, i) {return i;});
        tenRange = Array.apply(null, Array(5)).map(function (_, i) {return i;});
        starTwinkleStage = randomFrom(tenRange);
        var top = randomFrom(bigRange); 
        var right = randomFrom(bigRange); 
        var width = randomFrom(smallRange);
        text += "<style></style>";
        text += "<div class='stars' style='top:" + top + "%; right: "+ right +"%; width:" + width + "px; height:" + width + "px;";
        text += "animation: twinkling " + starTwinkleStage + "s alternate infinite";
        text += ";box-shadow: 0px 0px 1vw rgba(255, 255, 255, 0.2);'></div>";
        chosenDiv.innerHTML = text;
        chosenDiv.style.display = "block";
    }
}
  
// Function(How many stars, id that you want populating)
Stars(180, "stars");


var tween = KUTE.fromTo('#blob1', {path: '#blob1' }, { path: '#blob2' },{repeat: 999, duration: 3000, yoyo: true}).start();
//var tween2 = KUTE.fromTo('#hand_fin', {path: '#hand_fin' }, { path: '#hand_init' },{repeat: 999, duration: 1000, yoyo: true, easing:KUTE.Easing.easingQuadraticInOut}).start();

//svgelem = document.getElementById('#hand_fin');


//var rotatetween = KUTE.allTo("#adi_hand",  { rotate: 5 },{rotate: 0},  { repeat: 999, yoyo: true}, {transformOrigin: '50% 50%'}).start();

var bub = document.getElementById('bubbles');

function addBubble(){
    var left = Math.random()*95;
    var width = Math.random()*10;
    var time = 0.1 + Math.random()*5;
    var opacity = 0.7 + Math.random()*0.3;
    bubble = document.createElement('div');
    bubble.setAttribute('class','bubble')
    bubble.style.opacity = opacity;
    bubble.style.left = left + '%';
    bubble.style.width = width + '%';
    bub.appendChild(bubble)
    setTimeout(function(){addBubble();}, 350);
    removeBubble(bubble);
}

addBubble();

function removeBubble(elem){
    setTimeout(function(){elem.remove();},8000);
}

it = document.getElementsByClassName('it');
edu = document.getElementsByClassName('eduitem');
cut = document.getElementsByClassName('cut');

for (var i = 0; i< it.length; i++) {
    it[i].style.transitionDelay = i*300 + 'ms';
    it[i].style.animationDelay = i*200 + 'ms';
}

function edu_in(){
    document.getElementById('qual').style.left = '20%';
    document.getElementById('qual').style.opacity = 1;
}

function edu_out(){
    document.getElementById('qual').style.left = '17.5%';
    document.getElementById('qual').style.opacity = 0;
}

function proj_in(){
    document.getElementById('rese').style.right = '20%';
    document.getElementById('rese').style.opacity = 1;
}

function proj_out(){
    document.getElementById('rese').style.right = '17.5%';
    document.getElementById('rese').style.opacity = 0;
}


function eduloop(){

    for (var i = it.length - 1; i >= 0; i--) {
        if(it[i].getBoundingClientRect().top < 0.7*window.innerHeight){
            edu[i].style.clipPath = 'inset(0 0 0 0)';
            cut[i].style.transform = 'scaleY(1)';
            pos(cut[i]);
        }
    }


    if(document.getElementById('edu').getBoundingClientRect().top < 0.4*window.innerHeight && document.getElementById('edu').getBoundingClientRect().bottom > 1.1*window.innerHeight){
        console.log('trigger');
         edu_in();
    }
    else{
        edu_out()
    }

    if(document.getElementById('proj').getBoundingClientRect().top < 0.4*window.innerHeight && document.getElementById('proj').getBoundingClientRect().bottom > 1.1*window.innerHeight){
        console.log('trigger');
         proj_in();
    }
    else{
        proj_out()
    }

    // if(document.getElementById('edu').getBoundingClientRect().bottom > 0.1*window.innerHeight){
    //     edu_out(0);
    // }

    setTimeout(function(){eduloop();},1000/60);
}

function pos(elem){
    setTimeout(function(){elem.style.top = '100%';
elem.style.borderRadius = ' 0px 0px 20px 20px'},500);
}

eduloop();

/*bgs = ['adi1.jpg', 'adi2.jpeg', 'adi3.jpeg', 'adi4.jpeg', 'adi5.jpeg','adi6.jpeg'];

var bg = '/assets/images/' + bgs[Math.floor(Math.random() * bgs.length)];
let image = document.createElement('img');
image.src = bg;
image.addEventListener('load', (event)=> {
    document.getElementById('bitholder').style.backgroundImage = `url(${bg})`;
});
*/



function removeblind(){

    if(document.getElementById('head').getBoundingClientRect().top < 0.65*window.innerHeight)
    {
        
        elem = document.getElementById('head');
        elem.style.opacity = 1;
        elem.style.transform = 'translateY(0)';
    }


    if(document.getElementById('inmotivtext').getBoundingClientRect().top < 0.45*window.innerHeight)
    {
        elem = document.getElementById('inmotivtext');
        elem.style.opacity = 1;
        elem.style.transform = 'translateY(0)';
    }

    setTimeout(function(){removeblind();},1000/60);

}

removeblind();

var elements = document.getElementsByTagName("*");

// function showpdf(){
//     document.body.setAttribute('class', 'whitescroll');
//     disableScrolling();
//     document.getElementById('resume').style.display = 'block';
//     document.getElementById('incircle').style.opacity=0;
//     document.getElementById('outcircle').style.opacity=0;
// }

// function hidepdf(){
//     document.body.setAttribute('class', '');
//     enableScrolling();
//     setTimeout(function(){document.getElementById('resume').style.display = 'none';},500);
//     document.getElementById('incircle').style.opacity=1;
//     document.getElementById('outcircle').style.opacity=1;
// }

// function disableScrolling(){
//     var x=window.scrollX;
//     var y=window.scrollY;
//     window.onscroll=function(){window.scrollTo(x, y);};
// }

// function enableScrolling(){
//     window.onscroll=function(){};
// }