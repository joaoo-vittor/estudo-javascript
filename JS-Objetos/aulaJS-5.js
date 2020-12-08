// Aula 5

// Prototypes

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // this.nomeCompleto = () => 'Original: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('João', 'S.');
const pessoa2 = new Pessoa('Luiz', 'O.');
const data = new Date();

console.dir(pessoa1);
console.dir(data);
