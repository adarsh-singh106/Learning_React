const mongoose = require("mongoose");

// 1. THE SCHEMA (The Blueprint)
const ninjaSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a ninja name"], // If missing, send this error
    },
    email: {
      type: String,
      required: [true, "Please add an Email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a Password"],
    },
    rank: {
      type: String,
      required: true,
      enum: ["Genin", "Chunin", "Jonin", "Kage"], // STRICT RULE: Only these ranks allowed!
    },
    // NEW FIELD: THE LINK
    clan: {
      type: mongoose.Schema.Types.ObjectId, // It stores the ID of the Clan document
      ref: "Clan", // vital! This tells Mongoose which model to look at
      required: false, // Optional for now
    },
    available: {
      type: Boolean,
      default: true, // By default, a ninja is ready for missions
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt'
  }
);

// ... schema definition above ...

const bcrypt = require("bcryptjs");

// Encrypt password using bcrypt
// We use 'function' keyword here (not arrow function) because we need 'this'
ninjaSchema.pre("save", async function (next) {
  // If the password was not changed (e.g., we just updated the rank), don't re-hash it
  if (!this.isModified("password")) {
    next();
  }

  // Generate a "Salt" (random data to make the hash unique)
  const salt = await bcrypt.genSalt(10);

  // Hash the password
  this.password = await bcrypt.hash(this.password, salt);
});

// 2. THE MODEL (The Creator)
// We wrap the schema in a model named "Ninja".
// MongoDB will automatically pluralize this to "ninjas" collection in the cloud.
module.exports = mongoose.model("Ninja", ninjaSchema);
