const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  role:{
       default:0,
       type:Number
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
