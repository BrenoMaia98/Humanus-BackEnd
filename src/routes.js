const express = require('express');
const multer = require('multer');
const uploadConfig = require('./configs/uploads');

const ServicosProjetos = require('./controllers/ServicosProjetosController');
const Session = require('./controllers/SessionController');
const WhatsApp = require('./controllers/WhatsAppControler');

const routes = express.Router();
const upload = multer(uploadConfig);

//Session
routes.post('/Session/create', Session.store);
routes.get('/Session/login', Session.show);
//ServicosProjetos
routes.post('/ServicosProjetos/create', ServicosProjetos.store);
routes.get('/ServicosProjetos/list', ServicosProjetos.index);
routes.put('/ServicosProjetos/update', ServicosProjetos.update);
routes.delete('/ServicosProjetos/delete', ServicosProjetos.destroy);
//WhatsApp
//routes.post('/WhatsApp/register', WhatsApp.store);
routes.get('/WhatsApp/show', WhatsApp.show);
routes.put('/WhatsApp/update', WhatsApp.update);
module.exports = routes;