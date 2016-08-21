const express = require('express');
const bodyParser = require('body-parser');

const app = new express();

const hello = require('./server/routers/hello-world');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./client'));

app.use('/', hello);

var server = app.listen(3000, function () {
  console.log('listening at port %s', server.address().port);
});

module.exports = server;