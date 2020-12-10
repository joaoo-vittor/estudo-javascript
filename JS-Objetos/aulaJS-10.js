// Aula 10

// Objeto Map()

const pessoas = [
  { id: 3, nome: 'Joao'},
  { id: 2, nome: 'Vitor'},
  { id: 1, nome: 'Luiz'},
];


// const novasPessoas = {};

// for (let pessoa of pessoas) {
//   const { id } = pessoa;
//   novasPessoas[id] = { ...pessoa };
// }


const novasPessoas = new Map();

for (let pessoa of pessoas) {
  const { id } = pessoa;
  novasPessoas.set(id, { ...pessoa });
}


console.log(novasPessoas);
console.log(novasPessoas.get(2));

// for (let [identifier, { id, nome }] of novasPessoas) {
//   console.log(identifier, id, nome);
// }


novasPessoas.delete(2);
console.log(novasPessoas);

