const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const passport = require("passport");
const path = require("path");
const Razorpay = require("razorpay");
const crypto = require("crypto");

require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Models
const Donation = require("./models/donation");

// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

const app = express();

// EJS
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");
app.use(expressLayouts);

// Body + session + flash + passport
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // For JSON payloads
app.use(
  session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }),
);
app.use(flash());
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// Global template vars
app.use((req, res, next) => {
  res.locals.user = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

// Routes
app.get("/", (req, res) => res.render("index", { title: "Home" }));

app.get("/signup", (req, res) => res.render("signup", { title: "Register" }));
app.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
    failureFlash: true,
  }),
);

app.get("/login", (req, res) => res.render("login", { title: "Login" }));
app.post(
  "/login",
  passport.authenticate("local-login", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  }),
);

// Google OAuth routes
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
);
app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  }),
);

// Logout
app.get("/logout", (req, res) => {
  req.logout(() => {
    req.flash("success", "You are logged out");
    res.redirect("/");
  });
});

// Donation routes
app.get("/donate", (req, res) => {
  res.render("donate", { title: "Donate" });
});

app.post("/create-order", async (req, res) => {
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

app.post("/verify-payment", async (req, res) => {
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

      req.flash("success", "Thank you for your donation!");
      res.redirect(`/donation-success/${donationId}`);
    } else {
      await Donation.findByIdAndUpdate(donationId, { status: "failed" });
      req.flash("error", "Payment verification failed!");
      res.redirect("/donate");
    }
  } catch (error) {
    console.error("Error verifying payment:", error);
    req.flash("error", "Payment verification failed!");
    res.redirect("/donate");
  }
});

app.get("/donation-success/:id", async (req, res) => {
  try {
    const donation = await Donation.findById(req.params.id);
    if (!donation || donation.status !== "completed") {
      req.flash("error", "Donation not found or incomplete");
      return res.redirect("/");
    }
    res.render("donation-success", { title: "Donation Successful", donation });
  } catch (error) {
    console.error("Error fetching donation:", error);
    req.flash("error", "Donation not found");
    res.redirect("/");
  }
});

// Simple donations list for logged-in users
app.get("/my-donations", async (req, res) => {
  if (!req.user) {
    req.flash("error", "Please login to view your donations");
    return res.redirect("/login");
  }
  
  try {
    const donations = await Donation.find({ 
      userId: req.user._id,
      status: "completed" 
    }).sort({ createdAt: -1 });
    
    res.render("my-donations", { title: "My Donations", donations });
  } catch (error) {
    console.error("Error fetching donations:", error);
    req.flash("error", "Error loading donations");
    res.redirect("/");
  }
});

app.listen(8000, '0.0.0.0', () => console.log("Server running on http://localhost:8000"));
