const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service:"gmail",
    port: 587,
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
            cc: "ejcomp.teste@gmail.com",
            subjetct: `Email:${Email}//Titulo:${Titulo}`,
            text:   `De: ${Email}\nAssunto: ${Titulo}\n\n${Texto}`,
            htlml: `<p>${Texto}</p>`
        };
        try{
            const response = transporter.sendMail(mailOptions);
            return res.json(response);
        }
        catch(err){
            return err;
        }
    }
}