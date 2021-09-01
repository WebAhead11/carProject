const fs = require("fs");
const path = require("path");
function autoCompleteHandler(request, response) {
  const filePath = path.join(__dirname, "..", "data", "cars.json");

  fs.readFile(filePath, { encoding: "utf-8" }, (error, file) => {
    if (error) {
      console.log(error);
      response.writeHead(404, { "content-type": "text/html" });
      response.end("<h1>Not found</h1>");
    } else {
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify(file));
    }
  });
}

module.exports = autoCompleteHandler;
