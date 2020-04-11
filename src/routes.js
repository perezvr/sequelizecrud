// Router é o responsavel pelo gerenciamento de rotas do express
import { Router } from 'express';
// Importando o model a ser utilizado pela rota
import UserController from './app/controllers/UserController';

// Criando o objeto das rotas diretamente do Router do express
const routes = new Router();

// Criando as rotas
routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.delete);

// Deixando somente as rotas visíveis para outros arquivos
export default routes;
