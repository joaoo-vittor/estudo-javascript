
// export const nome = 'Joao';
const nome = 'Joao';

const sobrenome = 'Silva';
const idade = 22;


// So pode exporta uma default
export function soma(x, y) {
  return x + y;
}


export { nome as default, sobrenome as ultimoNome, idade };


export class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }
}

