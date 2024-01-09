const { showAllUsers } = require("../controller/showAllUsers");
const userInfo = require("../model/userInfo");
const express = require("express");
const router1 = express.Router();

router1.get("/", showAllUsers);

module.exports = router1;
