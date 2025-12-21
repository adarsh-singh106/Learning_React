const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
// Import the Error Handler (I will provide the code for this file below)
const { errorHandler } = require('./middleware/errorMiddleware'); 

dotenv.config();
const port = process.env.PORT || 5000;

// Connect to Database
connectDB();

const app = express();

// 1. Middleware (Translators)
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Standard practice to accept form data too

// 2. Routes
// Standard Convention: Use plural '/api/users' instead of just '/user'
// This keeps your API organized (e.g., /api/products, /api/orders)
app.use('/api/user', require('./routes/user.routes'));

// 3. Error Handler (MUST be the last app.use)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});