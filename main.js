const http = require('http')
const fs = require('fs')
const path = require('path')
const qs = require("querystring")
const form = `    
<form method="post">
    <input type="text" name="productName" id="productName" placeholder="productName">
    <input type="text" name="productId" id="productId" placeholder="productId">
    <input type="number" name="productPrice" id="productPrice" placeholder="productPrice">
</form>`


var filepath = path.resolve(__dirname, "products.json")
if (!fs.existsSync(filepath)){
    fs.appendFileSync(filepath, '[]');
}

http.createServer(function (request, response) {
    switch(request.url){
        case "/":
            if (request.method === "GET"){
                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(form);
            } else if (request.method === "POST"){

            }
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('<h1>Not Found</h1>');
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');