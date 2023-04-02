const multer = require("multer");
const crypto = require("crypto");
const id = crypto.randomBytes(4).toString('hex');
const path = require("path");


let storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null, './routes/images')
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname + '-'+ id+ Date.now() + path.extname(file.originalname))
    }

})

const upload = multer({
    storage: storage,
    limits: {fileSize: '2000000'}
    
}).single("image")

module.exports = upload;