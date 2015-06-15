var Hapi = require('hapi');
var fs = require('fs');
var server = new Hapi.Server();

server.connection({
  port: 8000,
  host: 'localhost',
});

server.route(require('./routes'));

module.exports = server;

server.start();
