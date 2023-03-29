const connection = require("../DatabaseFiles/database");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginGetUser= (req,res)=>{
    res.json(req.user.username)
};

const loginValidateUser = async (req,res) =>
{
    const username = req.body.user_name;

        connection.query(`select * from students where username=(?)`,[username], async(error,result)=>{
            
            console.log(result);
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
                        let accessToken = jwt.sign({username: req.body.user_name, email: result[0].email, userID: result[0].sid}, process.env.JWT_AUTH_KEY);

                        res.cookie("access-token",accessToken,{
                             maxAge: 86400000,
                             httpOnly: true,
                         });

                       res.json({detail: result[0].username});

                    }else if( data && d==0)
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