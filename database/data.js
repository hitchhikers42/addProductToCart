const faker = require('faker');

const products = []

for (let i = 1; i <= 100; i++) {
  products.push({

    imageKey: `https://picsum.photos/200`,
    productId: i,
    bucket: 'mockbbb',
    title: faker.commerce.productName(),

  })
}

console.log('these are the products in the database:' + products);

exports.default = products;
