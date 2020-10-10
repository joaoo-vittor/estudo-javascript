// aula12

let i = 1;
let msg = '';

do {
  msg += i + ' x 5 = ' + (i * 5) + '<br>';
  i++;
} while (i < 1);

document.querySelector('.level').innerHTML = msg;
