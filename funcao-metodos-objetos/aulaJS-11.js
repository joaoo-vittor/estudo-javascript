// aula11

let randomNumber = Math.floor((Math.random() * 10) + 1);
// o metodo floor() arredonda um numero para baixo
// random() gera um numero entre 0 e 1

let el = document.querySelector('.info');
el.innerHTML = '<p>' + randomNumber + '</p>';
