const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,  // Add in Render Environment Variables
  key_secret: process.env.RAZORPAY_KEY_SECRET,  // Add in Render Environment Variables
});

// API to create a Razorpay order
app.post("/create-order", async (req, res) => {
  try {
    const options = {
      amount: 50000, // Amount in paise (₹500.00)
      currency: "INR",
      payment_capture: 1, // Auto-capture payment
    };

    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Default route to check if the backend is running
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
