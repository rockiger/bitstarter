var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.logger());

var file = fs.readFileSync("index.html");
var buffer = new Buffer(file);

app.get('/', function(request, response) {
    response.send(buffer.toStr());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});