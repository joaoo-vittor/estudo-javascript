// Aula 8

// forEach

const numeros = [1, 6, 8, 1];


let acumulador = 0;
numeros.forEach(function (valor, indice, array) {
  acumulador += valor;
})

console.log(acumulador);
