var http = require("http");
var fs = require("fs");
var url = require("url");
var addr = "http://localhost:5055/24_my.html";
var p = url.parse(addr, true);
http.createServer((req, res) => {
    // req.url instead of p.pathname
    fs.readFile("." + p.pathname, (e, d) => {
        if (e) {
            res.end("No File");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(d);
        }
    })
}).listen(5055)
process.noDeprecation = true;