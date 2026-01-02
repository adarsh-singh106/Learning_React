const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

// 1. Import the Protector
const { protect } = require("../middleware/authMiddleware");

// --- PUBLIC ROUTES (Open to everyone) ---
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);

// --- PROTECTED ROUTES (Must have Token) ---
// We add 'protect' as the second argument
router.get("/", userController.getAllUsers);
router.get("/:id",protect, userController.getUserById); // Optional: Remove 'protect' if you want public profiles
router.put("/:id", protect, userController.updateUser);
router.delete("/:id", protect, userController.deleteUser);

module.exports = router;