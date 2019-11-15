const Postagem = require('../models/PostagemSchema');

module.exports = {
    async store(req, res){
        const {categoria, titulo, data, resumo, materiaCompleta} = req.body;
        const {filename} = req.file;
        const X = await Postagem.findOne({}).sort({num: -1});
        const post = await Postagem.create({
            num: X.num+1,
            categoria, 
            titulo, 
            data, 
            resumo, 
            materiaCompleta , 
            thumbnail: filename
        });
        res.json(post);
    },

    async index(req, res){
        const {pg} = req.body;
        const X = await Postagem.findOne({}).sort({num: -1});
        const MAX= X.num + (10-10*pg);
        const MIN=MAX-9;
        console.log(MIN);
        console.log(MAX);
        const posts = await Postagem.find({num:{$gte:MIN}}).limit(10);
        res.json(posts);
    },

    async update(req, res){
        const {categoria, titulo, data, resumo, materiaCompleta, _id} = req.body;
        const {filename} = req.file;
        const edita = await ServicosProjetos.updateOne(
            {_id},
            {$set:{categoria, titulo, data, resumo, materiaCompleta, thumbnail:filename}}, 
            {upsert:false}
            );
        res.json(edita);
    },

    async destroy(req,res){
        const {_id} = req.body;
        await Postagem.deleteMany({_id});
        res.json({message: "Postagem deletada"}); 
    }
}