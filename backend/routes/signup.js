const userInfo = require("../model/userInfo");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const info = await userInfo.create({ name, email, password });
    res.status(200).json(info);
    console.log(info)
  } catch (error) {
    res.json({ error: error });
  }
});

module.exports = router;
