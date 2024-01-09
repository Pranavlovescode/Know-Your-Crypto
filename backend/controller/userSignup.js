const userInfo = require("../model/userInfo");
const bcrypt = require("bcrypt");

const handleUserSignUp = async (req, res) => {
  const { name, email, pass } = req.body;
  try {
    //Hashing the password for better security
    const hashPassword = await bcrypt.hash(pass, 12);
    const info = await userInfo.create({ name, email, pass: hashPassword });
    res.status(200).json(info);
    console.log(info);
  } catch (error) {
    res.json({ error: error });
  }
};

module.exports = {
  handleUserSignUp,
};
