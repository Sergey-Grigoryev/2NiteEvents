const mongoose = require("mongoose");

const { Schema } = mongoose;

const businessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;
