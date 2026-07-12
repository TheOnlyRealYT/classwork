const http = require('http')
const fs = require('fs')
const path = require('path')
const qs = require("querystring")
const form = `    
<form method="post" action="/">
    <h1>Enter Product</h1>
    <input type="text" name="productName" id="productName" placeholder="productName"><br>
    <input type="number" name="productPrice" id="productPrice" placeholder="productPrice"><br>
    <input type="submit" value="Submit">
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
                let body = "";
                request.on("data",  (chunk) => {
                    body += chunk;
                })
                request.on("end", ()=>{
                    let parsed = qs.parse(body);
                    let product = {};
                    product.productName = parsed.productName;
                    product.productPrice = parsed.productPrice;
                    let products = JSON.parse(fs.readFileSync(filepath));
                    products.push(product);
                    fs.writeFileSync(filepath, JSON.stringify(products))
                    response.writeHead(302, {location: "/"});
                    response.end();
                })
            } else {
                response.writeHead(400, {'Content-Type': 'text/html'});
                response.end('<h1>Bad Request</h1>');
            }
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/html'});
            response.end('<h1>Not Found</h1>');
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');