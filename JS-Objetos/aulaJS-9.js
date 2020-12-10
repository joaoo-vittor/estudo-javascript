// Aula 9

// Factory Functions + Prototypes

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  }
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  }
};

const pessoasProto = {...falar, ...comer};

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoasProto, {
    nome: {
      value: nome
    },
    sobrenome: {
      value: sobrenome
    }
  });
}


const p1 = criaPessoa('joao', 'silva');
p1.falar();
console.log(p1);

