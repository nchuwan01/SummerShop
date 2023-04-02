const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./DatabaseFiles/database");

const passport = require("passport");
const mysql = require("mysql2");
const validateToken = require("./middlewares/ValidTokens/validToken")
const path = require("path")
require("dotenv").config();

//routes
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const logoutRoute = require("./routes/logoutRoute");
const sellRoute = require("./routes/sellRoute");
const messagesRoute= require("./routes/messageRoute");
const deleteRoute= require("./routes/deleteRoute");
const itemByIDRoute= require("./routes/getItemByID");



const userInfoRoute = require("./routes/userInfoRoute");



//Production Code 

// const _dirname = path.dirname("")
// const buildPath = path.join(_dirname, "../Frontend/build")
// app.use(express.static(buildPath))

// app.get("/*", function(req,res){
//     res.sendFile(
//         path.join(_dirname,"../Frontend/build/index.html"),
//         function(err){
//             if(err){
//                 if(err){
//                     res.status(500).send(err)
//                 }
//             }
                
//         }
//     )
// })


const corsOptions = {
    origin: 'https://main.demex2y9pjyc1.amplifyapp.com',
    credentials: true,
  };
app.use(cors(corsOptions));

app.use("/images",express.static('./routes/images'))

app.use(express.json());

app.use(express.urlencoded({extended: false}));

    
app.use("/register", registerRoute);

app.use("/login", loginRoute)
app.use("/login/sell", sellRoute);
app.use("/login/user", userInfoRoute);
app.use("/login/message", messagesRoute)
app.use("/login/delete", deleteRoute)
app.use("/login/item", itemByIDRoute)


app.use("/logout",logoutRoute)



app.get("/confirm/*", (req,res) =>{
    let confirm = req.url;
    let data = confirm.slice(9);
    console.log(data);
    
    connection.query(`Update students SET verified=1 where password=(?)`,[data], async(error, result)=>{
        if(error) res.json("Not found") 
        else {res.redirect("http://localhost:3000")}
    })
})





connection.connect((error)=>{
    if(error) throw error
    else console.log("We good!");

})




const PORT = 4000;
app.listen( process.env.PORT || PORT, console.log(`http://localhost:${PORT}`))