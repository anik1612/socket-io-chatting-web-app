const express = require('express');
require('dotenv').config();
const app = express();
const morgan = require('morgan');

// setup middleware
app.use(morgan('tiny'));

// import all routes
const home = require('./routes/home');

// routes middleware
app.use('/api/v1', home);

// export app.js
module.exports = app;
