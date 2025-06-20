const express = require('express');
const path = require('path');
const session = require('express-session');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(session({
  secret: 'dogwalking-secret',
  resave: false,
  saveUninitialized: true
}));

// Middleware
app.use(express.static(path.join(__dirname, '/public')));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);
app.use('/api/users',)

// Export the app instead of listening here
module.exports = app;