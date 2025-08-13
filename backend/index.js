const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();
app.use(express.json());
const { Schema } = mongoose;
const cors = require('cors');
app.use(cors({ origin: 'https://codyit.vercel.app'}))



const Post = mongoose.model('Post', {
  authour: String,
  time: Date,
  likes: Number,
  description: String,
  tags: [String]
});
mongoose.connect(process.env.MONGO_URL)
.then(_ => console.log('conneting ... '))
.catch(err => console.log(err))

app.get('/postes', (req, res) => {
  console.log('codit get postes ===')
  res.json({word :'hello frombackend'})
})
/*  try {
    const posts = await Post.find();
    res.json(posts)
  } catch (err) {
    console.log('error #')
  }
  */
  app.listen(3000, _ => console.log('hello in console'))