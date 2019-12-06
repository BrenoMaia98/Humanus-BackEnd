const mongoose = require('mongoose');

const File = new mongoose.Schema({
    nome: String,
    path: String,
});

module.exports = mongoose.model("File", File);