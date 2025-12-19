const Clan = require('../models/clan.model');

const createClan = async (req, res) => {
    try {
        const clan = await Clan.create(req.body);
        res.status(201).json(clan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllClans = async (req, res) => {
    try {
        const clans = await Clan.find();
        res.json(clans);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createClan, getAllClans };