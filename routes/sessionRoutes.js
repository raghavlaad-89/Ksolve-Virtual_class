const express = require('express');
const router = express.Router();
const sessionController = require('../controllers/sessionController');

// Get session by ID
router.get('/:id', sessionController.getSessionById);

// Add review to session
router.post('/:id/review', sessionController.addReview);

// Add reply to a review
router.post('/:sessionId/review/:reviewId/reply', sessionController.addReply);

module.exports = router;
