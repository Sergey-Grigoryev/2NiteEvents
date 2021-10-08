const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

const appUserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  eventId: [
    {
      type: Schema.Types.ObjectId,
      ref: "Events",
    },
  ],
  rating: {
    type: Number,
  },
  friends: {
    type: Number,
  },
});

const AppUser = mongoose.model("AppUser", appUserSchema);

module.exports = AppUser;
