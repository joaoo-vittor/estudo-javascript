// Aula 4

// Filter - filtrando o Array

// Retorne os numeros maiores que 10
const numeros = [1, 6, 8, 3, 2, 22, 19, 64, 15, 4, 48, 55, 17, 35, 48];

const novoArr = numeros.filter((valor, indice, array) => {
  // console.log(valor, indice, array);
  return valor > 10;
});

// console.log(novoArr);

// for (let num of numeros) {
//   if (num > 10) {
//     novoArr.push(num);
//   }
// }


// ###############################

// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50
// retorne as pessoad cujo nome termina com a

const pessoas = [
  { nome: 'jose', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];


const nomeMaisCincoL = pessoas.filter(obj => {
  return obj.nome.length >= 5;
});

// console.log(nomeMaisCincoL);

const pessoasMaisDeCinquenta = pessoas.filter(obj => {
  return obj.idade > 50;
});

// console.log(pessoasMaisDeCinquenta);

const nomeTerminaEmA = pessoas.filter(obj => {
  // return obj.nome.toLocaleLowerCase.slice(-1) === 'a';
  return obj.nome.toLocaleLowerCase().endsWith('a');
});

console.log(nomeTerminaEmA);
