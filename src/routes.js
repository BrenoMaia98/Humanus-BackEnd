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
const Imagens = require('./controllers/Imagens');

const routes = express.Router();
const upload = multer(uploadConfig);

//Session
routes.post('/Session/create', Session.store);
routes.post('/Session/login', Session.show);
routes.post('/Session', Session.index);
routes.delete('/Session', Session.deleteAll);
routes.put('/Session', Session.update);

//ServicosProjetos
routes.post('/ServicosProjetos/create', ServicosProjetos.store);
routes.get('/ServicosProjetos/list', ServicosProjetos.index);
routes.put('/ServicosProjetos/update', ServicosProjetos.update);
routes.post('/ServicosProjetos/delete', ServicosProjetos.destroy);

//WhatsApp
routes.post('/WhatsApp/register', WhatsApp.store);
routes.post('/WhatsApp/show', WhatsApp.show);
routes.post('/WhatsApp/update', WhatsApp.update);

//Logo
routes.post('/Logo/register', upload.single('thumbnail'), Logo.store);
routes.put('/Logo/update', upload.single('thumbnail'), Logo.update);
routes.get('/Logo/index/:tipo', upload.single('thumbnail'),Logo.index);
//routes.delete('/Logo/delete',upload.single('thumbnail'), Logo.destroy);

//FotoGestão
routes.post('/Gestao/register', upload.single('thumbnail'), Gestao.store);
routes.put('/Gestao/update', upload.single('thumbnail'), Gestao.update);
routes.get('/Gestao/index', Gestao.index);

//Postagem
routes.post('/Postagem/create', upload.array('thumbnail'), Postagem.store);
routes.get('/Postagem/list/:pag/:categoria', Postagem.index);
routes.put('/Postagem/update', upload.array('thumbnail'), Postagem.update);
routes.get('/Postagem/all', Postagem.listAll);
routes.delete('/Postagem/delete/:_id', Postagem.delete);

//Contato
routes.post('/Email/send', Contato.send);

//Imagem
routes.get('/Image/:filename', Imagens.getImage);


module.exports = routes;