// Aula 16

const array = [1,2,3,4,5,6];

console.log(array);

// insere o elemento na ultima posição
array.push(12);

console.log(array);

// Remove o ultimo elemento do array
const removido = array.pop();
console.log(removido);

console.log(array);

// Insere o elemento no começo do array
array.unshift(12);

console.log(array);

// Remove do começo
array.shift();

console.log(array);

// Deleta elemento e o local fica vazio 'undefined'
delete array[2];

console.log(array);
console.log(array[2]);

// acessar indice que não existe retorna 'undefined'
console.log(array[51651]);

// Fatiar array
console.log(array.slice(0, 4));

console.log(array.slice(0, -2));


// Array é um objeto indexado
console.log(typeof array);

// Verificar se é um array
console.log(array instanceof Array);


// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
