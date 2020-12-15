const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

// function meuMiddleware(req, res, next) {
//   req.session = { nome: 'Joao', sobrenome: 'Silva' };
//   console.log('\nPassei no seu middleware.\n');
//   next();
// }

// rotas da home
// route.get('/', meuMiddleware, homeController.paginaInicial);
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// rotas Contato
route.get('/contato', contatoController.paginaInicial);

module.exports = route;
