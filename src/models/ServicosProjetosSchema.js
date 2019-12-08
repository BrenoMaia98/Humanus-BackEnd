const mongoose = require('mongoose');


const ServicosProjetosSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
});

module.exports = mongoose.model("ServicosProjetosSchema", ServicosProjetosSchema);