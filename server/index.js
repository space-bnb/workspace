const express = require('express');
const path = require('path');
let app = express();
let bodyParser = require ('body-parser');
let { retrieve, remove } = require('./db/index.js')
let port = 4000;

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/buildings/:id', function (req, res) {
  console.log(`Got request for ${req.params.id}`);
  let index = path.resolve(__dirname + '/../client/dist/index.html');
  let options = { id: req.params.id };
  res.sendFile(index, options);
});

app.post('/remove', function (req, res) {
  console.log('Removing');
  remove({})
    .then(() => res.end())
})

app.post('/get/:id', function (req, res) {
  console.log('Getting ', id);
  retrieve(id)
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