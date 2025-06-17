const mongoose = require("mongoose");

const DonationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  amount: { type: Number, required: true },
  currency: { type: String, default: "INR" },
  razorpayOrderId: { type: String, required: true },
  razorpayPaymentId: { type: String },
  razorpaySignature: { type: String },
  status: { 
    type: String, 
    enum: ["pending", "completed", "failed"], 
    default: "pending" 
  },
  purpose: { type: String, default: "General Donation" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" } // Optional for logged-in users
}, {
  timestamps: true
});

module.exports = mongoose.model("donation", DonationSchema);
