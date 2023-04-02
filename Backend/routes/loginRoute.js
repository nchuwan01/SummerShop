const express = require("express");
const app = express();
const router = express.Router();
const validateToken = require('../middlewares/ValidTokens/validToken');
const {loginGetUser,loginValidateUser} = require("../Controller/loginValidation");
app.use(express.json());
app.use(express.urlencoded({extended: false})); 


const cors = require("cors");
const corsOptions = {
    origin: 'https://astounding-seahorse-9ec7ff.netlify.app',
    credentials: true,
  };
  app.use(cors(corsOptions));


require("dotenv").config();




router.get("/", validateToken, loginGetUser)


router.post("/", loginValidateUser )






module.exports= router;