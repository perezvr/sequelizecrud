//Router é o responsavel pelo gerenciamento de rotas do express
import { Router } from 'express';
//Importando o model a ser utilizado pela rota
import User from './app/models/User';

//Criando o objeto das rotas diretamente do Router do express
const routes = new Router();

//Criando as rotas
routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Renan Perez',
    email: 'perez.vr@gmail.com',
    password_hash: 'rererere',
  });

  return res.json(user);
});

//Deixando somente as rotas visíveis para outros arquivos
export default routes;