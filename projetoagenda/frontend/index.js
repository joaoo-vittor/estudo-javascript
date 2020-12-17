import 'core-js/stable';
import 'regenerator-runtime/runtime';
import './assets/css/style.css';

import Login from './validation/Login';

const login = new Login('.form-login', '.login-input');
const cadastro = new Login('.form-cadastro', '.cadastro-input');

login.init();
cadastro.init();
