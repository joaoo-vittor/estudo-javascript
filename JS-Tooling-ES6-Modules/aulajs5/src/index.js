// Cirrigir o erro do regenerator não executar promise-async-await
// imports para corrigir erro em navegadores antigos
import 'regenerator-runtime/runtime';
import 'core-js/stable';

import executa  from './modules/promises';

import './assets/css/style.css';

executa();
