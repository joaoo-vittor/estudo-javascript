import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import { resolve } from 'path';



import homeRoutes from './src/routes/homeRoute';
import userRoutes from './src/routes/userRoute';
import tokenRoutes from './src/routes/tokenRoute';
import alunoRoutes from './src/routes/alunoRoute';
import photoRoutes from './src/routes/photoRoute';


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', photoRoutes);
  }
}

export default new App().app;
