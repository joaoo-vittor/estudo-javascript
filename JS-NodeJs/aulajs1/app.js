// const modulo = require('./modulo');
// const nomeCompleto = require('./modulo').nomeCompleto;

// const { nome, sobrenome, nomeCompleto } = require('./modulo');
// console.log(nomeCompleto());

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./modulo');


const p1 = new Pessoa('joao');
console.log(p1);


// axios('http://www.otaviomiranda.com.br/files/json/pessoas.json')
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.log(error);
//   })

