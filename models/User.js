const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create Schema
const UserScema = new Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model('users', UserScema);