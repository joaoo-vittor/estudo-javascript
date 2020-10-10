// aula10

let score = [24, 32, 17];
let arrayLength = score.length;
let roundNumber = 0;
let msg = '';
let i;

for (i = 0; i < arrayLength; i++) {
  roundNumber = (i + 1);
  msg += 'Round ' + roundNumber + ': ';
  msg += score[i] + '<br>';
}

document.querySelector('.level').innerHTML = msg;
