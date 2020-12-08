// Aula 3

// Getters e Setters

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: false, // reconfiguravel
    get: function () {
      return estoquePrivado;
    },
    set: function (valor) {
      if (typeof valor !== 'number') {
        throw new TypeError('Valor invalido!');
      }
      estoquePrivado = valor;
    }
  });
}


// const p1 = new Produto('Camiseta', 20, 3);
// console.log(p1);
// p1.estoque = '55';
// console.log(p1.estoque);


function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa', '');
      nome = valor;
    }
  };
}

const p2 = criaProduto('camiseta');
p2.nome = 'Qualquer coisa';
console.log(p2.nome);



