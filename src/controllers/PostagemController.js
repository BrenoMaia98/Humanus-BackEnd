const Postagem = require('../models/PostagemSchema');

module.exports = {
    async store(req, res){
        const {categoria, titulo, data, resumo, materiaCompleta} = req.body;
        const {filename} = req.file;
        const X = await Postagem.findOne({}).sort({num: -1});
        const Y= await Postagem.findOne({categoria}).sort({numC: -1});
        if(Y && X){
            const post = await Postagem.create({
                num: X.num+1,
                numC: Y.numC+1,
                categoria, 
                titulo, 
                data, 
                resumo, 
                materiaCompleta , 
                thumbnail: filename
            });
            res.json(post);
         }
        else if (X){
            const post = await Postagem.create({
                num: X.num+1,
                numC: 1,
                categoria, 
                titulo, 
                data, 
                resumo, 
                materiaCompleta , 
                thumbnail: filename
            });
            res.json(post);
        }
        else {
            const post = await Postagem.create({
                num: 1,
                numC: 1,
                categoria, 
                titulo, 
                data, 
                resumo, 
                materiaCompleta , 
                thumbnail: filename
            });
            res.json(post);
        }
    },

    async index(req, res){
        const {pg, categoria} = req.body; 
        if(categoria != ""){
            cat = await Postagem.findOne({categoria});
            if(!cat){
                res.json({
                    isError:    true,
                    message:"Categoria não existente"
                });
            }
            else{
                const X = await Postagem.findOne({categoria}).sort({numC: -1});
                const MAX= X.numC + (2-2*pg);
                const MIN=MAX-1;
                const posts = await Postagem.find({categoria,numC:{$gte:MIN}}).limit(2);
                res.json(posts);
            }
        }
        else{
            const X = await Postagem.findOne({}).sort({num: -1});
            const MAX= X.num + (2-2*pg);
            const MIN=MAX-1;
            const posts = await Postagem.find({num:{$gte:MIN}}).limit(2);
            res.json(posts);
        }
    },

    async update(req, res){
        const {categoria, titulo, data, resumo, materiaCompleta, _id} = req.body;
        const {filename} = req.file;
        cat = await Postagem.findOne({categoria});
        if(cat == categoria){
            const edita = await ServicosProjetos.updateOne(
                {_id},
                {$set:{categoria, titulo, data, resumo, materiaCompleta, thumbnail:filename}}, 
                {upsert:false}
            );
            res.json(edita);
        }
        else{
            const Y= await Postagem.findOne({categoria}).sort({numC: -1});
            const edita = await ServicosProjetos.updateOne(
                {_id},
                {$set:{categoria, numC: Y.numC+1, titulo, data, resumo, materiaCompleta, thumbnail:filename}}, 
                {upsert:false}
            );
            res.json(edita);
        }
    },

    async destroy(req,res){
        const {_id} = req.body;
        await Postagem.deleteMany({_id});
        res.json({message: "Postagem deletada"}); 
    }
}