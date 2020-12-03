// Aula 7

// Tratando e lançando erros

// try {
//   console.log(naoExito);
// } catch (error) {
//   console.log('naoExito não existe.');
//   // console.log(error);
// }

function soma(x, y) {
  if (typeof(x) !== 'number' || typeof(y) !== 'number') {
    throw('X e Y precisam ser números.');
  }
  return x + y;
}

try {
  console.log(soma(1, 2));
  console.log(soma(1, '1'));
} catch (error) {
  console.log(error);
}


