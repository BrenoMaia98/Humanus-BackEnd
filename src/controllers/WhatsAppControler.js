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
        const zap = await WhatsApp.find({});
        res.json(zap);
    },

    async update(req, res){
        const {numero} = req.body;
        const zap = await WhatsApp.update({},{numero});
        res.json({message: "editado"});
    }
}