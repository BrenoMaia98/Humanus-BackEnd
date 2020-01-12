var nodemailer = require('nodemailer');
const Email = require("../models/EmailSchema");

module.exports = {
    

    async store(req, res) {
        const { email } = req.body;
        try {

            let email = await Email.findOne({});

            if (email) {
                res.json({ message: "Já existe um email" });
            }
            else {
                email = await Email.create({ email });
                res.json(email);
            }
        } catch (error) {
            res.json({ isError: false, message: "Erro ao recuperar os dados", error })

        }
    },

    async show(req, res) {
        try {
            const email = await Email.findOne({});
            res.json(email);
        } catch (e) {
            console.log(e);
            res.json({ isError: false, message: "Erro ao recuperar os dados", error: e })
        }
    },

    async update(req, res) {
        try {
            const { email } = req.body;
            await Email.updateOne(
                {},
                { $set: { email } },
                { upsert: true }
            );
            res.json({ isError: false, message: "editado" });
        } catch (e) {
            res.json({ isError: false, message: "Erro ao atualizar os dados", error: e })
        }
    }
}