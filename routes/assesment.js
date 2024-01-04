const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  text: { type: String, required: true },
  options: [{ type: String, required: true }],
  correctOption: { type: String, required: true },
});

const assessmentSchema = new Schema({
  title: { type: String, required: true },
  questions: [questionSchema],
  // Add other fields as needed for your assessment
  createdAt: { type: Date, default: Date.now },
});

const Assessment = mongoose.model('Assessment', assessmentSchema);

module.exports = Assessment;
