// Aula 7

// Herança

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
}

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
}

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aumento = function (percento) {
  this.preco = this.preco + (this.preco * (percento / 100));
}

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  
  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== 'number') return;
      estoque = valor;
    }
  });

}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;



const produto = new Produto('Generico', 111);
const camiseta = new Camiseta('Regata', 25, 'vermelha');
const caneca = new Caneca('caneca', 15, 'porcelana', 10);



camiseta.aumento(100);

console.log(camiseta);
console.log(caneca.estoque);
console.log(produto);


