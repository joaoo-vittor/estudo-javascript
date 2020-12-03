// Aula 17

// funções

function soma(a = 0, b = 0) {
  const result = a + b;
  return result;
}

function saudacao(nome) {
  return `Boa noite ${nome}!!!`;
}

// saudacao('joão');
const resp = saudacao('vitor');
console.log(resp);


console.log(soma(15, 5));

const result = soma(2);
console.log(result);

// Função anonima

const raiz = function (num) {
  return num ** (1/2);
};

console.log(raiz(25));

// Arrow Function

// const quadrado = num => {
//   return num ** 2;
// };

// OU

const quadrado = num => num ** 2;

console.log(quadrado(2));
