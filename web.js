var express = require('express');
var fs = require('fs');

var file = fs.readFileSync('index.html', function(err, data) {
	if (err) throw err;
		console.log(data);
});

var buffer = new Buffer(file, "utf-8");
buffer = buffer.toString('utf-8');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buffer);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

