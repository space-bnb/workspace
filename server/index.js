const express = require('express');
const path = require('path');
let app = express();
let bodyParser = require ('body-parser');
let { retrieve, initializer } = require('./db/index.js')
require('dotenv').config()

app.use(express.static(__dirname + '/../client/dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/buildings/:id', function (req, res) {
  console.log(`Got request for ${req.params.id}`);
  res.redirect(`http://localhost:${process.env.DEV_PORT}`);
  res.end();
});

app.get('/workspace-api/workspace/:id', function (req, res) {
  console.log('Getting ', req.params.id);
  retrieve({ id: req.params.id })
    .then(repo => res.json(repo[0]));
})

app.get('/workspace-api/workspaces', function (req, res) {
  retrieve({}) 
    .then(data => {
      console.log('Getting all data: ', data.length);
      res.json(data);
    });
});

app.get('/favicon.ico', (req, res) => res.end());

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.DEV_PORT, function() { 
    initializer();
    console.log(`connected to port ${process.env.DEV_PORT}`) 
  });
};

module.exports = app;