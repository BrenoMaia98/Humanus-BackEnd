const Gestao = require("../models/GestaoSchema");
const fs = require("fs");
const path = require('path');

module.exports={
    async store(req,res){
        const {filename} = req.file;
        await Gestao.create({thumbnail:filename});
        res.json({message: "Imagem Salva"});
    },

    async update(req, res){
        const {filename} = req.file;
        const atual = await Gestao.findOne({});
        if(atual.thumbnail != filename){
            const pasta = path.resolve(__dirname, '..', '..', 'uploads',`${atual.thumbnail}`);
            await fs.unlink(pasta, function(error) {
                if (error) {
                    throw error;
                }
            });
        }
        await Gestao.update({thumbnail:filename});
        res.json({message:"Imagem atualizada"});
    },

    async index(req, res){
        const gestao = await Gestao.find({});
        res.json(gestao);
    },

    async destroy(req, res){
        try{
        await Gestao.deleteMany({});
        res.json({message: "deletado"});
        }
        catch(e){
            console.log(e);
        }
    }
}