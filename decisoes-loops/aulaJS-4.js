// aula4

let score1 = 8;
let score2 = 8;
let pass1 = 5;
let pass2 = 7;

const minPass = (score1 >= pass1) || (score2 >= pass2);

let msg = 'Resist required: ' + !(minPass);

const el = document.querySelector('.level');
el.textContent = msg;
