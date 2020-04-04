import express from 'express';
import routes from './routes' ;

class App {
  constructor() {
    //Criando um objeto para utilizar as rotas do express
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    //Difinindo tipo de envio de dados pelas requisições
    this.server.use(express.json())
  }

  routes() {
    //Definindo qur o server utilizará as rotas criadas no arquivo routes.js que está sendo importando no início do arquivo
    this.server.use(routes);
  }
}

//Definindo que somente o server da classe App será visível para outras classes
export default new App().server;