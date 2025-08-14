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
  tags: [String],
});
mongoose.connect(process.env.MONGO_URL)
.then(_ => console.log('conneting ... '))
.catch(err => console.log(err))

app.get('/postes', async (req, res) => {
 try {
    const posts = await Post.find();
    console.log('codit get postes ===')
    res.json(posts)
  } catch (err) {
    console.log('error #' + err)
    res.json({msg : 'no posts yet or db error'})
  }
})


app.post('/form', async (req,res)=>{
  try{
  const { hisname, content, tags } = req.body
  console.log('$$$$$$$$$$$$$$$$$$$$$$$')
  console.log(`name = ${hisname}`);
  console.log(`content = ${content}`);
  console.log(`tags = ${tags}`);
  console.log('$$$$$$$$$$$$$$$$$$$$$$$');
  
  const newPost = new Post({
    authour: hisname, 
    time: new Date(), 
    likes: 0, 
    description: content, 
    tags
  })
  await newPost.save()
  
  res.json({msg: "done !"})
  } catch (err) {
    res.json({msg: "failed !"})
  }
})


// app.patch('/postes/:id', async (req, res)=> {
//   try{
//   const likedPost = await
//   Post.findByIdAndUpdate(req.params.id,
//   {inc : likes: 1 }, {new: true});
//   res.json(likedPost)
//   } catch (err) {
//     console.log(err)
//   }
// })





  app.listen(3000, _ => console.log('hello in console'))