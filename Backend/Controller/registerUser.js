const connection = require("../DatabaseFiles/database");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const transporter = require("../nodeMailerTransporter/nodeMailerTransporter");


const registerUser = async(req,res) =>{
    try{
        const user_name = req.body.user_name;
        const email = req.body.email;
        const AuMail = email.slice(-11);
        const password = req.body.password;
        const pass = (await bcrypt.hash(req.body.password, 10));

        
        if(AuMail == "@aurora.edu")
        {
            connection.query(`select * from students where username=(?)`,[user_name], async(error,result)=>{
                console.log(result);
                if(error)
                {
                    console.log(error);
                    res.json("Error has occured from our side. Please Try Again Later");
                }
                else if(result.length != 0)
                {
                    res.json("Username taken. Please try different username");
                }
                else{
                    connection.query(`select * from students where email = (?)`,[email], async(error, result)=>{
                        console.log(result);
                        if(error){

                            res.json("Error has occured from our side. Please Try Again Later");
                        }
                        else if(result.length != 0)
                        {

                            res.json("There's already an account associated with that email")
                        }
                        else{
                            console.log("console here!")
                            connection.query(`Insert into students (username,email,password,verified) VALUES (?,?,?,false)`,[user_name,email,pass], async (error, result)=>{
                                if(error) console.log(error)
                                else {                                    
                                    
                                    

                                    let info = await transporter.sendMail({
                                        from:"summershop2023.2024@gmail.com",
                                        to:email,
                                        subject: "Summershop Username and Password",
                                        html: `<p1>Please save your username and password. \n`
                                                    +` Your username is: ${user_name}. Your Password is: ${password}. </p> 
                                                    Here is your confirmation link: <a href="https://3.145.154.246/confirm/${pass}">Confirm Account</a>`
                                    }).then(result =>{
                                        console.log(result);
                                    })
                                    .catch(err => console.log(err));
                                }
                            })
                            res.json("Account created! Please check your email");
            
                        }
            
                    })
            

            }
        })
      

    }else{
        res.json("Please enter AU email");
    }
    
    }catch(err){
        res.send(error);
    }   


};

module.exports= {registerUser};