// Aula 11

// Funções geradoras

function * geradora1() {
  // Codigo qualquer ...
  yield 'valor 1';
  // Codigo qualquer ...
  yield 'valor 2';
  // Codigo qualquer ...
  yield 'valor 3';
}

// const g1 = geradora1();

// for (let valor of g1) {
//   console.log(valor);
// }

function * gerador2() {
  let i = 0;
  
  while (true) {
    yield i;
    i++;
  }
}

// const g2 = gerador2();


function * gerador3() {
  yield 0;
  yield 1;
  yield 3;
}

function * gerador4() {
  yield * gerador3();
  yield 4;
  yield 5;
}

// const g4 = gerador4();

// for (let valor of g4) {
//   console.log(valor);
// }


function * gerador5() {
  yield function () {
    console.log('Yield 1');
  }

  return function () {
    console.log('return');
  }

  yield function () {
    console.log('Yield 2');
  }
}

const g5 = gerador5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();
