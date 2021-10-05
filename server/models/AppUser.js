const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;

const appUserSchema = new Schema({
  id: {
    type: String,
    required: true,
    trim: true,
  },
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
    type: Integer,
  },
  friends: {
    type: Integer,
  },
});

const AppUser = mongoose.model("AppUsers", appUserSchema);

module.exports = AppUser;
