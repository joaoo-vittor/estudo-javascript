// Aula 1

// Revisão Objetos

/*
const pessoa = {
  nome: 'João',
  sobrenome: 'Silva'
};
*/

// ###############################

const pessoa1 = new Object();

pessoa1.nome = 'João';
pessoa1.sobrenome = 'Silva';
pessoa1.idade = 22;

// console.log(pessoa1);
// console.log(pessoa1.nome);

// delete pessoa1.nome;
// console.log(pessoa1);

pessoa1.falarNome = function () {
  return (`${this.nome} esta falando seu nome`);
}

pessoa1.dataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
}

pessoa1.falarNome();
// console.log(pessoa1.dataNascimento());

// for (let chave in pessoa1) {
//   console.log(chave);
// }

// ####################################################

// Factory Functions
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

// const p1 = criaPessoa('João', 'Silva');
// console.log(p1.nomeCompleto);

// #####################################

// Constructor Functions
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`;
  }
}

const p2 = new Pessoa('João', 'Silva');
console.log(p2.nomeCompleto());


console.log(p2);
// Travar o objeto para não ser alterado.
Object.freeze(p2);
p2.nome = 'Outra coisa';
console.log(p2);