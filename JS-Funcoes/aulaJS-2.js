// Aula 2

// Parametros da função

// A function tem a variavel aguments que sutenta todos os argumentos enviados.
function funcao() {
  let total = 0;
  for (arg of arguments) {
    total += arg;
  }
  console.log(total);
}

// funcao(1, 2, 3, 4, 5, 6); 

// ########################################

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}

// funcao2(1, 2, 3); 


// ########################################


function soma(a, b = 2, c = 4) {
  // b = b || 0;
  console.log(a + b + c);
}

// soma(2, undefined, 20);

// #########################################

// atribuiçao via desestruturação objeto
function nSI({nome, sobrenome, idade}) {
  console.log(nome, sobrenome, idade);
}

let obj = {nome: 'Joao', sobrenome: 'Silva', idade: 22};
// nSI(obj);

// nSI({nome: 'Joao', sobrenome: 'Silva', idade: 22});

// #########################################

// atribuiçao via desestruturação array
function nSIArr([nome, sobrenome, idade]) {
  console.log(nome, sobrenome, idade);
}

// nSIArr(['joao', 'silva', 22]);

// ##########################################

// rest Operator ...
function conta(operador, acumulador, ...numeros) {
  for (let num of numeros) {
    if (operador === '+') acumulador += num;
    if (operador === '-') acumulador -= num;
    if (operador === '/') acumulador /= num;
    if (operador === '*') acumulador *= num;
  }
  console.log(acumulador);
}

// conta('+', 1, 20, 30, 40, 50);


// ########################################

const conta2 = function (operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
}

// conta2('+', 1, 20, 30, 40, 50);

// ##########################################

const conta3 = (...args) => {
  console.log(args);
}

conta3('+', 1, 20, 30, 40, 50);

