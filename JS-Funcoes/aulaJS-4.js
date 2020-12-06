// Aula 4

// Escopo Lexico

const nome = 'João';

function falaNome() {
  // const nome = 'Vitor';
  console.log(nome);
}

function usaFalaNome() {
  // const nome = 'Vitor';
  falaNome();
}

usaFalaNome();

