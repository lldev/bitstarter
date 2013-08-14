var express = require('express');
var fs = require('fs');
require('buffer');

// var file = fs.readFileSync('./index.html', {encoding: 'utf8'}, function(err, data) {
// 	if (err) throw err;
// 	console.log(data);
// });

/* console.log(file); */

var buffer = new Buffer(fs.readFileSync('index.html'), 'utf8');

console.log(buffer);

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


