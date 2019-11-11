const ServicosProjetos = require('../models/ServicosProjetosSchema');
/*
Store
Index
Update
Destroy
*/
module.exports = {
    async store(req, res){
        const {titulo} = req.body;
        const {descricao} = req.body;
        
        let temp = await ServicosProjetos.findOne({titulo});
        
        if(temp){
            return res.json({message:"Titulo ou Descrição já existentes"});
        }
        else{
            
            temp = await ServicosProjetos.create({
                titulo:titulo, 
                descricao:descricao 
            });
            return res.json(temp);
        }
    },

    async index(req, res){
        const temps = await ServicosProjetos.find({});
        return res.json(temps);
    },
  
    async update(req, res){
        const {_id} = req.query;
        const {tituloEditado} = req.body;
        const {descricaoEditada} = req.body;

        const edita = await ServicosProjetos.update({_id},{titulo: tituloEditado,descricao: descricaoEditada});

        return res.json(edita);
    },

    async destroy(req, res){
        const {_id} = req.query;
        await ServicosProjetos.deleteOne({_id});
        res.json({message: "destruido"});
    }
}