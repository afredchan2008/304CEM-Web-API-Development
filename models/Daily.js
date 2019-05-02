const mongoose = require('mongoose');
const DailySchema = new mongoose.Schema({
    comment: {
      type: String,
      required: true
    }
  });
  const Daily = mongoose.model('Daily', DailySchema);
  module.exports = Daily;