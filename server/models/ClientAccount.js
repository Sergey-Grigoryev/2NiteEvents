const mongoose = require("mongoose");

const { Schema, ObjectId } = mongoose;
const bcrypt = require("bcrypt");

const clientAccountSchema = new Schema({
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

clientAccountSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const sr = 10;
    this.password = await bcrypt.hash(this.password, sr);
  }
  next();
});

// compare the incoming password with the hashed password
clientAccountSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const ClientAccount = mongoose.model("ClientAccount", clientAccountSchema);

module.exports = ClientAccount;
