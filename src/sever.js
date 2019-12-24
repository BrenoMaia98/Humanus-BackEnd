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
mongoose.connect('mongodb://Vini:WpjLjk19IHcQCnDk@cluster0-shard-00-00-dixbc.mongodb.net:27017,cluster0-shard-00-01-dixbc.mongodb.net:27017,cluster0-shard-00-02-dixbc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(res => console.log("Connected to DB"))
    .catch(err => console.log(err))

app.use(express.json());


app.use(routes);
app.listen(3333);