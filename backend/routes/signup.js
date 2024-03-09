
const express = require("express");
const router = express.Router();

const { handleUserSignUp } = require("../controller/userSignup");

router.post("/", handleUserSignUp);

module.exports = router;
