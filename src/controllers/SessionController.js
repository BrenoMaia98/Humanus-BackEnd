const Session = require('../models/SessionSchema');
const jwt = require('jsonwebtoken');
module.exports = {
        
        async store(req, res){
            const {usuario, senha} = req.body;
            let token = jwt.sign({ foo: 'bar' }, senha)
            const usu = await Session.findOne({usuario});
            const sen = await Session.findOne({token});
            let login = await Session.findOne({usuario, token});
            if(usu || sen){
                return res.json({message:"Usuario ou senha já existentes"});
            }
            else{
                login = await Session.create({usuario,token});

                return res.json({login});
            }
        },
        
        async show(req, res){
            const {usuario, senha} = req.body;
            const verificaUsuario = await Session.findOne({usuario});
            jwt.verify(verificaUsuario.token, senha, function(err, decoded) {
                if(err){
                    return res.json({message:"Usuario ou senha invalido"});
                }
            });
            if(!verificaUsuario){
                return res.json({message:"Usuario ou senha invalido"});
            }
            else{ 
                return res.json({token:verificaUsuario.token});
            }
        },

        async index(req,res){
            const {bacon} = Session.find({});
            res.json({bacon});
        }
}