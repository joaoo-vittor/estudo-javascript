// Aula 13

// String

/*

  A barra invertida \ serve para escapar caracter

*/

let umString = 'Um \'\' texto';

console.log(umString);

// retorna o elemento da posição 6 da string
console.log(umString[6]);

// fora do range de index retorna undefined
console.log(umString[16325]);

// tamanho da string com o metodo length
console.log(umString.length);

// retorna o elemento da posição 6 da string
console.log(umString.charAt(6));

// retorna o codigo da tabela ascii, referente ao elemento da posição 6
console.log(umString.charCodeAt(6));

// retorna o indice de começo da palavra texto
console.log(umString.indexOf('texto'));

// o segundo parametro é a posição de inicio da verificação
console.log(umString.indexOf('texto', 3));

// match usado com expressões regulares
console.log(umString.match(/[a-z]/g));

// retorna o indice
console.log(umString.search(/[a-z]/));


console.log(umString.replace('Um', 'Outro'));

let frase = 'O rato roeu a roupa do rei de roma'

console.log(frase.replace(/r/g, '#'));

// Fatiamento de string
console.log(frase.slice(2, 6));

// Divide a string no caracter passado na função
console.log(frase.split(' '));

// o segundo parametro especifica a quantidade de divisão
console.log(frase.split(' ', 3));

// Converte para maiusculo
console.log(frase.toUpperCase());

// Converte para minusculo
console.log(frase.toLowerCase());
