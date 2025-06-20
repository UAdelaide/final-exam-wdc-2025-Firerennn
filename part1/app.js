const express = require('express');
const path = require('path');



const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');

app.use('/api', indexRoutes);
app.use('/api/users', userRoutes);

module.exports = app;