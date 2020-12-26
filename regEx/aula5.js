//  Conjuntos e Ranges

const { alfabeto } = require('./texto')

console.log(alfabeto);


// [abc] -> Conjunto
// ^ -> negação

// console.log(alfabeto.match(/[abc123]+/g));
// console.log(alfabeto.match(/[^abc123]/g));


// [a-z] -> Ranges
// Sempre do menor para o maior
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[a-zA-z]+/g));
console.log(alfabeto.match(/[a-zA-z0-9]+/g));
console.log(alfabeto.match(/[^a-zA-z0-9]+/g));
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // unicode
console.log(alfabeto.match(/\w+/g));
console.log(alfabeto.match(/\W+/g));
console.log(alfabeto.match(/\d+/g));
console.log(alfabeto.match(/\D+/g));
console.log(alfabeto.match(/\s+/g));
console.log(alfabeto.match(/\S+/g));

