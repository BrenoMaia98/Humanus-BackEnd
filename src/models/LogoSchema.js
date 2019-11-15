const mongoose = require("mongoose");

const LogoSchema = new mongoose.Schema({
    thumbnail: String
});

module.exports = mongoose.model("LogoSchema", LogoSchema);