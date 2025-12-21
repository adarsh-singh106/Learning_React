const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  // STEP A: Check if the "Authorization" header exists
  // The frontend sends headers like: { "Authorization": "Bearer eyJhbGci..." }
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // STEP B: Extract the Token
      // We split "Bearer <token>" into an array and take the second part
      token = req.headers.authorization.split(" ")[1];

      // STEP C: Verify the "Signature"
      // jwt.verify checks if the token was tampered with.
      // It returns the data we hid inside it (the user ID).
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // STEP D: The "Magic" Step (Attaching the User)
      // We search the DB for the user using the ID from the token.
      // We attach this user to the 'req' object.
      // Now, your Controller (updateUser) can just type 'req.user' to know who called it!
      req.user = await User.findById(decoded.id).select("-password");

      // STEP E: Open the Gate
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
