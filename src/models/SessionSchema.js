const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    usuario: String,
    token: String,
});

module.exports = mongoose.model("SessionSchema",SessionSchema);