const mongoose = require('mongoose');

const GestaoSchema = new mongoose.Schema({
    thumbnail: String
});

module.exports = mongoose.model("GestaoSchema", GestaoSchema);