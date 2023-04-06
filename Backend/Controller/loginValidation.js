const connection = require("../DatabaseFiles/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const cookieParser = require("cookie-parser");

app.use(cookieParser());

app.use(express.json());

require("dotenv").config();

app.use(express.urlencoded({extended: false}));

const loginGetUser= (req,res)=>{
    console.log('getting in loginGetUser controller')
    console.log(req.user.username)
    res.json(req.user.username)
};

const loginValidateUser = async (req,res) =>
{
    const username = req.body.user_name;
   // console.log(req.body)
    res.cookie("hello","world!")

        connection.query(`select * from students where username=(?)`,[username], async(error,result)=>{
           // console.log(result[0]);
            if(error)
            {
                res.json("Error with username or password")
            } else if(result.length === 0) {
                res.json("Incorrect username or password");
            }
            if(result.length != 0)
            {
                bcrypt.compare(req.body.password, result[0].password, (err,data)=>{
                    let d = result[0].verified;
                    if(data && d==1)
                    {   
                        let accessToken = jwt.sign({username: username, email: result[0].email, userID: result[0].sid}, process.env.JWT_AUTH_KEY);
                     //   console.log("Not even signing: ", accessToken)
                        console.log(accessToken);
                        res.cookie("access-token",accessToken,{
                            maxAge: 86400000,
                            httpOnly: true,
                            sameSite:"none",
                            secure: true
                        });
  
                        res.json({detail: result[0].username});
                    }else if(data && d==0)
                    {
                        res.json("Please click on confirmation link sent to your gmail")
                    }else{
                        res.json("Incorrect username or password")
                    }
            })
                
            }
      });
    }

    module.exports = {loginGetUser, loginValidateUser};