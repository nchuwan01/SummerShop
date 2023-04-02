const nodeMailer = require("nodemailer");
require("dotenv").config();

const transporter = nodeMailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'summershop2023.2024@gmail.com',                      
        pass: "aflizqqgtekeatet",
    }
});

module.exports= transporter;