exports.paginaInicial = (req, resp, next) => {
  // req.session.usuario = { nome: 'João', logado: true };
  // console.log(req.session.usuario);
  // req.flash('info', 'Olá mundo!');
  console.log(req.flash('info'));
  resp.render('index');
};

exports.trataPost = (req, resp, next) => {
  resp.send(req.body);
  return; // para acabar a função aqui
};
