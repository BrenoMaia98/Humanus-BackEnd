const WhatsApp = require("../models/WhatsAppSchema");

module.exports={
    
    async store(req, res){
        const {numero} = req.body;
        
        let zap = await WhatsApp.findOne({numero});

        if(zap){
            res.json({message:"Número já registrado"});
        }
        else{
            zap = await WhatsApp.create({numero});
            res.json(zap);
        }
    },

    async show(req, res){
        const zap = await WhatsApp.findOne({});
        res.json(zap);
    },

    async update(req, res){
        try{
            const {numero,_id} = req.body;
            await WhatsApp.updateOne(
                {_id},
                {$set:{numero}}, 
                {upsert:false}
                );
            res.json({isError:false,message: "editado"});
        }catch(e){
            res.json({isError:true,message: e});

        }
    }
}