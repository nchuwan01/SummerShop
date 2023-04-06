const connection = require("../DatabaseFiles/database");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const Logout=(req,res)=>{
    res.json("logged out")
}

module.exports = {Logout};