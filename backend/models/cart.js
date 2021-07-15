const mongoose = require("mongoose");
const { Schema } = mongoose;
// const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');

const cartSchema = new Schema({
  item: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
  
});


const Cart = new mongoose.model("Cart", cartSchema);
module.exports = Cart;