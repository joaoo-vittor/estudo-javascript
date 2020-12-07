// Aula 1

// Revisão de Array
// index =>        0         1        2
// const nomes = ['Eduardo', 'Maria', 'Joana'];

// const nomes = new Array('Eduardo', 'Maria', 'Joana');

// String, Objetos, Funções, Numeros

// nomes[2] = 'joao';
// delete nomes[2];
// console.log(nomes);

// Valores por referencia

// const nomes = ['Eduardo', 'Maria', 'Joana'];
// copia com spredOperator ...
// const novo = [...nomes];


// novo.pop();
// console.log(nomes);
// console.log(novo);
// console.log(nomes.length);

// const nremovido = nomes.pop();
// const nremovido = nomes.shift();
// console.log(nomes, nremovido);

// nomes.push('joao');
// nomes.unshift('Jose');
// console.log(nomes);
//                0         1          2        3       4
// const nomes = [ 'Jose', 'Eduardo', 'Maria', 'Joana', 'joao' ];
// const novo = nomes.slice(1, 3);

// console.log(novo);

// const nome = 'joao vitor silva';
// const nomes = nome.split(' ');

const nomes = [ 'joao', 'vitor', 'silva' ];
const nome = nomes.join(' ');

console.log(nome);

