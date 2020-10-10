// aula6

let score = 75;
let pass = 50;
let msg;

if (score >= pass) {
  msg = 'Congratulations, you passed!';
} else {
  msg = 'Have another go!';
}

const el = document.querySelector('.level');
el.textContent = msg;

