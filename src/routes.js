const express = require('express');
const multer = require('multer');
const uploadConfig = require('./configs/uploads');

const ServicosProjetos = require('./controllers/ServicosProjetosController');
const Session = require('./controllers/SessionController');
const WhatsApp = require('./controllers/WhatsAppControler');
const Logo = require('./controllers/LogoController');
const Gestao = require('./controllers/GestaoController');
const Postagem = require('./controllers/PostagemController');
const Contato = require('./controllers/ContatoController');

const routes = express.Router();
const upload = multer(uploadConfig);

//Session
routes.post('/Session/create', Session.store);
routes.post('/Session/login', Session.show);

//ServicosProjetos
routes.post('/ServicosProjetos/create', ServicosProjetos.store);
routes.post('/ServicosProjetos/list', ServicosProjetos.index);
routes.post('/ServicosProjetos/update', ServicosProjetos.update);
routes.delete('/ServicosProjetos/delete', ServicosProjetos.destroy);

//WhatsApp
routes.post('/WhatsApp/register', WhatsApp.store);
routes.post('/WhatsApp/show', WhatsApp.show);
routes.post('/WhatsApp/update', WhatsApp.update);

//Logo
routes.post('/Logo/register', upload.single('thumbnail'), Logo.store);
routes.post('/Logo/update', upload.single('thumbnail'), Logo.update);
routes.post('/Logo/index', Logo.index);
routes.delete('/Logo/delete', Logo.destroy);

//FotoGestão
routes.post('/Gestao/register', upload.single('thumbnail'), Gestao.store);
routes.post('/Gestao/update', upload.single('thumbnail'), Gestao.update);
routes.post('/Gestao/index', Gestao.index);
routes.delete('Gestao/delete', Gestao.destroy);

//Postagem
routes.post('/Postagem/create', upload.single('thumbnail'), Postagem.store);
routes.post('/Postagem/list', Postagem.index);
routes.post('/Postagem/update', upload.single('thumbnail'), Postagem.update);
routes.delete('/Postagem/delete', Postagem.destroy);

//Contato
routes.post('/Email/send', Contato.send);


module.exports = routes;