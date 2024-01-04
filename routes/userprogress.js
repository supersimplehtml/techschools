// models/UserProgress.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProgressSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  completedModules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
  // Add other fields as needed for user progress tracking
  lastUpdated: { type: Date, default: Date.now },
});

const UserProgress = mongoose.model('UserProgress', userProgressSchema);

module.exports = UserProgress;
