// Aula 7

const nome = 'João Vitor';
const sobrenome = 'Barbosa';
const idade = 22;
const peso = 131;
const altura = 1.88;
let indiceMassaCorporal;
let anoDeNascimento;

indiceMassaCorporal = peso / (altura * altura);
anoDeNascimento = 2020 - idade;

console.log(nome + ' ' + sobrenome, 'tem', idade, 'anos, pesa', peso, 'Kg');
console.log(`tem ${altura} de ${altura} e seu Indice Massa Corporal é de ${indiceMassaCorporal}`);
console.log(nome, 'nasceu em', anoDeNascimento);
