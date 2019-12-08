const Postagem = require('../models/PostagemSchema');

module.exports = {
    async store(req, res) {
        const { categoria, titulo, data, resumo, materiaCompleta } = req.body;
        const AtualnumeroPostBanco = await Postagem.findOne({}).sort({ num: -1 });
        const Y = await Postagem.findOne({ categoria }).sort({ numC: -1 });
        var numeroPostBanco = 1,
            numeroPostCategoria = 1,
            filenames = [];
        req.files.forEach(file => {
            filenames.push(file.filename)
        });
        if (Y && AtualnumeroPostBanco) {
            numeroPostBanco = AtualnumeroPostBanco.num + 1;
            numeroPostCategoria = Y.numC + 1;
        }
        else {
            if (AtualnumeroPostBanco) {
                numeroPostBanco = AtualnumeroPostBanco.num + 1;
                numeroPostCategoria = 1;
            }
        }
        const post = await Postagem.create({
            num: numeroPostBanco,
            numC: numeroPostCategoria,
            categoria,
            titulo,
            data,
            resumo,
            materiaCompleta,
            thumbnail: filenames
        });
        res.json(post);
    },

    async index(req, res) {
        const { pag, categoria } = req.params;
        var cat = categoria.split('&');
        if (cat[0] !== "-") {
            var arrayPosts = [];
            cat.forEach(async categoria => {
                aux = await Postagem.findOne({ categoria });
                if (!aux) {
                    res.json({
                        isError: true,
                        message: "Categoria não existente"
                    });
                }
                else {
                    const X = await aux.sort({ numC: -1 });
                    const MAX = X.numC + (2 - 2 * pag);
                    const MIN = MAX - 1;
                    const posts = await Postagem.find({ categoria, numC: { $gte: MIN } }).limit(2);
                    arrayPosts.push(posts);
                }
            });
            res.json(arrayPosts);
        }
        else {
            const TodasPostagens = await Postagem.find({}).skip((pag - 1) * 3).limit(3).sort([["num", -1]]);
            res.json(TodasPostagens);
        }
    },

    async update(req, res) {
        const { categoria, titulo, data, resumo, materiaCompleta, _id } = req.body;
        var filenames = [];
        req.files.forEach(file => {
            filenames.push(file.filename)
        });
        const postagem = await Postagem.findOne({ _id });
        if (postagem) {
            const update = await Postagem.updateOne(
                { _id },
                { $set: { categoria, titulo, data, resumo, materiaCompleta, thumbnail: filename } },
                { upsert: false }
            )
            res.json({ isError: false, update });
        } else {
            res.json({ isError: true, message: "Não foi encontrado o registro" });
        }
    },

    async destroy(req, res) {
        const { _id } = req.body;
        await Postagem.deleteMany({ _id });
        res.json({ message: "Postagem deletada" });
    },
    
    async listAll(req, res) {
        const postagem = await Postagem.find({});
        res.json(postagem);
    }
    
}