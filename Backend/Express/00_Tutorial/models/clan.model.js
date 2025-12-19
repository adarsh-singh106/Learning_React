const mongoose = require('mongoose');

const clanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    specialty: {
        type: String, // e.g., "Sharingan", "Byakugan"
        required: true
    },
    village: {
        type: String,
        default: "Konoha"
    }
});

module.exports = mongoose.model('Clan', clanSchema);