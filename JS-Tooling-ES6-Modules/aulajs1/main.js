const nome = 'joao';
const obj = { nome };
const novoObj = { ...obj };
console.log(novoObj);
console.log('Hello World');

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

// npx babel main.js -o bundle.js --presets=@babel/env
