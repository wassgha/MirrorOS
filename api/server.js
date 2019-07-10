/* eslint-disable multiline-comment-style */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const socketIo = require('socket.io');

const Keys = require('../keys');

const apiRoutes = require('./routes');

const server = express();

// Allows for cross origin domain request:
server.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// MongoDB
mongoose.Promise = Promise;
mongoose.connect(
  Keys.MONGODB_URI,
  { useNewUrlParser: true }
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// API routes
server.use('/api/v1', apiRoutes);

// Static routes
server.use('/uploads', express.static('uploads'));

const finalServer = server.listen(Keys.PORT, err => {
  if (err) throw err;
  // eslint-disable-next-line
  console.log('> Ready on http://localhost:' + Keys.PORT);
});

// Socket.io
io = socketIo.listen(finalServer);
