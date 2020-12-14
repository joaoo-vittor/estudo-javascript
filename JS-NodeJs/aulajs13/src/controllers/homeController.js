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
