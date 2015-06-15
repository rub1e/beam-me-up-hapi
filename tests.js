var assert = require('assert');
var stream = require('stream');
var fs = require('fs');
var Routes = require('./routes');

function replyMaker(string,fileName){
  var reply = function(string2){assert.equal(string, string2);};
  reply.file = function(fileName2){assert.equal(fileName, fileName2);};
  return reply;
}

var pic = fs.readFileSync('test.jpg');
var request = new stream.Readable();
var reply = replyMaker('<img src = "/pics/sup">', 'pix/sup');

request.payload = {};
request.payload.title = 'sup';
request.payload.upload = pic;

Routes[1].handler(request);

fs.readFile('pix/sup', function(err,data){
  assert.equal(data.toString(), pic.toString());
});

request.params = {};
request.params.picname = 'sup';

Routes[2].handler(request,reply);

Routes[3].handler(request,reply);
