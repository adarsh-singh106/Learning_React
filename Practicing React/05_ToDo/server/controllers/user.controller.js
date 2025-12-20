const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

// valid for 30 days
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // 1. Validate Input
  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Please fill all fields");
  }

  // 2. Check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email is already registered");
  }

  // 3. Create User (Model hook handles hashing!)
  const user = await User.create({
    firstName,
    lastName,
    email,
    password,
  });

  // 4. Send Response
  if (user) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      fullName: `${user.firstName} ${user.lastName}`, // Fixed spacing
      email: user.email,
      token: generateToken(user._id), // <--- FIXED: Now sending the actual token
    });
  } else {
    res.status(400);
    throw new Error("Invalid User data");
  }
});

module.exports = { registerUser }; // Don't forget to export!