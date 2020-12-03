// Aula 14

let num1 = 25;
let num2 = 25.51561;

console.log(num1.toString() + num2.toString());

// Coverte para binario
console.log(num1.toString(2));

// fixa as casas decimais
console.log(num2.toFixed(2));

// verificar se o numero inteiro
console.log(Number.isInteger(num1));

// Verifica se a conta esta invalida
let temp = num1 * 'ola';
console.log(Number.isNaN(temp));


let num3 = 0.7;
let num4 = 0.1;

num3 += num4;
num3 += num4;
num3 += num4;

num3 = parseFloat(num3.toFixed(2));

//
console.log(num3);
console.log(Number.isInteger(num3));



