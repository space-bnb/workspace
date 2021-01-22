const express = require('express');
let app = express();
let bodyParser = require ('body-parser');
let { retrieve, remove, seeder } = require('./db/index.js')
let port = 4000;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/seed', function (req, res) {
  console.log('Got request');
  seeder();
  res.end()
});

app.post('/remove', function (req, res) {
  console.log('Removing');
  remove({})
    .then(() => res.end())
})

app.post('/get', function (req, res) {
  console.log('Getting ', req.body);
  retrieve(req.body)
    .then(repo => res.json(repo));
})

app.get('/getall', function (req, res) {
  retrieve({}) 
    .then(data => {
      console.log('Getting all data: ', data.length);
      res.json(data);
    });
});

app.get('/favicon.ico', (req, res) => res.end());

app.listen(port, function() { console.log(`connected to port ${port}`) });