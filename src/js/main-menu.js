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