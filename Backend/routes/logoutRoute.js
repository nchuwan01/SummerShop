const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/",(req,res)=>{
        res.json("Success");
})


module.exports= router;