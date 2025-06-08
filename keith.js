require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8000;

// Import routes
const qr = require('./qr');
const code = require('./pair');

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route definitions
app.use('/qr', qr);
app.use('/code', code);
app.get('/pair', (req, res) => res.sendFile(path.join(__dirname, 'pair.html')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

// Start server
app.listen(PORT, () => {
  console.log(`
Keith Pair scanner online ✅

Created by Keith Keizzah

Server running on http://localhost:${PORT}
  `);
});

module.exports = app;
