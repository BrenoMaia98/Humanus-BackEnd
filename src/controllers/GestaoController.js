const Gestao = require("../models/GestaoSchema");

module.exports={
    async store(req,res){
        const {filename} = req.file;
        const image = await Gestao.create({thumbnail:filename});
        res.json(image);
    },

    async update(req, res){
        const {filename} = req.file;
        await Gestao.update({thumbnail:filename});
        res.json({message:"Imagem atualizada"});
    },

    async index(req, res){
        const gestao = await Gestao.find({});
        res.json(gestao);
    }
}