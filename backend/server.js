require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 5000;
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("./models/user");
const auth = require('./Auth');

mongoose.connect("mongodb://localhost:27017/Basket", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(cors());

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongodb is connected!");
});


app.get("/", (req, res) => {
  res.cookie('cookie', 'sonam')
  res.send("Hello World!");
});

app.post("/signUp", async (req, res) => {
  const {username, password} = req.body
  try {
    let checkUser = await User.findOne({username: req.body.username});
    if(checkUser){
      res.json({
        message: `User already exist`
      })
    } else {
      let hashPassword = await bcrypt.hash(password, 12);
      let user = new User({username, password: hashPassword});
      const userData = await user.save();
      let token = await userData.generateAuthToken();
      res.json({
        token,
        message: 'SignUp Successfully',
        statusCode: 200,
      })
    } 
    }catch (err) {
      res.json({
        message: 'SignUp Failed. Please try again',
        statusCode: 400,
      })
    }
});

app.post("/login", async(req, res) => {
  try {
      const {username, password} = req.body;
      if(!username || !password){
        res.json({
          message: `Some credendials are missing`
        })
      }
      let user = await User.findOne({username});
      if(!user){
        res.json({
          message: `Enter the valid credentials(email)`
        })
      }
      let userPassword = await bcrypt.compare(password, user.password);
      if(userPassword){
          let token = await user.generateAuthToken();
          res.json({
            token,
            message: 'Login Successfully',
            statusCode: 200,
          })
      }else{
        res.json({
          message: `Enter the valid credentials(password)`
        })
      }      
  } catch (err) {
    res.json({
      message: 'Login failed. Please try again',
      error: err
    })
  }
});

app.post('/logout', auth, async(req, res) => {
  try{
    let tokens = req.body.user.tokens.filter(el => el.token !== req.body.token);
    await User.updateOne({_id: req.body.user._id}, {tokens})
    res.json({
      message: 'Logout successfull',
      statusCode: 200,
    })
  }catch(err){
    res.json({
      message: 'Logout failed. Please try again',
      error: err
    })
  }
})

app.get('/cart', auth,  (req, res) => {
  console.log(req.body.user, req.body.token)
  res.render('cart');
})


app.listen(port, () => {
  console.log(`App is listening at http://localhost:${port}`);
});
