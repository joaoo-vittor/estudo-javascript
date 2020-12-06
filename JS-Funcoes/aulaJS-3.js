// Aula 3

// Retorno de Funções

function soma(a, b) {
  return a + b;
}

// console.log(soma(2, 5));

// ###########################

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('mundo!');

// console.log(resto);


// #######################################

function criaMultiplcador(multiplicador) {
  return function (n) {
    return n * multiplicador; 
  };
}

const duplica = criaMultiplcador(2);
const triplica = criaMultiplcador(3);

console.log(duplica(2));
console.log(triplica(2));

