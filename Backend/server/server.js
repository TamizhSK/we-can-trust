// server/server.js
import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';
import cors from 'cors';
import crypto from 'crypto';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

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
    res.status(500).json({ error: 'Order creation failed' });
  }
});

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

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
