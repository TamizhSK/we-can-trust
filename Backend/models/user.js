const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  googleId: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // only for local users
}, {
  timestamps: true});

module.exports = mongoose.model("user", UserSchema);