// Isso não será usado assim
// Foi somente um teste para verificar
// a conexão na base de dados
// const HomeModel = require('../models/HomeModels');
// HomeModel.create({
//   titulo: 'Um titulo de Teste',
//   descricao: 'Uma Descricao de Teste'
// })
//   .then(dados => {
//     console.log(dados);
//   })
//   .catch(err => {
//     console.log(err);
//   });

exports.paginaInicial = (req, resp, next) => {
  // console.log('Respondendo o cliente!');
  resp.render('index');
  // console.log(`'Pagina incial' Olha o que tem na req.session.nome: ${req.session.nome}`);
  // next();
};

exports.trataPost = (req, resp, next) => {
  resp.send(req.body);
  return; // para acabar a função aqui
};
