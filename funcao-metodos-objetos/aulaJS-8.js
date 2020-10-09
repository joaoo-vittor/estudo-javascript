// aula8

let msg = '<p><b>page title: </b>' + document.title + '<br>';
msg += '<b>page adress: </b>' + document.URL + '<br>';
msg += '<b>last modified: </b>' + document.lastModified + '</p>'

let el = document.querySelector('.info');
el.innerHTML = msg;
