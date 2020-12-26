const { texto } = require('./texto');
const regEx = /(joao|sit)/gi;

console.log(texto.match(regEx));

console.log(texto.replace(/(joao|sit)/gi, '"$1"'));

console.log(texto.replace(/(joao|sit)/gi, (input) => {
  return input.toLocaleUpperCase();
}));
