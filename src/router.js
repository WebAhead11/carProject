const homeHandler = require("./handlers/homepage");
const publicHandler = require("./handlers/public");
const missingHandler = require("./handlers/missing.js");
const autoCompleteHandler = require("./handlers/autoCompHandler");
function router(request, response) {
  if (request.url === "/") {
    homeHandler(request, response);
  } else if (request.url.includes("public")) {
    publicHandler(request, response);
  } else if (request.url === "/autocomp") {
    autoCompleteHandler(request, response);
  } else {
    missingHandler(request, response);
  }
}
module.exports = router;
