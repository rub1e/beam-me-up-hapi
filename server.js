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
      var piccy = fs.createWriteStream('pix/'+request.payload.title);
      piccy.write(request.payload.upload);
    }
  },
  {
    path: '/pics/{picname}',
    method: 'GET',
    handler: function(request, reply){
      reply.file('pix/'+request.params.picname);
    }
  },
  {
    path: '/view/{picname}',
    method: 'GET',
    handler: function(request, reply){
      reply('<img src = "/pics/' + request.params.picname + '">');
    }
  }
]);

server.start();
