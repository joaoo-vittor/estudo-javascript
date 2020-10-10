// aula7

let msg;
let level = 2;

switch (level) {
  case 1:
    msg = 'Good luck on the first test!';
    break;
  case 2:
    msg = 'Second of three - keep going!';
    break;
  case 3:
    msg = 'Final round, almost there!';
    break;
  default:
    msg = 'Good luck!';
    break;
}

const el = document.querySelector('.level');
el.textContent = msg;
