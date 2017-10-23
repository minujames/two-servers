var http = require("http");

var port_1 = 7000;
var port_2 = 7500;

function tellGoodThing(request, response) {
  response.end("Hey! You are so good: " + request.url);
}

function tellFunnyThing(request, response) {
  response.end("Hey you are so funny: " + request.url);
}

var server_1 = http.createServer(tellGoodThing);

server_1.listen(port_1, function() {
  console.log("Server listening on: http://localhost:" + port_1);
});


var server_2 = http.createServer(tellFunnyThing);

server_2.listen(port_2, function() {
  console.log("Server listening on: http://localhost:" + port_2);
});