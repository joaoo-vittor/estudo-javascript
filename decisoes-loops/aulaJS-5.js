// aula5

let score = 75;
// let msg;
let msg = '';

function congratulate() {
  msg += 'Congratulations! ';
}

if (score > 50) {
  // msg = 'Congratulations!';
  congratulate();
  msg += ' Proceed to the next round.';
}

const el = document.querySelector('.level');
el.textContent = msg;
