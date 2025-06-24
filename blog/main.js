

function checkMobile(){
    return(parseInt(window.getComputedStyle(document.documentElement).getPropertyValue('--mobile')));
}

var menuClose=1;


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
                // child.style.borderColor = 'transparent';  
            }
        }
    }
}

navBarChange(window.scrollY);

window.onresize = function(){
    navBarChange(window.scrollY);
}

