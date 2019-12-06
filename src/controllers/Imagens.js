const Logo = require("../models/LogoSchema");
const fs = require("fs");
const path = require('path');

module.exports={
    async getImage(req,res){
        console.log(req.params);
        fs.copyFileSync.findOne({filename:req.params.filename}, (err,file) =>{
            //checa se achou algo
            if(!file || file.length === 0){
                return res.status(404).json({
                    isError:true,
                    message: "Arquivo não encontrado"
                });
            }
            //checa se é imagem
            if(file.contentType === "image/jpeg" || file.contentType === "image/png"){
                //lê o output para o navegador
                const readstream = fs.createReadStream(file.filename);
                readstream.pipe(res);
            }else{
                return res.status(404).json({
                    isError:true,
                    message: "Não é uma extensão válida, apenas jpeg e png são aceitas"
                });
            }
        })
    }

}

