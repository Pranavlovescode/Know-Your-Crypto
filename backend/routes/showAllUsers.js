const userInfo = require("../model/userInfo");
const express = require("express");
const router1 = express.Router();

router1.get("/", async (req, res) => {
  
  try {
    const info = await userInfo.find();
    res.status(200).json(info);
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router1;
