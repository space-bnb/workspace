const server = require('./server.js');
const { initialize } = require('./db/index.js')
require('dotenv').config()

if (process.env.NODE_ENV !== 'test') {
  initialize();
  let port = process.env.DEV_PORT || 3000;
  server.listen(port, () => console.log(`connected to port ${port}`));
};