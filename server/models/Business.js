const mongoose = require("mongoose");

const { Schema } = mongoose;

const businessSchema = new Schema({
  id: {
    type: Number,
  },
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

const Business = mongoose.model("Bussinesses", businessSchema);

mdule.exports = Business;
