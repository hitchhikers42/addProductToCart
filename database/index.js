const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/product';

const db=mongoose.connect(mongoUri);
//////////////////
exports.default = db;

const schema = new mongoose.Schema({
  imageKey: String,
  productId: String,
  bucket: String,
  title: String,
});

//Product is a model that connects to schema
//and puts the repos in the database
const Product = mongoose.model('Product', schema);

let save = (data) => {
  let newProduct = new Product({
    imageKey: data.imageKey,
    productId: data.productId,
    bucket: data.bucket,
    title: data.title,
  })
  newProduct.save(err => { if (err) return console.log (err) });
};

let del = () => {
  Product.deleteMany({}, function(err) {
    if (err) {
        console.log(err)
    }
  })
}

let fetchAll = callback => {
  Product.then(result => {
    callback(result);
  })
};

exports.fetchAll = fetchAll;
exports.save = save;
exports.del = del;


//U+1F6D2 🛒