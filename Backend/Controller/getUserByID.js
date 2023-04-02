const connection = require("../DatabaseFiles/database");

const getUserByID= (req,res)=>{
    let id =req.params.sid;
    connection.query(`Select * from students where sid=(?)`,[id], (error, result)=>{
        if(error) res.json(error);
        res.json(result[0].username);
    })
}

module.exports = {getUserByID};