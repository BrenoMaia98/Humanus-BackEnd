const mongoose = require("mongoose");

const LogoSchema = new mongoose.Schema({
    tipo: String,
    thumbnail: String,
});

module.exports = mongoose.model("LogoSchema", LogoSchema);