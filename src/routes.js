const { Router } = require('express');
const VeiculoController = require('./controllers/VeiculoController');
const SearchController = require('./controllers/SearchController');
const LocationController = require('./controllers/LocationController');
const LoginController = require('./controllers/LoginController');

const routes = Router();

routes.get('/veiculos', VeiculoController.index);
routes.post('/veiculos', VeiculoController.store);

//Procurar por um termo
routes.get('/search', SearchController.index);

//autenticar motorista
routes.get('/autenticar', LoginController.index);

routes.put('/locations/:id', LocationController.update);

module.exports = routes;