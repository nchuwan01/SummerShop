const express = require("express");
const app = express();
const router = express.Router();
const connection = require("../DatabaseFiles/database");
const jwt = require("jsonwebtoken");
//const cookieParser = require('cookie-parser');
const validateToken = require('../middlewares/ValidTokens/validToken');
//const findUserByUsername= require("../Model/findByUsername");

const upload = require("../middlewares/uploadImages/upload");
const {getItems, postItems} = require("../Controller/items");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());



router.get("/",getItems)


router.post("/",validateToken, upload, postItems);


module.exports = router;