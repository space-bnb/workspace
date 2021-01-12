const express = require('express');
let app = express();
let seed = require('../db/index.js')

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function (req, res) {
  console.log('Got request');
  seed();
  res.end();
});

app.listen(3000, function() { console.log('connected to port 3000') });