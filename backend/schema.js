const mongoose = require('mongoose');

const { Schema } = mongoose;

const Postschema = new Schema({
  authour: String,
  time: Date,
  likes: Number,
  description: String,
  tags: [String]
})

module.exports = Postschema;