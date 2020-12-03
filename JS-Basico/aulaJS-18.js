// Aula 18

// Objeto literal
/*
const pessoa1 = {
  nome: 'joao vitor',
  sobrenome: 'barbosa',
  idade: 22,
  anoNascimento: function () {
    return 2020 - this.idade;
  },
};


// console.log(pessoa1.nome);
// console.log(pessoa1.anoNascimento());

*/

// Função para criar Objeto (Factory)

// function criaPessoa(nome, sobrenome, idade) {
//   return {
//     nome: nome,
//     sobrenome: sobrenome,
//     idade: idade,
//   };
// }

// OU

function criaPessoa(nome, sobrenome, idade) {
  // não precisa repetir nome: nome etc.
  return {
    nome,
    sobrenome,
    idade,
  };
}

const pessoa1 = criaPessoa('joao vitor', 'barbosa', 22);

// console.log(pessoa1.nome);

const pessoa2 = {
  nome: 'joao vitor',
  sobrenome: 'barbosa',
  idade: 22,
  fala() {
    console.log(`${this.nome} ${this.sobrenome} esta falando...`);
  },
  anoNascimento() {
    const anoNasc = 2020 - this.idade;
    console.log(`${this.nome} nasceu em ${anoNasc}`);
  }
}

pessoa2.fala();
pessoa2.anoNascimento();
