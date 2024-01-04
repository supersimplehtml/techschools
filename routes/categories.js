// models/Content.js
const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  // Add other fields as needed for your content
  createdAt: { type: Date, default: Date.now },
});

const Content = mongoose.model('Content', contentSchema);

module.exports = Content;
