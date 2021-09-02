const fs = require("fs");
const path = require("path");

const types = {
  html: "text/html",
  css: "text/css",
  js: "application/javascript",
  json: "application/json",
  jpg: "image/jpeg",
};
function publicHandler(request, response) {
  const filePath = path.join(__dirname, "..", request.url);
  const urlArray = request.url.split(".");
  const extention = urlArray[1];
  const type = types[extention];

  fs.readFile(filePath, (error, file) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not Found</h1>");
    } else {
      response.writeHead(200, { "content-type": type });
      response.end(file);
    }
  });
}
module.exports = publicHandler;
