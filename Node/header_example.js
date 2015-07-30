var http = require("http");
var request1 = http.request({
  hostname: "eloquentjavascript.net",
  path: "/author",
  method: "GET",
  headers: {Accept: "application/json"}
}, function(response) {
  response.on("data", function(chunk) {
    process.stdout.write(chunk.toString());
  });
});
request1.end();
