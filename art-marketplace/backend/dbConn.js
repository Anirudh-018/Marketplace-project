const mongoose = require("mongoose");

module.exports = () => {
  try {
    mongoose.connect(process.env.DB);
    console.log("connected");
  } catch (error) {
    console.log("can't connect");
  }
};
