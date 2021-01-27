const server = require('./server.js');
let { initialize } = require('./db/index.js')
require('dotenv').config()

if (process.env.NODE_ENV !== 'test') {
  initialize();
  let port = process.env.DEV_PORT || 0;
  server.listen(port, () => console.log(`connected to port ${port}`));
};