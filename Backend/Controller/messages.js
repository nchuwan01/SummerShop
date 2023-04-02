const connection = require("../DatabaseFiles/database");
const transporter = require("../nodeMailerTransporter/nodeMailerTransporter");


const postMessage =  (req,res)=>{
    let recieverID = req.body[0].sid;
    let message = req.body[0].message;
    let senderEmail = req.user.email;
    let itemName = req.body[0].itemName;
    connection.query("Select email from students where sid=(?)",[recieverID], async (error, result)=>{
        if(error) res.send(404).json("Error");
        else{
            let info = await transporter.sendMail({
                from:"summershop2023.2024@gmail.com",
                to:result[0].email,
                subject: "Summershop Buyer Email",
                html: `<p1>This message is by ${senderEmail} from www.summershop.com. This message is about ${itemName} item you put on sale in summershop.com. <p1>\n`
                            +`\n The message: \n<h4> ${message}<h4> \n <h5>Please do Not respond to this email. If you want to contact the buyer, please email them at ${senderEmail}</h5> `
            }).then(result =>{
                console.log(result);
            })
            res.json("Email Sent!")
        }
        
    })

};

module.exports={postMessage};