const http = require("http");
const PORT = 3001;

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end(JSON.stringify(require('./data/hello.json')));
      break;
    case "/employees":
      res.writeHead(200);
      res.end(JSON.stringify(require('./data/employees.json')));
      break;
    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: "Resource not found" }));
  }
}

const server = http.createServer(requestListener);
server.listen(PORT);

console.log("Running mockserver on post 3001");