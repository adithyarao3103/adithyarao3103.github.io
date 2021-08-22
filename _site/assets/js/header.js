function headerloop(){
	if (document.getElementById('about').getBoundingClientRect().top < 0.45*window.innerHeight && document.getElementById('about').getBoundingClientRect().bottom > 0.65*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header white');
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb whitebut');
		}
		document.body.setAttribute('class','white-s');
	}
	else if (document.getElementById('skills').getBoundingClientRect().top < 0.65*window.innerHeight && document.getElementById('skills').getBoundingClientRect().bottom > 0.65*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header blue');
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb bluebut');
		}
		document.body.setAttribute('class','blue-s');
	}

	else if (document.getElementById('blog').getBoundingClientRect().top < 0.65*window.innerHeight && document.getElementById('blog').getBoundingClientRect().bottom > 0.65*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header purple');
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb purplebut');
		}
		document.body.setAttribute('class','purple-s');
	}

	else if (document.getElementById('contact').getBoundingClientRect().top < 0.65*window.innerHeight && document.getElementById('contact').getBoundingClientRect().bottom > 0.65*window.innerHeight) {
		document.getElementById('header').setAttribute('class','header gray');
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb graybut');
		}
		document.body.setAttribute('class','gray-s');
	}

	else{
		document.getElementById('header').setAttribute('class','header trans');
		var hb = document.getElementsByClassName('hb');
		for (var i = hb.length - 1; i >= 0; i--) {
			hb[i].setAttribute('class', 'hb transbut');
		}
		document.body.setAttribute('class','black-s');
	}

	if (document.getElementById('about').getBoundingClientRect().top < 0.5*window.innerHeight && document.getElementById('about').getBoundingClientRect().bottom > 0.75*window.innerHeight)
	{
		document.getElementById('solar').style.opacity = 1;
		document.getElementById('solar').style.transform = 'translateX(-5%) scale(1)';
	}
	else{
		document.getElementById('solar').style.opacity = 0;
		document.getElementById('solar').style.transform = 'translateX(-5%) scale(0.5)';
	}

	 if (document.getElementById('blog').getBoundingClientRect().top < 0.65*window.innerHeight && document.getElementById('blog').getBoundingClientRect().bottom > 0.65*window.innerHeight) 
	{
		document.getElementById('text').style.opacity=1;
	}

	requestAnimationFrame(headerloop);
}

headerloop();
