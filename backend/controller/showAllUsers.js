const userInfo = require("../model/userInfo");

const showAllUsers = async (req, res) => {
  try {
    const info = await userInfo.find();
    res.status(200).json(info);
    console.log(info)
  } catch (error) {
    res.json({ error: error });
  }
};
module.exports={
    showAllUsers
}