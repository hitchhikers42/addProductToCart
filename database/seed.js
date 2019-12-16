

console.log("seeding script");

let delAll = () => {
  Product.deleteMany({}, function(err) {
    if (err) {
        console.log(err)
    }
  })
}

