const Gestao = require("../models/GestaoSchema");
const fs = require("fs");
const path = require('path');

module.exports = {
    async store(req, res) {
        const { filename } = req.file;
        const fotoGestao = await Gestao.findOne({ tipo: "fotoGestao" });
        if (!fotoGestao) {
            const image = await Gestao.create({ thumbnail: filename, tipo: "fotoGestao" });
            res.json(image);
        } else {
            const pasta = path.resolve(__dirname, '..', '..', 'uploads', `${filename}`);
                await fs.unlink(pasta, function (error) {
                    if (error) {
                        throw error;
                    }
                });
            res.json({ isError: true, message: `A imagem já existe! Apenas atualize.` });
        }
    },

    async update(req, res) {
        try {
            const { filename } = req.file;
            const tipo = "fotoGestao";
            const atual = await Gestao.findOne({ tipo });
            
            if (atual) {
                const pasta = path.resolve(__dirname, '..', '..', 'uploads', `${atual.thumbnail}`);
                await fs.unlink(pasta, function (error) {
                    if (error) {
                        throw error;
                    }
                });
                const nova = await Gestao.updateOne(
                    {thumbnail: atual.thumbnail},
                    { $set: { thumbnail: filename, tipo } },
                    { upsert: false }
                );
                res.json({ isError: false, message: "Imagem atualizada", nova });
            } else {
                const pasta = path.resolve(__dirname, '..', '..', 'uploads', `${filename}`);
            await fs.unlink(pasta, function (error) {
                if (error) {
                    throw error;
                }
            });
                res.json({ isError: true, message: "Imagem inexistente" });
            }
        } catch (message) {
            res.json({ isError: true, message });
        }
    },

    async index(req, res) {
        const fotoGestao = await Gestao.findOne({ tipo: "fotoGestao" });
        if (!fotoGestao) {
            res.json({ isError: true, message: `A imagem da FotoGestão não existe! Insira antes.` });
        } else {
            res.json({ isError: false, url: req.file, fotoGestao });
        }
    },
}