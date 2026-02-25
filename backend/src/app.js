const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());


// Test Route
app.get('/', (req, res) => {
    res.send('Gujarati Legends API is running...');
});


module.exports = app;