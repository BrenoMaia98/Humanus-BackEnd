const Logo = require("../models/LogoSchema");

module.exports={
    async store(req,res){
        const {filename} = req.file;
        const image = await Logo.create({thumbnail:filename});
        res.json(image);
    },

    async update(req, res){
        const {filename} = req.file;
        await Logo.update({thumbnail:filename});
        res.json({message:"Imagem atualizada"});
    },

    async index(req, res){
        logo = await Logo.find({});
        res.json(logo);
    },


}

