//Сдвиг меню при скролле




//Меню сайта


//Анимация появления

var header = document.querySelector('.header'),
		banner = document.querySelector('.banner');

header.addClass('.unloaded');
banner.addClass('.unloaded');

document.body.addEventListener('load', function () {
	header.
});


//Скролл. Просто так

function scrollMe() {	
		var scroll = setInterval(function() {
			window.scrollTo(0, window.pageYOffset - 6);
			if (window.pageYOffset == 0) {
		clearInterval(scroll);
	}
		}, 1);
}