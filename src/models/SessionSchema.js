const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    usuario: String,
    senha: String,
});

module.exports = mongoose.model("SessionSchema",SessionSchema);