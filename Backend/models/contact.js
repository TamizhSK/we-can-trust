const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  subject: { 
    type: String, 
    required: true,
    enum: ["general", "donation", "volunteer", "program", "partnership"]
  },
  message: { type: String, required: true },
  status: {
    type: String,
    enum: ["new", "in-progress", "resolved", "closed"],
    default: "new"
  },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // Optional for logged-in users
  adminNotes: { type: String }, // For admin use
  respondedAt: { type: Date }, // When admin responded
  respondedBy: { type: mongoose.Schema.Types.ObjectId, ref: "user" } // Which admin responded
}, {
  timestamps: true
});

module.exports = mongoose.model("contact", ContactSchema);
