const express = require("express");
const app =express();
const router = express.Router();
const {getItemByID} = require("../Controller/items")

app.use(express.json());
app.use(express.urlencoded({extended: false}));


router.get("/:id",getItemByID);


module.exports= router;