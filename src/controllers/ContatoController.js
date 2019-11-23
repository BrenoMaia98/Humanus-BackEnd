const nodemailer = require('nodemailer');
const ContatoSchema = require('../models/ContatoSchema');
const transport = nodemailer.createTransport({
    host:"gmail",
    service:"gmail",
    port: 587,
    secure: true,
    auth: {
        user: "EJTESTES",
        pass: "ejtestes2000"
    },
});
module.exports = {
    async post(req, res){
        const {Email, Titulo, Texto} = req.body;
        const email = {
            from: "EJTESTES@gmail.com",
            to: "EJTESTES@gmail.com",
            subjetct: `Email:${Email}//Titulo:${Titulo}`,
            text:`${Texto}`
        }
        remetente.sendMail(email, function(error){
            if (error) {
            console.log(error);
            } else {
            console.log("Email enviado com sucesso.");
            }
            });
    }
}