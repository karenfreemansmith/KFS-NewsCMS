function front(request, response) {
  if(request.url === "/") {
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.end("front page");
  }
}

function category(request, response) {
  if(request.url === "/category") {
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.end("category page");
  }
}

function article(request, response) {
  if(request.url === "/category/article") {
    response.writeHeader(200, {"Content-Type": "text/plain"});
    response.end("article page");
  }
}

module.exports.front = front;
module.exports.category = category;
module.exports.article = article;
