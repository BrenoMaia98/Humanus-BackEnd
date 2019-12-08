var nodemailer = require('nodemailer');

module.exports = {
    async post(req, res){
        const transport = nodemailer.createTransport({
            port: 465,
            secure: true, // use TLS
            auth: {
                user: "username",
                pass: "pass"
            },
        });
    }
}