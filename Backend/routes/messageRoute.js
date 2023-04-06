const express = require("express");
const app =express();
const router = express.Router();
const validateToken = require('../middlewares/ValidTokens/validToken');
const {postMessage} = require("../Controller/messages");


router.post("/", validateToken,postMessage)


module.exports= router;