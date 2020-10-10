// aula2

let score1 = 80;
let score2 = 90;
let highScore1 = 75;
let highScore2 = 95;

let comparison = (score1 + score2) > (highScore1 + highScore2);

const el = document.querySelector('.level');
el.textContent = 'New high score: ' + comparison;

