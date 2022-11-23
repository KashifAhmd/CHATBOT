const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   usefindAndModify: true,
    });

    console.log(`MongoDb Connected: ${conn.connection.host}`.bgCyan.underline);
  } catch (error) {
    console.log(`Error is ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
