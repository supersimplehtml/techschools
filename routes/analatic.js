// models/Analytics.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const analyticsSchema = new Schema({
  eventName: { type: String, required: true },
  eventData: { type: Schema.Types.Mixed },
  timestamp: { type: Date, default: Date.now },
  // Add other fields as needed for analytics data
});

const Analytics = mongoose.model('Analytics', analyticsSchema);

module.exports = Analytics;
