const mongoose = require('mongoose');

const ContatoSchema = new mongoose.Schema({
    email: String,
    tema: String,
    texto: String,
});

module.exports = mongoose.model("ContatoSchema", ContatoSchema);