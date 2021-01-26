const server = require('./server.js');
require('dotenv').config()

if (process.env.NODE_ENV !== 'test') {
  server.listen(process.env.DEV_PORT, function() { 
    server.initializer();
    console.log(`connected to port ${process.env.DEV_PORT}`) 
  });
};