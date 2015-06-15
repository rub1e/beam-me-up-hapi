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
      fs.readdirSync('pix',function(err,files){
        if (err) fs.mkdirSync('pix');
      });
      var piccy = fs.createWriteStream('pix/'+request.payload.title);
      piccy.write(request.payload.upload);
    }
  },
];
