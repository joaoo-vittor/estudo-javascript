// Aula 19

/*

Primitivos (imutáveis) -> string, number, boolean, undefined, null (bigint, symbol)

-> Valores Cópiados

*/

let nome = 'João';
nome[0] = 'B';
console.log(nome[0], nome);


let a = 'A';
let b = a; // Cópia

console.log(a, b);

a = 'Outro valor';

console.log(a, b);


/*

Referência (mutaveis) -> array, object, function

-> Passado por referência

*/

let c = [1, 2, 3];
let d = c;
// Fazer uma copia (spred)
let e = [...c];

console.log(c, d);

c.push(4);

console.log(c, d);

d.pop();
c.pop();

console.log(c, d);

console.log(e);

// Object

const pessoa1 = {
  nome: 'Joao',
  sobrenome: 'Silva'
}

const pessoa2 = pessoa1;
const pessoa3 = {...pessoa1};

pessoa1.nome = 'Vitor';

console.log(pessoa2);
console.log(pessoa3);
