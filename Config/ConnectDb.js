require("dotenv").config();
const mongoose = require("mongoose");
const URL ="mongodb+srv://jaouher:TilltedAhri2021@cluster0.8vvyikw.mongodb.net/?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
     await mongoose.connect('mongodb+srv://jawher:jawher111111@cluster0.luumil2.mongodb.net/?retryWrites=true&w=majority');

    console.log("db is successfully connected");
  } catch (error) {
    console.log("db failed to connect");
  }
};
module.exports = connectDb;
