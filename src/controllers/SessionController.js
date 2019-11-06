const Session = require('../models/SessionSchema');

module.exports = {
        async store(req, res){
            const {usuario, senha} = req.body;
            const usu = await Session.findOne({usuario});
            const sen = await Session.findOne({senha});
            let login = await Session.findOne({usuario, senha});
        
            if(usu || sen){
                return res.json({message:"Usuario ou senha já existentes"});
            }
            else{
                login = await Session.create({usuario,senha});

                return res.json({login});
            }
        },
        
        async show(req, res){
            const {usuario, senha} = req.body;
            const verificaUsuario = await Session.findOne({usuario});
            const verificaSenha= await Session.findOne({senha});
            
            if(!verificaUsuario || !verificaSenha){
                return res.json({message:"Usuario ou senha invalido"});
            }
            else{
                const token = "ignqer2343i0gdf9gjsanfd04qjr0i9dg09qi33";
                return res.json({token});
            }
        }
}