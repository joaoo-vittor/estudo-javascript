import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import cors from 'cors';
import helemt from 'helmet';
import { resolve } from 'path';


import homeRoutes from './src/routes/homeRoute';
import userRoutes from './src/routes/userRoute';
import tokenRoutes from './src/routes/tokenRoute';
import alunoRoutes from './src/routes/alunoRoute';
import photoRoutes from './src/routes/photoRoute';


const whiteList = [
  'http://localhost:3000',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};


class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors(corsOptions));
    this.app.use(helemt());
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
