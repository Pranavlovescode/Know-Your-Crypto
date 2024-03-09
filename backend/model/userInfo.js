const mongoose = require("mongoose");
const userInfo = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
},{timestamps:true});

module.exports = mongoose.model('UserInfo',userInfo)
