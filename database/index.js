const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/product';

const db=mongoose.connect(mongoUri);

const schema = new mongoose.Schema({
  itemId: Number,
  stckQnty: Number,
  qnty: Number,
  imageName: String,
  imageUrl: String,
  body: String
});

//U+1F6D2 🛒