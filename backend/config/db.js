const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONG0_URI, {
      useUnfiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDB;
