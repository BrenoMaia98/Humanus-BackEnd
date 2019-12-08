const Logo = require("../models/LogoSchema");
const fs = require("fs");
const path = require('path');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const image = await Logo.create({ thumbnail: filename, tipo: req.body.tipo });
        res.json(image);
    },

    async update(req, res) {
        const { filename } = req.file;
        const { tipo } = req.body
        const atual = await Logo.findOne({ tipo });
        console.log(atual);
        if(atual){
            console.log("If, Update ");
            const pasta = path.resolve(__dirname, '..', '..', 'uploads', `${atual.thumbnail}`);
            await fs.unlink(pasta, function (error) {
                if (error) {
                    throw error;
                }
            });
            await Logo.updateOne(
                {thumbnail:atual.thumbnail},
                {$set:{ thumbnail: filename, tipo }}, 
                {upsert:false}
            );
            res.json({ isError: false, message: "Imagem atualizada" });
        }else{
            const pasta = path.resolve(__dirname, '..', '..', 'uploads', `${filename}`);
            await fs.unlink(pasta, function (error) {
                if (error) {
                    throw error;
                }
            });
            res.json({ isError: true, message: "Imagem inexistente" });
        }
    },

    async index(req, res) {
        const { tipo } = req.params;
        const logo = await Logo.findOne({ tipo });
        if(logo){
            res.json({ isError:false, url: req.file, logo });
        }else{
            res.json({ isError:true , message:`A imagem do tipo ${tipo} não existe! Insira antes.` });
        }
    },

    async destroy(req, res) {
        await Logo.deleteMany({});
        res.json({ message: "deletado" });
    }

}

