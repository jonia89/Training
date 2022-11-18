const http = require("http");

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify({ hello: "world" }));
};

const server = http.createServer(requestListener);
server.listen(8080);
