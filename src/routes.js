const express = require('express');
const multer = require('multer');
const uploadConfig = require('./configs/uploads');

const ServicosProjetos = require('./controllers/ServicosProjetosController');
const Session = require('./controllers/SessionController');

const routes = express.Router();
const upload = multer(uploadConfig);

//Session
routes.post('/Session/create', Session.store);
routes.get('/Session/login', Session.show);
//ServicosProjetos
routes.post('/ServicosProjetos/create', ServicosProjetos.store);
routes.get('/ServicosProjetos/list', ServicosProjetos.index);
routes.put('/ServicosProjetos/update', ServicosProjetos.update);

module.exports = routes;