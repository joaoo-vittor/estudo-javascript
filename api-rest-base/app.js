import dotenv from 'dotenv';
dotenv.config();

import './src/database';

import express from 'express';
import { resolve } from 'path';


import homeRoutes from './src/routes/homeRoute';


class App {
  constructor() {
    this.app = express();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/', homeRoutes);
  }
}

export default new App().app;
