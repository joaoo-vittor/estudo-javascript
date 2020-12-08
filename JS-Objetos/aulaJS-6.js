// Aula 6

// Manipulando Prototypes
/* 
const objA = {
  chaveA: 'A',
  // __proto__: Object.prototype
};


const objB = {
  chaveB: 'B',
  // __proto__: objA
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(objB.chaveA);
*/


// ##############################################


function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (desc) {
  this.preco = this.preco - (this.preco * (desc / 100));
}

Produto.prototype.aumenta = function (desc) {
  this.preco = this.preco + (this.preco * (desc / 100));
}

const p1 = new Produto('camiseta', 50);

const p2 = {
  nome: 'caneca',
  preco: 15
};

Object.setPrototypeOf(p2, Produto.prototype);
p2.aumenta(10);


const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  },
});

p3.aumenta(10);
console.log(p3);


