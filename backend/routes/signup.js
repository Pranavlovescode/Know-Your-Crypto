const userInfo = require("../model/userInfo");
const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const { handleUserSignUp } = require("../controller/userSignup");

router.post("/", handleUserSignUp);

module.exports = router;
