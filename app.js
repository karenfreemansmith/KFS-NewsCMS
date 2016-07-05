var server = require("http");
var route = require("./routes.js");

server.createServer(function (request, response) {
  route.front(request, response);
  route.category(request, response);
  route.article(request, response);
  route.search(request, response);
  route.admin(request, response);
  route.settings(request, response);
  route.categories(request, response);
  route.articles(request, response);
  route.assets(request, response);
  //route.error(request, response);
}).listen(3000);
console.log('Server running at http://<workspace-url>/');
