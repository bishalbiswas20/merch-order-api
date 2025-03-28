const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello! Your backend is running successfully.");
});

// Fix: Use a dynamic port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
