const Logo = require("../models/LogoSchema");
const fs = require("fs");
const path = require('path');

module.exports={
    async store(req,res){
        const {filename} = req.file;
        const image = await Logo.create({thumbnail:filename});
        res.json(image);
    },

    async update(req, res){
        const {filename} = req.file;
        const atual = await Logo.findOne({});
        if(atual.thumbnail != filename){
            const pasta = path.resolve(__dirname, '..', '..', 'uploads',`${atual.thumbnail}`);
            await fs.unlink(pasta, function(error) {
                if (error) {
                    throw error;
                }
            });
        }
        await Logo.updateOne({thumbnail:filename});
        res.json({message:"Imagem atualizada"});
    },

    async index(req, res){
        logo = await Logo.find({});
        res.json({url:req.file, logo});
    },
    async destroy(req, res){
        await Logo.deleteMany({});
        res.json({message: "deletado"});
    }

}

