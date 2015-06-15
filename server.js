var Hapi = require('hapi');
var fs = require('fs');
var server = new Hapi.Server();

server.connection({
  port: 8000,
  host: 'localhost',
});

server.route([
  {
    path: '/',
    method: 'GET',
    handler: function(request, reply){
      reply.file('index.html');
    }
  },
  {
    path: '/upload',
    method: 'POST',
    handler: function (request, reply){
      var piccy = fs.createWriteStream('pic.jpg');
      piccy.write(request.payload.upload);
      var picReply = fs.createReadStream('pic.jpg');
    }
  },
  {
    path: '/pic.jpg',
    method: 'GET',
    handler: function(request, reply){
      reply.file('pic.jpg');
    }
  },
  {
    path: '/default',
    method: 'GET',
    handler: function(request, reply){
      reply('<img src = "pic.jpg">');
    }
  }
]);

server.start();
