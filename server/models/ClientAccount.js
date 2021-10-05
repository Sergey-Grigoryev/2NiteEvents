const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;
const bcrypt = require("bcrypt");

const clientAccountSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  businessId: {
    type: Schema.Types.ObjectId,
    ref: "Business",
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
});

// compare the incoming password with the hashed password
clientAccountSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const clientAccount = mongoose.model("ClientAccount", clientAccountSchema);

module.exports = clientAccount;
