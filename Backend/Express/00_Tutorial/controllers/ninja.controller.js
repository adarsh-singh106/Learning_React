// This file contains the LOGIC only. 
// It does not know about "routes" or "paths". 
// It just takes a Request and sends a Response.

// Import the Model we just made
const Ninja = require('../models/ninja.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');

// Helper: Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d', // Token expires in 30 days
    });
};

// 1. GET: Fetch all ninjas from the DB
const getAllNinjas = async (req, res) => {
    try {
        // .populate('clan') tells Mongoose:
        // "Go to the Clan collection, find the document with this ID, and replace the ID with the actual data."
        const ninjas = await Ninja.find().populate('clan'); 
        
        res.status(200).json(ninjas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// 2. POST: Create a new ninja in the DB
// Wrap the whole function in asyncHandler
const registerNinja = asyncHandler(async (req, res) => {
    // NO TRY-CATCH BLOCK NEEDED!
    
    const { name, email, password, rank, clan } = req.body;

    if (!name || !email || !password || !rank) {
        res.status(400); // Set status
        throw new Error("Please fill all fields"); // Throw error!
    }

    const ninjaExists = await Ninja.findOne({ email });
    if (ninjaExists) {
        res.status(400);
        throw new Error("Ninja already registered");
    }

    const ninja = await Ninja.create({
        name,
        email,
        password,
        rank,
        clan
    });

    if (ninja) {
        res.status(201).json({
            _id: ninja.id,
            name: ninja.name,
            email: ninja.email,
            rank: ninja.rank,
            token: null
        });
    } else {
        res.status(400);
        throw new Error("Invalid ninja data");
    }
});

// 3. GET SINGLE NINJA (Identify)
// Target: GET /ninja/:id
const getNinjaById = async (req, res) => {
    try {
        // req.params.id comes from the URL
        const ninja = await Ninja.findById(req.params.id);

        if (!ninja) {
            return res.status(404).json({ message: "Ninja not found in Bingo Book" });
        }

        res.status(200).json(ninja);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 4. UPDATE NINJA (Promotion/Healing)
// Target: PUT /ninja/:id
const updateNinja = async (req, res) => {
    try {
        const { id } = req.params;

        // findByIdAndUpdate(id, data_to_update, options)
        const updatedNinja = await Ninja.findByIdAndUpdate(id, req.body, {
            new: true, // IMPORTANT: Return the NEW updated version, not the old one
            runValidators: true // Ensure rules (like Enum) are still followed
        });

        if (!updatedNinja) {
            return res.status(404).json({ message: "Ninja not found" });
        }

        res.status(200).json(updatedNinja);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 5. DELETE NINJA (Assassination/Retirement)
// Target: DELETE /ninja/:id
const deleteNinja = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedNinja = await Ninja.findByIdAndDelete(id);

        if (!deletedNinja) {
            return res.status(404).json({ message: "Ninja not found" });
        }

        res.status(200).json({ message: "Ninja removed from the Bingo Book" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 6. LOGIN NINJA (Authentication)
// POST /ninja/login
const loginNinja = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Check for email
        const ninja = await Ninja.findOne({ email });

        // 2. Check Password using bcrypt.compare()
        // (entered_password, hashed_password_from_db)
        if (ninja && (await bcrypt.compare(password, ninja.password))) {
            res.json({
                _id: ninja.id,
                name: ninja.name,
                email: ninja.email,
                token: generateToken(ninja._id) // <--- ISSUE THE HEADBAND
            });
        } else {
            res.status(400).json({ message: "Invalid credentials (Wrong email or password)" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// DON'T FORGET TO EXPORT THEM!
module.exports = {
    getAllNinjas,
    registerNinja,
    getNinjaById,   // <--- New
    updateNinja,    // <--- New
    deleteNinja ,    // <--- New
    loginNinja
};

