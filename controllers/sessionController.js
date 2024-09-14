const Session = require('../models/Session');

// Get session by ID
exports.getSessionById = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }
    res.status(200).json(session);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add review to a session
exports.addReview = async (req, res) => {
  try {
    const session = await Session.findById(req.params.id);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    session.reviews.push(req.body); // req.body should contain reviewer and content
    await session.save();
    res.status(200).json(session.reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add reply to a review
exports.addReply = async (req, res) => {
  try {
    const session = await Session.findById(req.params.sessionId);
    if (!session) {
      return res.status(404).json({ message: 'Session not found' });
    }

    const review = session.reviews.id(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }

    review.replies.push(req.body); // req.body should contain reviewer and content
    await session.save();
    res.status(200).json(review.replies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
