// Aula 6

// Reduce

const numeros = [1, 6, 8, 3, 2, 22, 19, 64, 15, 4, 48, 55, 17, 35, 48];

const total = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador += valor;
  return acumulador;
}, 0); // <- valor inicial igual a 0;

// console.log(total);


const pares = numeros.reduce(function (acumulador, valor, indice, array) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []); // <- valor inicial igual a [];

// console.log(pares);


const dobro = numeros.reduce(function (acumulador, valor, indice, array) {
  acumulador.push(valor * 2);
  return acumulador;
}, []); // <- valor inicial igual a [];

// console.log(dobro);


const pessoas = [
  { nome: 'jose', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 87 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) {
    return acumulador;
  }
  return valor;
});

console.log(maisVelha);

