var server = require("http");
var route = require("./routes.js");

server.createServer(function (request, response) {
  route.front(request, response);
  route.category(request, response);
  route.article(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');
