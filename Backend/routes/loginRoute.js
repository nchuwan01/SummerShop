const express = require("express");
const app = express();
const router = express.Router();
const validateToken = require('../middlewares/ValidTokens/validToken');
const {loginGetUser,loginValidateUser} = require("../Controller/loginValidation");




require("dotenv").config();




router.get("/", validateToken, loginGetUser)


router.post("/", loginValidateUser )






module.exports= router;