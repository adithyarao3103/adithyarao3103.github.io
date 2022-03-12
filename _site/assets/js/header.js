function HideAllTitles(){
	titles = document.getElementsByClassName('title');
	for (var i = titles.length - 1; i >= 0; i--) {
		titles[i].style.opacity = 0;
	}
}

HideAllTitles();

function headerloop(){
	if (document.getElementById('about').getBoundingClientRect().top < 0.45*window.innerHeight && document.getElementById('about').getBoundingClientRect().bottom > 0.65*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header white');
		HideAllTitles();
		document.getElementById('title-about').style.opacity = 0.1;
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb whitebut');
		}
		document.getElementById('bitholder').style.transform = 'translateX(0) translateY(0)';
	}

	else if (document.getElementById('acad').getBoundingClientRect().top < 0.65*window.innerHeight && document.getElementById('acad').getBoundingClientRect().bottom > 0.65*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header lightblue');
		HideAllTitles();
		document.getElementById('title-acad').style.opacity = 0.1;
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb lightbluebut');
		}
	}

	else if (document.getElementById('skills').getBoundingClientRect().top < 0.65*window.innerHeight && document.getElementById('skills').getBoundingClientRect().bottom > 0.65*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header blue');
		HideAllTitles();
		document.getElementById('title-skills').style.opacity = 0.1;
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb bluebut');
		}
	}

	/*else if (document.getElementById('course').getBoundingClientRect().top < 0.65*window.innerHeight && document.getElementById('course').getBoundingClientRect().bottom > 0.65*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header purple');
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb purplebut');
		}
	}*/

	else if (document.getElementById('activity').getBoundingClientRect().top < 0.65*window.innerHeight && document.getElementById('activity').getBoundingClientRect().bottom > 0.65*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header gray');
		HideAllTitles();
		document.getElementById('title-activity').style.opacity = 0.1;
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb graybut');
		}
	}

	else if (document.getElementById('end').getBoundingClientRect().top < 0.65*window.innerHeight && document.getElementById('end').getBoundingClientRect().bottom > 0.65*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header black');
		HideAllTitles();
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb blackbut');
		}
	}

	else{
		document.getElementById('header').setAttribute('class','header trans');
		var hb = document.getElementsByClassName('hb');
		HideAllTitles();
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb transbut');
		}
	}

	if (document.getElementById('solar').getBoundingClientRect().top < 1.3*window.innerHeight && document.getElementById('solar').getBoundingClientRect().bottom > 0*window.innerHeight)
	{
		document.getElementById('solar').style.opacity = 1;
		document.getElementById('solar').style.transform = 'translateX(5%) translateY(10%) scale(1)';
	}
	/*else{
		document.getElementById('solar').style.opacity = 0;
		document.getElementById('solar').style.transform = 'translateX(5%) translateY(10%) scale(0.5)';
	}*/

	requestAnimationFrame(headerloop);
}

headerloop();
