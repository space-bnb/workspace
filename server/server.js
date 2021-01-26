const express = require('express');
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
  if (!req.params.id) { res.status(400).json("No ID given") }
  retrieve({ id: req.params.id })
    .then(repo =>  {
      if (repo.length === 0) { res.status(400).json("ID not found") }
      else { res.json(repo) }
    });
})

app.get('/workspace-api/workspaces', function (req, res) {
  retrieve({}) 
    .then(data => {
      res.json(data);
    });
});

app.get('/favicon.ico', (req, res) => res.end());

app.initializer = initializer;

module.exports = app;