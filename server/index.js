const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('../database/index.js');
const middleware = require('./middleware');

const PORT = 8800;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//app.use(express.static(__dirname + '/../dist'));

//lists all available products
app.get('/api/products', (req, res) => {
  return res.json(data.products);
});

//provide list of products in cart
app.post('/api/products', (req, res) => {
  console.log(`POST req received ${req.body}`);
  let products = [], id = null;
  let cart = JSON.parse(req.body.cart);
  if (!cart) return res.json(products)
  for (var i = 0; i < data.products.length; i++) {
    id = data.products[i].id.toString();
    if (cart.hasOwnProperty(id)) {
      data.products[i].qty = cart[id]
      products.push(data.products[i]);
    }
  }
  return res.json(products);
});

app.post('/api/auth', (req, res) => { //signs in user
  let user = data.users.filter((user) => {
    return user.name == req.body.name && user.password == req.body.password;
  });
  if (user.length) {
    //create a token using user name and password valid for 2 hours
    let token_payload = {name: user[0].name, password: user[0].password};
    let token = jwt.sign(token_payload, "jwt_secret_password", { expiresIn: '2h' });
    let response = { message: 'Token Created, Authentication Successful!',
                    token: token };

    //return the information including token as JSON
    return res.status(200).json(response);

  } else {
    return res.status("401").json("Authentication failed. admin not found.");
  }
});

app.get('/api/pay', middleware, (req, res) => { //checkout route for signed in users
  return res.json("Payment Successful");
});

app.listen(PORT, () => {
  console.log(`api running on port ${PORT}`);
});