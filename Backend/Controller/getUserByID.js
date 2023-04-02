const connection = require("../DatabaseFiles/database");

const getUserByID= (req,res)=>{
    let id =req.params.sid;
    connection.query(`Select * from Students where sid=(?)`,[id], (error, result)=>{
        res.json(result[0].username);
    })
}

module.exports = {getUserByID};