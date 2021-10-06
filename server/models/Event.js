const mongoose = require("mongoose");

const { Schema } = mongoose;

const eventSchema = new Schema({
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

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
