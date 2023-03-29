const express = require("express");
const router = express.Router();
const {getUserByID }= require("../Controller/getUserByID");



router.get("/:sid",getUserByID);



module.exports= router;