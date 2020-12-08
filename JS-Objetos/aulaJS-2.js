// Aula 2

// Object.defineProperty() e Object.defineProperties()

function Produto(nome, preco, estoque) {

  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    value: estoque, // valor da chave
    writable: true, // o valor pode ser alterado ou não
    configurable: false, // reconfiguravel
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, // mostra a chave
      value: nome, // valor da chave
      writable: true, // o valor pode ser alterado ou não
      configurable: true, // reconfiguravel
    },
    preco: {
      enumerable: true, // mostra a chave
      value: preco, // valor da chave
      writable: true, // o valor pode ser alterado ou não
      configurable: true, // reconfiguravel
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
console.log(p1);
console.log(Object.keys(p1));
