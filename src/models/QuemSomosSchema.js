const mongoose = require("mongoose");

const QuemSomos = new mongoose.Schema({
    fotoEquipe: String,
});

module.exports = mongoose.model("QuemSomos", QuemSomos);