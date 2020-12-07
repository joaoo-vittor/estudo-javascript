// Aula 5

// Map

// Dobre os numeros
const numeros = [1, 6, 8, 3, 2, 22, 19, 64, 15, 4, 48, 55, 17, 35, 48];

const novoArray = numeros.map(valor => {
  return valor * 2;
})

// console.log(novoArray);

// Para cada elemento:
// Retorne apenas uma String com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave ID em cada objeto
const pessoas = [
  { nome: 'jose', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const apenasNome = pessoas.map(obj => {
  return obj.nome;
});

// console.log(apenasNome);

// const removeChaveNome = pessoas.map(obj => {
//   // delete obj.nome;
//   return { idade: obj.idade }
// });

const removeChaveNome = pessoas.map(obj => ({ idade: obj.idade }));

// console.log(removeChaveNome);

const comIds = pessoas.map((obj, indice) => {
  const newObj = {...obj};
  newObj.id = Math.floor((indice + 1) * Math.PI);
  
  return newObj;
});

console.log(pessoas);
console.log(comIds);
