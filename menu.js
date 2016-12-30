function scroll() {
	var y = window.pageYOffset;
	if (y > 400) {
		document.getElementById('nav').style = "position: fixed; background: #242943;";
	} else {
		document.getElementById('nav').style = "position: absolute; background: transparent;";
	}
}

window.onscroll = scroll;