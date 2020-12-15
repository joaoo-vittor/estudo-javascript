// Variaveis de Ambiente
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const routes = require('./routes');
const path = require('path');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, outroMiddlewareGlobal, checkCsrfError, csrfMiddleware } = require('./src/middlewares/middleware');


// conexão com mongoDB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(resp => {
    // console.log('Conectei a Base de Dados');
    app.emit('Pronto');
  })
  .catch(err => {
    console.log(err);
  });


// usando o Helmet para segurança
app.use(helmet());


// tratar dados do body da requisição
app.use(
  express.urlencoded({ extended: true })
);


// Conteudo estatico
app.use(express.static(path.resolve(__dirname, 'public')));


// Configurando a sessão
const sessionOptions = session({
  secret: 't5$r4#e3@w2!q1',
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash());


// utilizando views
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');


// usando csurf para segurança dos formularios
app.use(csrf());


// usando nossos middleware
app.use(middlewareGlobal);
app.use('/', outroMiddlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);


// utilizando o modulo com as nossas rotas
app.use(routes);


app.on('Pronto', () => {
  app.listen(3000, () => {
  console.log('http://localhost:3000');
    console.log('Server na porta 3000');
  });
});

