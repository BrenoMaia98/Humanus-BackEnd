const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
        user: "ejcomp.teste@gmail.com",
        pass: "ejcomp1234ej"
    },
});
module.exports = {
    async send(req, res){
        const {Email, Titulo, Texto} = req.body;
        const mailOptions = {
            from: "ejcomp.teste@gmail.com",
            cc: email,
            subjetct: `Email:${Email}//Titulo:${Titulo}`,
            
        };
        try{
            const response = transporter.sendMail(mailOptions);
            return response;
        }
        catch(err){
            return err;
        }
    }
}