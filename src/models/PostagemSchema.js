const mongoose = require('mongoose');

const PostagemSchema = mongoose.Schema({
    num: Number,
    categoria: String,
    titulo: String,
    data: Date,
    resumo: String,
    materiaCompleta: String,
    thumbnail: [String],
});

module.exports = mongoose.model("PostagemSchema", PostagemSchema);