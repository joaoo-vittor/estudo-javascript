// Aula 8

// Funções Fabrica (Factory Functions)

function criaPessoa(nome, sobrenome, alt, pe) {
  return {
    nome, 
    sobrenome,
    // getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'sobre NADA') {
      return `${this.nome} está falando ${assunto}.`;
    },

    altura: alt,
    peso: pe,
    // getter obter o valor de imc

    get imc() {
      const IMC = this.peso / (this.altura ** 2);
      return IMC.toFixed(2);
    }
  };
}

const p1 =  criaPessoa('joao', 'silva', 1.88, 122);

// console.log(p1);
p1.nomeCompleto = 'Maria Oliveira Silva';
console.log(p1.nomeCompleto);


