// aula11

let i = 1;
let msg = '';

while (i <= 10) {
  msg += i + ' x 5 = ' + (i * 5) + '<br>';
  i++;
}

document.querySelector('.level').innerHTML = msg;
