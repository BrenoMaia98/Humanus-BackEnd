const mongoose = require("mongoose");

const ContatoSchema = new mongoose.Schema({
    Nome: String,
    Email: String,
    Texto: String
});

module.exports = mongoose.model("ContatoSchema", ContatoSchema);