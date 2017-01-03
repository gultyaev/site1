function scroll() {
	var y = window.pageYOffset;
	if (y > 400) {
		document.getElementById('nav').style = "position: fixed; background: #242943;";
	} else {
		document.getElementById('nav').style = "position: absolute; background: transparent;";
	}
}

window.onscroll = scroll;


var btnMenu = document.getElementById('menu'),
		nav = document.querySelector('.nav');

btnMenu.onclick = function() {
	nav.style.display = "flex";
}

window.onclick = function(event) {
	if (event.target == nav) {
		nav.style.display = "none";
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