// Aula 3

// Herança Com Classes

class DipositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' ligado');
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' desligado');
      return;
    }

    this.ligado = false;
  }

}


class SmartPhone extends DipositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DipositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    console.log('Voce alterou o metodo ligar.');
  }

}


const s1 = new SmartPhone('iPhone', 'Preto', '10x');
// console.log(s1);

const t1 = new Tablet('iPad', true);
t1.ligar();
console.log(t1);

