// Aula 7

const numeros = [1, 6, 8, 3, 2, 22, 19, 64, 15, 4, 48, 55, 17, 35, 48];

const numPares = numeros.filter(valor => {
  return valor % 2 === 0;
}).map(valor => {
  return valor * 2;
}).reduce((acumulador, valor) => {
  acumulador += valor;
  return acumulador;
}, 0);

console.log(numPares);
