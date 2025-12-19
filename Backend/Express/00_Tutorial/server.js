const express = require('express');
const dotenv = require('dotenv'); // Import dotenv
const connectDB = require('./config/db'); // Import DB connection
const { errorHandler } = require('./middleware/error.middleware');
// 1. Load Config
dotenv.config(); // This loads the variables from .env

// 2. Connect to Database
connectDB(); // Run the function we wrote

const app = express();
const PORT = process.env.PORT || 3001; // Use port from .env

app.use(express.json());

// Routes
const ninjaRoutes = require('./routes/ninja.routes');
app.use('/ninja', ninjaRoutes);
app.use('/clan', require('./routes/clan.routes'));


// ERROR HANDLER MUST BE THE LAST MIDDLEWARE
app.use(errorHandler);


app.get('/', (req, res) => {
    res.send('Welcome to the Hidden Leaf Village API');
});

app.listen(PORT, () => {
    console.log(`Server is running in the common room on http://localhost:${PORT}`);
});