const mysql = require("mysql2");
require("dotenv").config();


const connection = mysql.createConnection({
    host:process.env.HOST,
    database:process.env.DATABASE,
    user:process.env.USER,
    password:process.ENV.PASSWORD
})

module.exports=connection;