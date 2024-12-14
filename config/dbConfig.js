const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoURI = "mongodb://localhost:27017"; // Local MongoDB instance

    const conn = await mongoose.connect(mongoURI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
