// Aula 1

// Criando Classes

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} esta falando.`);
  }

}

const p1 = new Pessoa('João', 'Silva');
console.log(p1);
p1.falar();

