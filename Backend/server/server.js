import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import cors from 'cors';
import crypto from 'crypto';
import bodyParser from 'body-parser';
import db from './db.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// ✅ CONTACT FORM ROUTE
//app.post('/api/contact', (req, res) => {
  //console.log('Contact form hit'); // <-- Add this
  //const { name, email, phone, subject, message } = req.body;
  // const query = 'INSERT INTO contacts (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)';
  // db.query(query, [name, email, phone, subject, message], (err, results) => {
  //   if (err) {
  //     console.error(err);
  //     return res.status(500).send('Error saving message');
  //   }
  //   res.send('Message saved successfully!');
  // });
  res.send('DB integration commented out.');
//});

// ✅ RAZORPAY CONFIG
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ✅ RAZORPAY ORDER CREATION
app.post('/create-order', async (req, res) => {
  const { amount } = req.body;
  const options = {
    amount: amount * 100,
    currency: 'INR',
    receipt: 'donation_rcpt_' + Date.now(),
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json({ orderId: order.id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Order creation failed' });
  }
});

// ✅ RAZORPAY PAYMENT VERIFICATION
app.post('/verify-payment', (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
  const hmac = crypto
    .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(razorpay_order_id + '|' + razorpay_payment_id)
    .digest('hex');

  if (hmac === razorpay_signature) {
    res.status(200).json({ success: true });
  } else {
    res.status(400).json({ success: false, error: 'Invalid signature' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
