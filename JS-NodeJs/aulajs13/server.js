const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');
const { middlewareGlobal, outroMiddlewareGlobal } = require('./src/middlewares/middleware');


// tratar dados do body da requisição
app.use(
  express.urlencoded({ extended: true })
);

// Conteudo estatico
app.use(express.static(path.resolve(__dirname, 'public')));


// utilizando views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// usando nossos middleware
app.use(middlewareGlobal);
app.use(outroMiddlewareGlobal);

// utilizando o modulo com as nossas rotas
app.use(routes);


app.listen(3000, () => {
  console.log('http://localhost:3000');
  console.log('Server na porta 3000');
});

