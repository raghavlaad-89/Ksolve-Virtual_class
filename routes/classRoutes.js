const express = require('express');
const router = express.Router();
const classController = require('../controllers/classController');

// Get all classes
router.get('/', classController.getAllClasses);

// Get class by ID
router.get('/:id', classController.getClassById);

module.exports = router;
