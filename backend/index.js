const mongoose = require('mongoose');
const express = require('express');
const app = express();
app.use(express.json());
const Postschema = require('./schema');


const Post = mongoose.model('Post', Postschema);
mongoose.connect('mongodb+srv://antyscript:5h89PmskW8J2IFr4@coditdb.utosfel.mongodb.net/?retryWrites=true&w=majority&appName=coditdb')
.then(_ => console.log('conneting ... '))
.catch(err => console.log(err))

app.get('/postes', (req, res) => {
  res.json({word :'hello frombackend'})
})
  // try {
  //   const posts = await Post.find();
  //   res.json(posts)
  // } catch (err) {
  //   console.log('error #')
  // }
  
  
  app.listen(3000, _ => console.log('hello in console'))