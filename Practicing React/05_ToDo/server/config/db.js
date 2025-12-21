const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // 1. Attempt connection
    const conn = await mongoose.connect(process.env.MONGO_URI);

    // 2. Log success (Standard uses cyan/underline if using 'colors' package, but this is fine)
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    
  } catch (error) {
    // 3. Handle Failure
    console.error(`Error: ${error.message}`);
    
    // 4. Kill the process (1 = failure)
    // We don't want the server to start if the DB is broken
    process.exit(1);
  }
};

module.exports = connectDB;