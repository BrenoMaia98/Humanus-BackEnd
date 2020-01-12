const mongoose = require("mongoose");

const EmailSchema = new mongoose.Schema({
    email: String,
});

module.exports = mongoose.model("EmailSchema", EmailSchema);