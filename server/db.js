require('dotenv').config();
const mongoose = require('mongoose');
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB is connected');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
  }
};

module.exports = connectDb;
