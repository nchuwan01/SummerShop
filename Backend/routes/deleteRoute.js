const express = require("express");
const app =express();
const router = express.Router();
const validateToken = require('../middlewares/ValidTokens/validToken');
const {deleteItem} = require("../Controller/items");


router.get("/:id",validateToken, deleteItem)


module.exports= router;