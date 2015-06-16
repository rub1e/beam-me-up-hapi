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
      fs.stat('pix',function(err,stats){
        if (err) {
          fs.mkdirSync('pix'
        )};
        var piccy = fs.createWriteStream('pix/'+request.payload.title);
        piccy.write(request.payload.upload);
      });
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
];
