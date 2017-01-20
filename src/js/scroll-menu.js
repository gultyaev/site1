function scroll() {
	var y = window.pageYOffset,
			height = document.querySelector('.banner').offsetHeight - document.querySelector('.header').offsetHeight,
			nav = document.getElementById('nav');
	if (y > height) {
		nav.style = "position: fixed; background: #242943;";
		nav.classList.add('scrolled-menu');
	} else {
		nav.style = "position: absolute; background: transparent;";
		nav.classList.remove('scrolled-menu');
	}
}

window.onscroll = scroll;