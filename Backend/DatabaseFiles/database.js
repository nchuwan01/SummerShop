const mysql = require("mysql2");
require("dotenv").config();


const connection = mysql.createConnection({
    host:"summershopdb.ckui2r7x2ufk.us-east-2.rds.amazonaws.com",
    database:"SummershopDB",
    user:"admin",
    password:"Aurora60506!"
})

module.exports=connection;