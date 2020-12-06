// Aula 5

// Closures - Habilidade que a função tem em acessar seu escopo lexico

function retornaFuncao(nome) {
  return function () {
    return nome;
  }
}

const funcao = retornaFuncao('joao');
const funcao2 = retornaFuncao('joao');

console.log(funcao);
