exports.paginaInicial = (req, resp, next) => {
  resp.render('index', {
    titulo: 'titulo da pagina',
    numeros: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
};

exports.trataPost = (req, resp, next) => {
  resp.send(req.body);
  return; // para acabar a função aqui
};
