// const nome = 'João';
// const sobrenome = 'Silva';

// const nomeCompleto = () => {
//   return nome + ' ' + sobrenome;
// }

// // dentro do objeto exports é o que vai ser exportado
// // console.log(module);


// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.nomeCompleto = nomeCompleto;


// // console.log(module.exports);


// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.nomeCompleto = nomeCompleto;
// this.qualquerCoisa = 'mandar o que eu quiser';

// console.log(module.exports);

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

// exports.Pessoa = Pessoa;

module.exports = {
  Pessoa
}
