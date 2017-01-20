"use strict";

document.querySelector('input').addEventListener('keyup', function(el) {
	var params = {
  action: 'opensearch',
  origin: '*',
  format: 'json',
  search: ''
},
    apiUrl = 'https://en.wikipedia.org/w/api.php',
    http = new XMLHttpRequest(),
    body,
    resp,
  	inp = document.getElementById('input').value,
    links = document.querySelectorAll('a');
  params.search = inp;
	
//	Сброс созданного
  if (links.length > 1) {
    links.forEach(function(el) {
      el.remove();
    });
  }
//	Создаём элементы
	for (let i = 0; i < 5; i++)
	{
		var a = document.createElement('a');
		a.target = "_blank";
		a.className = 'item' + i;
		document.querySelector('.container').appendChild(a);
	}

  
  // http.addEventListener('readystatechange',function(){
  //   if (this.readyState == 4) {
  //     if (this.status == 200) {
  //       resp = JSON.parse(this.responseText);
  //       for (let i=0;i<5;i++) {
  //         document.querySelector('.item' + i).innerHTML = resp[1][i];
  //         document.querySelector('.item' + i).href = resp[3][i];
  //       }
  //     }
  //   }
  // });
  
  let promise = new Promise((resolve, reject) => {
		
		//  ajax запрос
		body = Object.keys(params).map(function(prop) {
			return prop + '=' + params[prop];
		}).join('&');
		http.open('POST', apiUrl);
		
		//Вывод Promise
    if (http.readyState == 4) {
      if (http.status == 200) {
        resolve();
      }
    } else {
      reject(new Error("error"));
    }
    
  });
  promise.then(result => function() {
		http.send(body);
      resp = JSON.parse(this.responseText);
      for (let i=0;i<5;i++) {
        document.querySelector('.item' + i).innerHTML = resp[1][i];
        document.querySelector('.item' + i).href = resp[3][i];
      }
      },
      error => error);
});