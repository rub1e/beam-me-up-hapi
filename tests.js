var assert = require('assert');
var stream = require('stream');
var fs = require('fs');
var Routes = require('./routes');

var pic = fs.readFileSync('test.jpg');
var request = new stream.Readable();

request.payload = {};
request.payload.title = 'sup';
request.payload.upload = pic;

Routes[1].handler(request);

fs.readFile('pix/sup', function(err,data){
  assert.equal(data.toString(), pic.toString());
});
