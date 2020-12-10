// Aula 8

// Polimorfismo

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(`Saldo insuficiente: R$${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  console.log(`Valor: R$${valor} sacado.\nSaldo: R$${this.saldo}`);
}

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  console.log(`Valor: R$${valor} depositado.\nSaldo: R$${this.saldo}`);
}

Conta.prototype.verSaldo = function () {
  console.log(`Ag: ${this.agencia}\nCont: ${this.conta}\nSaldo: R$${this.saldo}`);
}



function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if ((this.saldo + this.limite) < valor) {
    console.log(`Saldo insuficiente: ${this.saldo}`);
    return;
  }

  this.saldo -= valor;
  console.log(`Valor: R$${valor} sacado.\nSaldo: R$${this.saldo}`);
}



function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


const conta1 = new ContaCorrente(111, 222, 0, 100);
conta1.depositar(10);
conta1.sacar(90);
conta1.sacar(30);

console.log('\n');

const conta2 = new ContaPoupanca(222, 111, 100);
conta2.depositar(10);
conta2.sacar(90);
conta2.sacar(20);
conta2.sacar(10);


