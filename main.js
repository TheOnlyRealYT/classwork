const http = require('http')
const fs = require('fs')
const path = require('path')
const qs = require("querystring")

var filepath = path.resolve(__dirname, "products.json")
if (!fs.existsSync(filepath)){
    fs.appendFileSync(filepath, '[]');
}

http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');