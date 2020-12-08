// Aula 4

// Metodos úteis para objetos

/*

Object.values
Object.entries
Object.assign(des, any)
Object.getOwnPropertyDescriptor(o, 'prop')
... (spread)

Object.keys (retorna as chaves)
Object.freeze (congela o objeto)
Object.defineProperties (define várias propriedades)
Object.defineProperty (define uma propriedade)

*/

// const produto = { nome: 'caneca', preco: 15.99 };
// referencia para o mesmo obj

// copiando
// const outroProd = { ...produto, material: 'porcelana' };
// const outroProd = Object.assign({}, produto, { material: 'porcelana' });
// const outroProd = { nome: produto.nome, preco: produto.preco };

// produto.nome = 'outro nome';
// produto.preco = 1531;

// console.log(produto);
// console.log(outroProd);

// ######################################


const produto = { nome: 'caneca', preco: 15.99, material: 'Porcelana' };
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// console.log(Object.values(produto));
// console.log(Object.entries(produto));

for (let [chave, valor] of Object.entries(produto)) {
  console.log(chave, valor);
}

