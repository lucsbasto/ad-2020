import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

class App {
  constructor() {
    this.server = express();
    this.midlewares();
    this.routes();
  }

  midlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
