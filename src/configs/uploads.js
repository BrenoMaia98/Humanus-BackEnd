const multer = require('multer');
const path = require('path');
const crypto = require('crypto');


module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) =>{
            crypto.randomBytes(16,(error,res) => {
                if(error) return cb(error);
                return cb(null,res.toString("hex")+path.extname(file.originalname))
            })
        }
    })
};