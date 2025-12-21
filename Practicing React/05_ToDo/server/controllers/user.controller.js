const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

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

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // 1. Check for email
  // CRITICAL FIX: We must add .select('+password') to get the hashed password
  const user = await User.findOne({ email }).select("+password");

  // 2. Check password
  // We combine the checks to return a generic error if EITHER is wrong
  if (user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      email: user.email,
      // Fixed spacing in fullName
      fullName: `${user.firstName} ${user.lastName}`,
      token: generateToken(user._id),
    });
  } else {
    res.status(401); // 401 = Unauthorized
    throw new Error("Invalid email or password");
  }
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password"); // Explicitly exclude password just in case

  // Check the length of the array
  if (!users || users.length === 0) {
    res.status(404);
    throw new Error("No users found");
  }

  res.status(200).json(users);
});

const getUserById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  // const {id} = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid User ID Format");
  }
  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json(user);
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // 1. Validate ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid Id Format");
  }

  // 2. Attempt Delete
  const deletedUser = await User.findByIdAndDelete(id);

  // 3. Check result (Use the correct variable name!)
  if (!deletedUser) {
    res.status(404);
    throw new Error("Ninja not Found");
  }

  res.status(200).json({ message: "User removed successfully" });
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  // 1. Validate ID Format
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400);
    throw new Error("Invalid Id format");
  }

  // 2. Find the user first
  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    throw new Error("User Not Found");
  }

  // 3. Update fields manually
  // This allows us to control exactly what gets updated
  const { firstName, lastName, email, password } = req.body;

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (email) user.email = email;

  // If password is sent, we update it.
  // Because we use .save() below, the pre('save') hook will run and hash it!
  if (password) user.password = password;

  // 4. Save (Triggers the hashing hook)
  const updatedUser = await user.save();

  // 5. Response (Corrected JSON format)
  res.status(200).json({
    message: "Updated Successfully",
    user: {
      _id: updatedUser._id,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      // Don't send the password back!
    },
  });
});
module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
};
