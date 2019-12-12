const faker = require('faker');

const products = []

for (let i = 1; i <= 100; i++) {
  products.push({

  imageKey: faker.image.image(),
  productId: i,
  bucket: 'mockbbb',
  title: faker.commerce.productName(),

  })

}

exports.default = products;
