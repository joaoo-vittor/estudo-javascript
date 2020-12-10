// Aula 4

// Metodos de instancia e estaticos

function teste() {
  console.log('teste');
}


class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  // Metodo de instancia
  aumeterVolume() {
    this.volume += 2;
  }

  // Metodo de instancia
  diminuirVolume() {
    this.volume -= 2;
  }

  // Metodo estatico
  static soma(a, b) {
    console.log(a + b);
  }

}

const controle = new ControleRemoto('LG');

// controle.aumeterVolume();
// controle.aumeterVolume();
// // controle.trocaPilha();

// // Chamada Do Metodo Estatico
// ControleRemoto.soma(5, 7);

// console.log(controle);

