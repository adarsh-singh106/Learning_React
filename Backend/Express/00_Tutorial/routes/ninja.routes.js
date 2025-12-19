const express = require('express');
const router = express.Router();
const ninjaController = require('../controllers/ninja.controller');

const { protect } = require('../middleware/auth.middleware');

// General Routes (No ID needed)
router.get('/', ninjaController.getAllNinjas);
router.post('/', ninjaController.registerNinja);

router.post('/login', ninjaController.loginNinja);

// PROTECTED ROUTES (Must have Headband)
// We add 'protect' as the first argument
router.get('/me', protect, (req, res) => {
    // Just a quick test route to see our own data
    res.json(req.user);
});

// Specific Routes (ID IS REQUIRED)
// The ":id" tells Express to treat anything after /ninja/ as a variable
router.get('/:id',protect, ninjaController.getNinjaById);
router.put('/:id',protect, ninjaController.updateNinja);    // PUT is for updates
router.delete('/:id',protect, ninjaController.deleteNinja); // DELETE is for... deleting

module.exports = router;