const express = require('express');
const app = express();
const routes = require('./routes');


// tratar dados do body da requisição
app.use(
  express.urlencoded({ extended: true })
);

app.use(routes);


app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Server na porta 3000');
});

