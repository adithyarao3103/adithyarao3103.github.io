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

function checkMobile(){
    return(window.getComputedStyle(document.documentElement).getPropertyValue('--mobile'))
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