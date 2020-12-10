// Aula 2

// Getters e setters
//  Symbol
const __velocidade = Symbol('velocidade');

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[__velocidade] = 0;
  }

  get velocidade() {
    return this[__velocidade];
  }

  set velocidade(valor) {
    if (typeof valor !== 'number') return;
    if (valor >= 100 || valor <= 0) return;
    this[__velocidade] = valor;
  }

  acelerar() {
    if (this[__velocidade] >= 100) return;
    this[__velocidade]++;
  }

  freiar() {
    if (this[__velocidade] <= 0) return;
    this[__velocidade]--;
  }

}

// const c1 = new Carro('Fusca');

// for (let i = 0; i < 102; i++) {
//   c1.acelerar();
// }

// c1.velocidade = 99;
// console.log(c1.velocidade);


// ###############################################

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor.shift();
    this.sobrenome = valor.join(' ');
  }

}


const p1 = new Pessoa('joao', 'silva');

p1.nomeCompleto = 'Vitor barbosa';
console.log(p1.nomeCompleto);




