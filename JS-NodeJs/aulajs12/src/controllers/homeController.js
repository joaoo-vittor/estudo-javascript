exports.paginaInicial = (req, resp) => {
  resp.render('index');
};

exports.trataPost = (req, resp) => {
  resp.send('Sou sua nova rota de POST');
};
