const express = require('express');
const bodyParser = require('body-parser');

const module2 = require('../database/index.js');

const app = express();
const PORT = 8800;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../dist'));

app.get('/api/itemModule', function(req, res) {
  res.status(200);
  module2.find().sort({createdAt: 1}).then(result => {
    res.send(result);
  });
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});