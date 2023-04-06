const express = require("express");
const app =express();
const router = express.Router();
const {getItemByID} = require("../Controller/items")



router.get("/:id",getItemByID);


module.exports= router;