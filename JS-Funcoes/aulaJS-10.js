// Aula 10

// Funções recursivas

function recusiva(num) {
  if (num > 10) {
    return;
  }
  console.log(num);
  recusiva(num + 1);
}

recusiva(1);

