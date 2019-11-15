const express = require('express');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const app = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://Vini:22415511@cluster0-dixbc.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(30000);