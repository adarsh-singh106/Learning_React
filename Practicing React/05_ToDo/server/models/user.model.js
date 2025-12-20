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

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next(); // <--- THIS WAS MISSING
});

module.exports = mongoose.model("User", UserSchema);