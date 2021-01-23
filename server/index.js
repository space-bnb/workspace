const express = require('express');
const path = require('path');
let app = express();
let bodyParser = require ('body-parser');
let { retrieve } = require('./db/index.js')
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

app.get('/workspace-api/get/:id', function (req, res) {
  console.log('Getting ', req.params.id);
  retrieve({ id: req.params.id })
    .then(repo => res.json(repo[0]));
})

app.get('/workspace-api/getall', function (req, res) {
  retrieve({}) 
    .then(data => {
      console.log('Getting all data: ', data.length);
      res.json(data);
    });
});

app.get('/favicon.ico', (req, res) => res.end());

app.listen(port, function() { console.log(`connected to port ${port}`) });