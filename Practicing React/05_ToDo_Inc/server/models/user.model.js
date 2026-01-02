const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
  {
    firstName: { // Changed to camelCase (standard convention)
      type: String,
      required: [true, "Please add user First name"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "Please add user Last name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please add an Email"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please add a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

// CORRECT VERSION (No 'next')
UserSchema.pre("save", async function () { // 1. Remove 'next' from here
  
  if (!this.isModified("password")) {
    return; // 2. Just return (stops the function)
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  
  // 3. No need to call next() at the end. 
  // Mongoose knows it's done because the function finishes.
});

module.exports = mongoose.model("User", UserSchema);