const express = require("express");
const router = express.Router();

const app = express();

const {registerUser} = require("../Controller/registerUser");


router.post("/",registerUser)




module.exports= router;