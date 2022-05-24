const express = require('express');

const routes = express.Router();

const Usuario = require('./controllers/usuarios.controllers')
const Produto = require('./controllers/produto.controllers')

routes.get('/', Usuario.index);

//Rotas Usuários
routes.post('/api/Usuarios', Usuario.create);
routes.get('/api/Usuarios', Usuario.index);
routes.get('/api/Usuarios.details/:_id', Usuario.details);
routes.delete('/api/Usuarios/:_id', Usuario.delete);
routes.put('/api/Usuarios', Usuario.update);

//Rotas Produtos
routes.post('/api/produtos', Produto.create);
routes.get('/api/produtos', Produto.index);
routes.get('/api/produtos.details/:_id', Produto.details);
routes.delete('/api/produtos/:_id', Produto.delete);
routes.put('/api/produtos', Produto.update);

module.exports = routes;