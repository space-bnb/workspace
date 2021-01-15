const express = require('express');
let app = express();
let { retrieve, seeder } = require('./db/index.js')

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', function (req, res) {
  console.log('Got request');
  seeder();
  res.end();
});

app.get('/show', function (req, res) {
  retrieve({}) 
    .then(data => {
      console.log('Getting all data: ', data.length);
      res.json(data);
    });
});

app.get('/favicon.ico', (req, res) => res.end());

app.listen(3000, function() { console.log('connected to port 3000') });