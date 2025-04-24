const mongoose = require('mongoose');

const supperPlanSchema = new mongoose.Schema({
  theme: {
    type: String,
    required: true,
  },
  menu: {
    type: [String],
    required: true,
  },
  ambience: {
    type: [String],
    required: true,
  },
  music: {
    type: [String],
    required: true,
  },
  craving: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SupperPlan', supperPlanSchema);