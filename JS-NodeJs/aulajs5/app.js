const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./module/escrever');
const ler = require('./module/ler');


// const pessoas = [
//   { nome: 'joao', idade: 22 },
//   { nome: 'klayton', idade: 20 },
//   { nome: 'marcelo', idade: 19 },
//   { nome: 'mateus', idade: 21 },
// ];

// const json = JSON.stringify(pessoas, '', 1);

// escreve(caminhoArquivo, json);

async function lerArq(caminho) {
  const dados = await ler(caminho);
  // return dados;
  mostraDados(dados);
}

function mostraDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach(element => {
    console.log(element);
  });
}

lerArq(caminhoArquivo);

// lerArq(caminhoArquivo)
//   .then(dados => {
//     console.log(dados);
//   })
//   .catch(err => {
//     console.log(err);
//   })
