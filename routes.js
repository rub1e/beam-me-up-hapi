var fs = require('fs');

module.exports = [
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
];
