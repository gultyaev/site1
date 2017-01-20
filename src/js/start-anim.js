window.addEventListener('load', function () {
	var load = document.querySelectorAll('.load');
	function removeClass() {
		[].forEach.call(load, function(el) {
		el.classList.remove('load');
		});
	}
	
	setTimeout(removeClass, 2000);
});