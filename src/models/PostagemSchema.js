const mongoose = require('mongoose');

const PostagemSchema = mongoose.Schema({
    categoria: String,
    titulo: String,
    data: Date,
    resumo: String,
    materiaCompleta: String,
    imagem: [String],
});

module.exports = mongoose.model("PostagemSchema", PostagemSchema);