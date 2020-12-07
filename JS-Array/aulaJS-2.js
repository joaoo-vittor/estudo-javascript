// Aula 2

// splice(indiceInicio, n°elementosRemover, elem1ADD, elem2ADD);
//               -5        -4        -3        -2      -1                    
//                0         1         2         3       4
const nomes = [ 'Jose', 'Eduardo', 'Maria', 'Joana', 'joao' ];


// remove 


// console.log(nomes);
// const nomeRemovido = nomes.splice(3, 2);

// console.log(nomeRemovido);
// console.log(nomes);


// Adiciona

console.log(nomes);

// nomes.splice(3, 0, 'marcos');
const removido = nomes.splice(3, 2, 'marcos', 'caique');
console.log(nomes);

