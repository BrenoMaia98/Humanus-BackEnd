const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const app = express();
const routes = require('./routes');

cors = require('cors');

app.use(cors());
app.use(function (req, res, next) {

    //to allow cross domain requests to send cookie information.
    res.header('Access-Control-Allow-Credentials', true);

    // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
    res.header('Access-Control-Allow-Origin', req.headers.origin);

    // list of methods that are supported by the server
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');

    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN');

    next();
});
mongoose.Promise = global.Promise;
mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => { console.log("Conectado com sucesso ao banco de dados.") },
    err => { console.log("Erro ao conectar-se ao banco") }
);

app.use(express.json());


app.use(routes);
app.listen(5624, ()=>{console.log("Servidor iniciado em 5624.")});