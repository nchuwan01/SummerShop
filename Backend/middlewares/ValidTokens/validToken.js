const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({extended: false}))

const validateToken = (req,res,next) =>
{    
    try{
        const accessToken = req.headers.cook;
        console.log("It's access" + accessToken);
        if(!accessToken)
        {
            res.json("Sign In")


        }else{
            console.log("Found Accesstoken")

            const validToken = jwt.verify(accessToken, process.env.JWT_AUTH_KEY);
            req.user = validToken;
            if(validToken)
            {
                next()

            }
            else
            {
                console.log("It is not going to next")
                res.json("Not a valid token")
            }
        }
        
    }catch(err){
        console.log("error!")
        console.log(err);
        res.status(500).json({ error: err.message }); // show error message to client

    }
}

module.exports = validateToken;