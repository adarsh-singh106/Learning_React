const express = require('express');
const router = express.Router();
const { createClan, getAllClans } = require('../controllers/clan.controller');

router.post('/', createClan);
router.get('/', getAllClans);

module.exports = router;