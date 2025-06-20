const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const passport = require("passport");
const path = require("path");
const Razorpay = require("razorpay");
const crypto = require("crypto");

require("dotenv").config();
mongoose.connect(process.env.MONGO_URI);

// Models
const Donation = require("./models/donation");

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const app = express();

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // Default Vite port
  credentials: true
}));

// Body parsing middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Session configuration
app.use(
  session({ 
    secret: process.env.SESSION_SECRET, 
    resave: false, 
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
  }),
);

// Passport configuration
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// API Routes

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "We Can Trust API is running" });
});

// User authentication status
app.get("/api/auth/status", (req, res) => {
  if (req.user) {
    res.json({ 
      authenticated: true, 
      user: { 
        id: req.user._id, 
        name: req.user.name, 
        email: req.user.email 
      } 
    });
  } else {
    res.json({ authenticated: false, user: null });
  }
});

// User registration
app.post("/api/auth/signup", (req, res, next) => {
  passport.authenticate("local-signup", (err, user, info) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
    if (!user) {
      return res.status(400).json({ success: false, message: info.message || "Registration failed" });
    }
    
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Login after registration failed" });
      }
      return res.json({ 
        success: true, 
        message: "Registration successful", 
        user: { id: user._id, name: user.name, email: user.email } 
      });
    });
  })(req, res, next);
});

// User login
app.post("/api/auth/login", (req, res, next) => {
  passport.authenticate("local-login", (err, user, info) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Internal server error" });
    }
    if (!user) {
      return res.status(401).json({ success: false, message: info.message || "Login failed" });
    }
    
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ success: false, message: "Login failed" });
      }
      return res.json({ 
        success: true, 
        message: "Login successful", 
        user: { id: user._id, name: user.name, email: user.email } 
      });
    });
  })(req, res, next);
});

// Google OAuth routes
app.get(
  "/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

app.get(
  "/api/auth/google/callback",
  passport.authenticate("google", { session: true }),
  (req, res) => {
    // Successful authentication, redirect to frontend
    const frontendUrl = process.env.FRONTEND_URL || "http://localhost:5173";
    res.redirect(`${frontendUrl}/auth/success`);
  }
);

// Logout
app.post("/api/auth/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Logout failed" });
    }
    res.json({ success: true, message: "Logged out successfully" });
  });
});

// Donation routes
app.post("/api/donations/create-order", async (req, res) => {
  try {
    const { amount, donorName, donorEmail, purpose } = req.body;
    
    const options = {
      amount: amount * 100, // Razorpay expects amount in paisa
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    // Save donation details
    const donation = new Donation({
      donorName,
      donorEmail,
      amount,
      razorpayOrderId: order.id,
      purpose: purpose || "General Donation",
      userId: req.user ? req.user._id : null,
    });

    await donation.save();

    res.json({
      orderId: order.id,
      amount: amount,
      currency: "INR",
      donationId: donation._id,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ error: "Failed to create order" });
  }
});

app.post("/api/donations/verify-payment", async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, donationId } = req.body;

    // Verify signature
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign) {
      // Update donation status
      await Donation.findByIdAndUpdate(donationId, {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: "completed",
      });

      res.json({ 
        success: true, 
        message: "Payment verified successfully",
        donationId: donationId 
      });
    } else {
      await Donation.findByIdAndUpdate(donationId, { status: "failed" });
      res.status(400).json({ 
        success: false, 
        message: "Payment verification failed" 
      });
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ 
      success: false, 
      message: "Payment verification failed" 
    });
  }
});

app.get("/api/donations/:id", async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation || donation.status !== "completed") {
      return res.status(404).json({ 
        success: false, 
        message: "Donation not found or incomplete" 
      });
    }
    res.json({ 
      success: true, 
      donation: {
        id: donation._id,
        donorName: donation.donorName,
        donorEmail: donation.donorEmail,
        amount: donation.amount,
        currency: donation.currency,
        purpose: donation.purpose,
        status: donation.status,
        createdAt: donation.createdAt
      }
    });
  } catch (error) {
    console.error("Error fetching donation:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error fetching donation" 
    });
  }
});

// Get user's donations
app.get("/api/donations/user/my-donations", async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ 
      success: false, 
      message: "Please login to view your donations" 
    });
  }
  
  try {
    const donations = await Donation.find({ 
      userId: req.user._id,
      status: "completed" 
    }).sort({ createdAt: -1 });
    
    const formattedDonations = donations.map(donation => ({
      id: donation._id,
      donorName: donation.donorName,
      donorEmail: donation.donorEmail,
      amount: donation.amount,
      currency: donation.currency,
      purpose: donation.purpose,
      status: donation.status,
      createdAt: donation.createdAt
    }));
    
    res.json({ 
      success: true, 
      donations: formattedDonations 
    });
  } catch (error) {
    console.error("Error fetching donations:", error);
    res.status(500).json({ 
      success: false, 
      message: "Error loading donations" 
    });
  }
});

app.listen(8000, '0.0.0.0', () => console.log("Server running on http://localhost:8000"));
