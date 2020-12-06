// Aula 9

// Funcao Construtora (Constructor Functions)

function Pessoa(nome, sobrenome) {
  // Atributos ou metodos publicos
  const ID;
  const metodoInterno = function () {
    
  }

  // Atributos ou metodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function () {
    console.log(this.nome + ' Sou um metodo');
  }

}

const p1 = new Pessoa('joao', 'silva');
const p2 = new Pessoa('maria', 'oliveira');

p1.metodo();
console.log(p1.nome);

