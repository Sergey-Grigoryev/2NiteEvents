const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
  id: {
    type: Number,
  },
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  avgSpend: {
    type: Number,
  },
  numberVisited: {
    type: Number,
  },
});

const Event = mongoose.model("Events", eventSchema);

module.exports = Event;