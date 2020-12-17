const Contato  = require('../models/ContatoModels');

exports.index = async (req, resp) => {
  const contatos = await Contato.buscaContato();
  resp.render('index', { contatos });
};
