const express = require("express")
const app = express();
const connection = require("../DatabaseFiles/database");

app.use(express.json())
async function findStudentByUsername(username) {
    let data = await connection.execute(`select * from students where username=(?)`,[username]);
    console.log(data);

    
    // const query = "SELECT * FROM students WHERE username = ?";
    // const [result] = await connection.execute(query, [username]);
    // const data = result[0];
    // console.log("Start---------------------------------------------------------------------------------");
    // console.log(data);
    // console.log("End-------------------------------------------------------------------------------------");
    // return data;
  }
module.exports=findStudentByUsername;

