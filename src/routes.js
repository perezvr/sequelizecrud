//Router é o responsavel pelo gerenciamento de rotas do express
import { Router } from 'express';

//Criando o objeto das rotas diretamente do Router do express
const routes = new Router();

//Criando as rotas
routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

//Deixando somente as rotas visíveis para outros arquivos
export default routes;