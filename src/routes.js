const express = require('express');
const multer = require('multer');
const uploadConfig = require('./configs/uploads');

const ServicosProjetos = require('./controllers/ServicosProjetosController');
const Session = require('./controllers/SessionController');
const WhatsApp = require('./controllers/WhatsAppControler');
const Logo = require('./controllers/LogoController');
const Gestao = require('./controllers/GestaoController');
const Postagem = require('./controllers/PostagemController');

const routes = express.Router();
const upload = multer(uploadConfig);

//Session
routes.post('/Session/create', Session.store);
routes.get('/Session/login', Session.show);
//ServicosProjetos
routes.post('/ServicosProjetos/create', ServicosProjetos.store);
routes.get('/ServicosProjetos/list', ServicosProjetos.index);
routes.post('/ServicosProjetos/update', ServicosProjetos.update);
routes.delete('/ServicosProjetos/delete', ServicosProjetos.destroy);
//WhatsApp
//routes.post('/WhatsApp/register', WhatsApp.store);
routes.get('/WhatsApp/show', WhatsApp.show);
routes.post('/WhatsApp/update', WhatsApp.update);
//Logo
//routes.post('/Logo/register', upload.single('thumbnail'), Logo.store);
routes.post('/Logo/update', upload.single('thumbnail'), Logo.update);
routes.get('/Logo/index', Logo.index);

//FotoGestão
//routes.post('/Gestao/register', upload.single('thumbnail'), Gestao.store);
routes.post('/Gestao/update', upload.single('thumbnail'), Gestao.update);
routes.get('/Gestao/index', Gestao.index);
//Postagem
routes.post('/Postagem/create', upload.single('thumbnail'), Postagem.store);
routes.get('/Postagem/list', Postagem.index);
routes.post('/Postagem/update', Postagem.update);
routes.delete('/Postagem/delete', Postagem.destroy);
//Contato



module.exports = routes;