var views = require("./views.js");
var html='"Content-Type": "text/html"';

function pages(request, response) {
  response.writeHeader(200, {html});
  views.view("header", {stylesheet:"css/styles.css"}, response);
  if(request.url === "/") {
    views.view("front", {}, response);
  } else if(request.url === "/category") {
    views.view("category", {}, response);
  } else if(request.url === "/category/article") {
    views.view("article", {}, response);
  } else if(request.url === "/search") {
    views.view("search", {}, response);
  } else if(request.url === "/admin") {
    views.view("admin", {}, response);
  } else if(request.url === "/admin/settings") {
    views.view("settings", {}, response);
  } else if(request.url === "/admin/categories") {
    views.view("categories", {}, response);
  } else if(request.url === "/admin/articles") {
    views.view("articles", {}, response);
  } else if(request.url === "/admin/assets") {
    views.view("media", {}, response);
  } else {
    views.view("404", {}, response);
  }
  views.view("footer", {}, response);
  response.end();
}

module.exports.pages = pages;
