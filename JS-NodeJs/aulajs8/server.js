const express = require('express');
const app = express();


// tratar dados do body da requisição
app.use(
  express.urlencoded({ extended: true })
);


// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET     PUT   DELETE

//  Express - req.params, req.query e req.body

/*
                            ||-> a (?) é de uma queryString
  http://site/profiles/12345?campanha=ads&nome_campanha=qlqr

*/


app.get('/', (request, response) => {
  response.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nomeInput">
  <button>Enviar Formulario</button>
  </form>
  `);
});


//               : -> receber params e o ? diz que o param é opcional
app.get('/testes/:idUsuario?/:prametro?', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  // res.send(req.params);
  res.send(req.query);
});


app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que voce me enviou foi: ${req.body.nomeInput}`);
});


app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Server na porta 3000');
});

