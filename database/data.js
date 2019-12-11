const faker = require('faker');

// const products = [
//   {
//   imageKey: 'espresso01.jpg',
//   productId: 'BES870XL',
//   bucket: 'mockbbb',
//   title: 'Breville® The Barista Express™ Espresso Machine',
//   },
//   {
//     imageKey: 'blendtec01.jpg',
//     productId: 'BES880XL',
//     bucket: 'mockccc',
//     title: 'Blendtec® Professional 800 Blender in Black',
//     }
// ]

// var randomName = faker.commerce.product();



const products = []

for (let i = 1; i <= 100; i++) {
  products.push({

  imageKey: faker.image.technics(),
  productId: i,
  bucket: 'mockbbb',
  title: faker.commerce.product(),

  })

}

exports.default = products

/*
  const product = data.product;
  <div>
    <title>product.title</title>
    <button onClick={() => addToCart(product.id)}>Add to Cart</button>
  </div>

*/