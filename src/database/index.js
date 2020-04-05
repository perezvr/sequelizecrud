import Sequelize from 'sequelize';

//Importação de todas os models
import User from '../app/models/User'

import databaseConfig from '../config/database';

//Criação de um array com todos os models
const models = [User];

class Database {
  constructor() {
    this.init();
  }
  //Método responsável pela conexão com o banco de dados e carregamento dos models
  init() {
    //Essa variavél esperada pelos métodos init dos models (Necessário passar os dados da conexão com banco)
    this.connection = new Sequelize(databaseConfig);
    //Percorrendo todos os elementos do array
    models.map( model => model.init(this.connection));
  }
}

export default new Database();