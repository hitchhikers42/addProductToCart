const express = require('express');
const bodyParser = require('body-parser');
const save = require('../database/index.js').save;
const del = require('../database/index.js').del;
const data = require('../database/data.js');
const fetchProduct = require('../database/index.js').fetchProduct

const app = express();
const PORT = 3000;

// seed data
del();
data.default.forEach(d => save(d));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../dist'));
app.use('/products/:productId', express.static(__dirname + '/../dist'));

app.get('/api/products/:productId/', async (req, res) => {
  const id = req.params.productId;
  const fetchedProduct = await fetchProduct(id);
  res.send(fetchedProduct);
});

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

