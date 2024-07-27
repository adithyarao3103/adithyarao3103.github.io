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
            document.getElementById("navbar").style.transform = "translateX(-50%)";
        }
        else{
            menuClose = 1;
            document.getElementById("navbar").style.transform = "translateX(-150%)";
        }
    }
}
