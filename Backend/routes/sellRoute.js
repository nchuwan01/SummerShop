const express = require("express");
const app = express();
const router = express.Router();
//const cookieParser = require('cookie-parser');
const validateToken = require('../middlewares/ValidTokens/validToken');
//const findUserByUsername= require("../Model/findByUsername");

const upload = require("../middlewares/uploadImages/upload");
const {getItems, postItems} = require("../Controller/items");




router.get("/",getItems)


router.post("/",validateToken, upload, postItems);


module.exports = router;