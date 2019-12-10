const express = require('express');
const bodyParser = require('body-parser');
// const module2 = require('../database/index.js');
const save = require('../database/index.js').save;
const del = require('../database/index.js').del;
// const fetchAll = require('../database/index.js').fetchAll;
const data = require('../database/data.js');
// const app = express();
// const jwt = require('jsonwebtoken');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const data = require('../database/index.js');
// const middleware = require('./middleware');

const app = express();
const PORT = 8800;

// seed data
del();
data.default.forEach(d => save(d));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../dist'));

app.get('/api/itemModule', function(req, res) {
  res.send('hello world! Jesus is King!');
  //status(200);
  //module2.find().sort({createdAt: 1}).then(result => {
  //   res.send(result);
  // });
});

// axios('/api/product', {
//   method: 'POST',
//   body: {title: 'asdf', imageKey: 'asdfqwer', productId: 'qevfq', }
// })


//this will save a new product
app.post('/api/save-product', (req, res) => {
  console.log(req.body);
  const title = req.body.title;
  const imageKey = req.body.imageKey;
  const productId = req.body.productId;
  const bucket = req.body.bucket;
  save({title, imageKey, productId, bucket})
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

