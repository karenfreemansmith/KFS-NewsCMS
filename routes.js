var views = require("./views.js");
var html='"Content-Type": "text/html"';

function front(request, response) {
  if(request.url === "/") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("front", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function category(request, response) {
  if(request.url === "/category") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("category", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function article(request, response) {
  if(request.url === "/category/article") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("article", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function search(request, response) {
  if(request.url === "/search") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("search", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function admin(request, response) {
  if(request.url === "/admin") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("admin", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function settings(request, response) {
  if(request.url === "/admin/settings") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("settings", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function categories(request, response) {
  if(request.url === "/admin/categories") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("categories", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function articles(request, response) {
  if(request.url === "/admin/articles") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("articles", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function assets(request, response) {
  if(request.url === "/admin/assets") {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("media", {}, response);
    views.view("footer", {}, response);
    response.end();
  }
}

function error(request, response) {
    response.writeHeader(200, {html});
    views.view("header", {stylesheet:"css/styles.css"}, response);
    views.view("error", {}, response);
    views.view("footer", {}, response);
    response.end();
}

module.exports.front = front;
module.exports.category = category;
module.exports.article = article;
module.exports.search = search;
module.exports.admin = admin;
module.exports.settings = settings;
module.exports.categories = categories;
module.exports.articles = articles;
module.exports.assets = assets;
module.exports.error = error;
