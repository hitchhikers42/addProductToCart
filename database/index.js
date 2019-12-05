const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/product';

const db=mongoose.connect(mongoUri);

const schema = new mongoose.Schema({
  itemId: Number,
  stckQnty: Number,
  qnty: Number,
  imgName: String,
  imgUrl: String,
  body: String
});

const Product = mongoose.model('Product', schema);

let save = (data) => {
  let newProduct = new Product({
    itemId: data.itemId,
    stkQty: data.stkQty,
    qty: data.qty,
    imgName: data.imgName,
    imgUrl: data.imgUrl,
    body: data.body
  })
  newProduct.save(err => { if (err) return consol.log (err) });
};

let fetchAll = callback => {
  Product.then(result => {
    callback(result);
  })
};

module.exports.fetchAll = fetchAll;
module.exports.save = save;
module.exports = db;

//U+1F6D2 🛒