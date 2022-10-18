const mongoose = require("mongoose");

const MONGO = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.bxtlkqg.mongodb.net/?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
