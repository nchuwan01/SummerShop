const express = require("express");
const app = express();


app.get("/", (req,res) =>{
    res.send("hello!");
})





const PORT = 4000;
app.listen(PORT, console.log(`Server Listen${PORT}`))