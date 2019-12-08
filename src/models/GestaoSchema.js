const mongoose = require('mongoose');

const GestaoSchema = new mongoose.Schema({
    thumbnail: String,
    tipo: String
});

module.exports = mongoose.model("GestaoSchema", GestaoSchema);