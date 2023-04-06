const connection = require("../DatabaseFiles/database");


const getItems = (req,res)=>{
    connection.query(`select * from items`, (error, result) =>{
        if(error) res.json(error)
        res.json(result);
    })
};
const getItemByID= (req,res)=>{
    const id = req.params.id;
    connection.query("Select * from items where itemID=(?)",[id], (error, result) =>{
        if(error) res.json("Error")
        else res.json(result);
    })
}

const deleteItem = (req,res)=>{
    let id= req.params.id;
    connection.query("DELETE FROM items WHERE itemID=(?)",[id], (error, result) =>{
        if(error) res.json("Error")
        else res.json("Deleted")
    })
}

const postItems = (req, res) => {


    let userID = req.user.userID;
    let image = (req.file.filename);
    let name = req.body.name;
    let description= req.body.description;
    let price = req.body.price;
    let category = req.body.category;
    console.log("Is it this ", image)

    connection.query(
        `INSERT INTO items (description, image, category, price, name,sid) VALUES (?, ?, ?, ?, ?, ?)`,
        [description, image, category, price, name, userID],
        (error, result) => {
            if(error) {console.log(error)};
            console.log(result);
            res.json("success");
        }
      );
};

module.exports = {getItems,postItems, getItemByID, deleteItem};