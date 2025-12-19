const mongoose = require('mongoose');

// The function to connect to the Bingo Book
const connectDB = async () => {
    try {
        // We will replace this string with your REAL one soon
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`MongoDB Connected: ${conn.connection.host} 🍃`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit with failure (Suicide mission)
    }
};

module.exports = connectDB;