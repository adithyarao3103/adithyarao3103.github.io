function headerloop(){
	if (document.getElementById('about').getBoundingClientRect().top < 0.45*window.innerHeight && document.getElementById('about').getBoundingClientRect().bottom > 0.45*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header white');
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb whitebut');
		}
	}
	else if (document.getElementById('skills').getBoundingClientRect().top < 0.45*window.innerHeight && document.getElementById('skills').getBoundingClientRect().bottom > 0.45*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header blue');
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb bluebut');
		}
	}
	else{
		document.getElementById('header').setAttribute('class','header trans');
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb transbut');
		}
	}

	if (document.getElementById('about').getBoundingClientRect().top < 0.5*window.innerHeight && document.getElementById('about').getBoundingClientRect().bottom > 0.75*window.innerHeight)
	{
		document.getElementById('solar').style.opacity = 1;
		document.getElementById('solar').style.transform = 'translateX(-5%) scale(1)';
	}
	else if (document.getElementById('skills').getBoundingClientRect().top < 1.25*window.innerHeight && document.getElementById('skills').getBoundingClientRect().bottom > 1.25*window.innerHeight)
	{
		document.getElementById('solar').style.opacity = 0;
		document.getElementById('solar').style.transform = 'translateX(-5%) scale(2.5)';
	}
	else{
		document.getElementById('solar').style.opacity = 0;
		document.getElementById('solar').style.transform = 'translateX(-5%) scale(0.5)';
	}

	requestAnimationFrame(headerloop);
}

headerloop();
