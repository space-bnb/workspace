const express = require('express');
const app = express();
const cors = require('cors');
const { retrieve } = require('./db/index.js');
const expressStaticGzip = require('express-static-gzip');

app.get('*.js', (req, res, next) => {
  console.log(`${req.url} -> ${req.url}.gz`)
  req.url = req.url + '.gz';
  res.set("Content-Encoding", "gzip");
  res.set("Content-Type", "text/javascript");
  next();
})

app.use('/', expressStaticGzip(__dirname + '/../client/dist/'));
app.use('/buildings/:workspaceId', expressStaticGzip(__dirname + '/../client/dist/'));
app.use(cors());

app.get('/workspace-api/workspace/:id?', function(req, res) {
  retrieve(req.params).then(repos => res.json(repos))
  .catch(err => res.status(400).json(err));
});

app.get('/favicon.ico', (req, res) => res.end());

module.exports = app;