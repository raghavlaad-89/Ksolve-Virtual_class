// routes/classRoutes.js
const express = require('express');
const { getAllClasses } = require('../controllers/classController');
const router = express.Router();

router.get('/', getAllClasses);

module.exports = router;
