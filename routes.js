var fs = require('fs');

module.exports = [
  {
    path: '/',
    method: 'GET',
    handler: function(request, reply){
      reply.file('index.html');
    }
  },
];
