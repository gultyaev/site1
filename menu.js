//Сдвиг меню при скролле
function scroll() {
	var y = window.pageYOffset;
	if (y > 400) {
		document.getElementById('nav').style = "position: fixed; background: #242943;";
	} else {
		document.getElementById('nav').style = "position: absolute; background: transparent;";
	}
}

window.onscroll = scroll;

//Меню сайта
var btnMenu = document.getElementById('menu'),
		nav = document.querySelector('.nav');

btnMenu.onclick = function() {
	nav.style.display = "flex";
	nav.style.opacity = 1;
	document.querySelector('.wrapper').style.filter = "blur(5px)";
	document.querySelector('.logo-link').style.filter = "blur(5px)";
}

window.onclick = function(event) {
	if (event.target == nav) {
		nav.style.display = "none";
		nav.style.opacity = 0;
		document.querySelector('.wrapper').style.filter = "none";
		document.querySelector('.logo-link').style.filter = "none";
	}
}


//Скролл. Просто так

function scrollMe() {	
		var scroll = setInterval(function() {
			window.scrollTo(0, window.pageYOffset - 6);
			if (window.pageYOffset == 0) {
		clearInterval(scroll);
	}
		}, 1);
}