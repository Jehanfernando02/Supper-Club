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
  guests: {
    type: Number,
    default: 0,
  },
  eventDate: {
    type: Date,
    default: null,
  },
  shared: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('SupperPlan', supperPlanSchema);