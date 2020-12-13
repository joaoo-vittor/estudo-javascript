const express = require('express');
const app = express();

// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST   GET     PUT   DELETE


app.get('/', (request, response) => {
  response.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar!</button>
  </form>
  `);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulario');
});

app.get('/contato', (req, res) => {
  res.send('Pagina de CONTATO')
});



app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Server na porta 3000');
});

