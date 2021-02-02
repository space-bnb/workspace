const express = require('express');
const app = express();
const cors = require('cors');
const { retrieve } = require('./db/index.js')

app.use(express.static(__dirname + '/../client/dist'));
app.use(cors());

app.get('/workspace-api/workspace/:id?', function(req, res) {
  retrieve(req.params).then(repos => res.json(repos))
  .catch(err => res.status(400).json(err));
});

app.get('/favicon.ico', (req, res) => res.end());

module.exports = app;