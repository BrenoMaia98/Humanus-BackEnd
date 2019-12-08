const ServicosProjetos = require('../models/ServicosProjetosSchema');
/*
Store
Index
Update
Destroy
*/
module.exports = {
    async store(req, res){
        try{
            const {titulo} = req.body;
            const {descricao} = req.body;
            let temp = await ServicosProjetos.findOne({titulo});
            if(temp){
                return res.json({
                    isError: true,
<<<<<<< HEAD
                    message:"Titulo ou Descrição já existentes",
                    data:temp}
=======
                    message:"Titulo ou Descrição já existentes"}
>>>>>>> 6fcc7e153c35cc9c258ae98ebcca6f9496d4b297
                    );
            }
            else{
                
                temp = await ServicosProjetos.create({
                    isError:false,
                    titulo:titulo, 
                    descricao:descricao 
                });
                return res.json(temp);
            }
        }
        catch(e){
            console.log(e);
            return  temp = await ServicosProjetos.create({
                isError: true,
                message: "Ocorreu um erro inesperado, tente novamente mais tarde"
            });
            return res.json(temp);
        }
    },

    async index(req, res){
        const temps = await ServicosProjetos.find({});
        return res.json(temps);
    },
  
    async update(req, res){
        const {titulo} = req.body;
        const {descricao} = req.body;
        const {_id} = req.body;
        const edita = await ServicosProjetos.updateOne(
            {_id},
            {$set:{titulo,descricao}}, 
            {upsert:false}
            );
        return res.json(edita);
    },

    async destroy(req, res){
<<<<<<< HEAD
        try{
            const {_id} = req.body;
            await ServicosProjetos.deleteOne({_id});
            res.json({message: "destruido"});
        }catch(e){
            console.log(e)
        }
=======
        const {_id} = req.body;
        await ServicosProjetos.deleteOne({_id});
        res.json({message: "Item removido"});
>>>>>>> 6fcc7e153c35cc9c258ae98ebcca6f9496d4b297
    }
}