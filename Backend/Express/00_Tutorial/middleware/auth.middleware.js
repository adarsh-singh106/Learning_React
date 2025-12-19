const jwt = require('jsonwebtoken');
const Ninja = require('../models/ninja.model');

const protect = async (req, res, next) => {
    let token;

    // 1. Check if the header starts with "Bearer"
    // Format: "Bearer <token>"
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get token from header (split by space and take the second part)
            token = req.headers.authorization.split(' ')[1];

            // 2. Verify Token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // 3. Get User from the ID in the token
            // We exclude the password (-password) so it doesn't leak
            req.user = await Ninja.findById(decoded.id).select('-password');

            next(); // PASS!
        } catch (error) {
            console.error(error);
            res.status(401).json({ message: "Not authorized, token failed" });
        }
    }

    if (!token) {
        res.status(401).json({ message: "Not authorized, no token" });
    }
};

module.exports = { protect };