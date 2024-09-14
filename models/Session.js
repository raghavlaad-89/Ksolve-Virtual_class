const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  reviewer: {
    type: String, // Reviewer’s name or identifier
    required: true
  },
  content: {
    type: String,
    required: true
  },
  replies: [{
    reviewer: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }]
}, { timestamps: true }); // Adding timestamps to keep track of review creation and updates

const sessionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  resources: [{
    text: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }],
  reviews: [reviewSchema] // Embed reviews within each session
});

module.exports = mongoose.model('Session', sessionSchema);
