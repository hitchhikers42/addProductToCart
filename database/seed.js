// !! start of my seed script code
const db = require('./index.js');

const products = [
  {
  imageKey: 'espresso01.jpg',
  productId: 'BES870XL',
  bucket: 'mockbbb',
  title: 'Breville® The Barista Express™ Espresso Machine',
  }
]

const insertProducts = function() {
  data.create(products)
    .then(() => db.disconnect());
};
insertProducts();


// !! end of my seed script code
