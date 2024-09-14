const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unitController');

// Get unit by ID
router.get('/:id', unitController.getUnitById);

module.exports = router;
