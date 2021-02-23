const express = require('express');
const app = express();

let router = require('./routers/upload.router');
app.use('/', router);

// Create a Server
const server = app.listen(4141, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log('App listening at http:4141', host, port);
});
