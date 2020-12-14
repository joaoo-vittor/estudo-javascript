exports.paginaInicial = (req, resp) => {
  resp.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nomeInput">
  <button>Enviar Formulario</button>
  </form>
  `);
};

exports.trataPost = (req, resp) => {
  resp.send('Sou sua nova rota de POST');
};
