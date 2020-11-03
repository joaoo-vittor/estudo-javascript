// Aula 15

let num1 = 9.4156;


// Aredondar o numero para baixo
let aux1 = Math.floor(num1);
console.log(aux1);

// Aredonda o numero para cima
let aux2 = Math.ceil(num1);
console.log(aux2);

// Aredonda para o mais proximo
let aux3 = Math.round(num1);
console.log(aux3);

// retorna o maior numero da sequencia
console.log(Math.max(1,2,3,4,56,461,161));

// retorna o menor numero da sequencia
console.log(Math.min(1,2,3,-4,56,461,161));

// retorna um numero aleatorio
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

// retorna o valor de pi
console.log(Math.PI);

// exponenciação
console.log(Math.pow(2, 2));
console.log(2 ** 2);

// Raiz quadrada
let num2 = 16;
console.log(num2 ** (1/2));


// ATENÇÃO DIVISÃO POR ZERO RETORNA INFINITY
console.log(100 / 0);

