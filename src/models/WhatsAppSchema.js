const mongoose = require("mongoose");

const WhatsAppSchema = new mongoose.Schema({
    numero: String,
});

module.exports = mongoose.model("WhatsAppSchema", WhatsAppSchema);