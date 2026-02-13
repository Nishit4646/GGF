const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors()); // Isse CORS wala error nahi aayega
app.use(express.json());

// Port setup (Conflict se bachne ke liye 5000 use kar rahe hain)
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log("DB Connection Error:", err));
// Test Route
app.get('/', (req, res) => {
    res.send('Gujarati Legends API is running...');
});

// Server Start
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});