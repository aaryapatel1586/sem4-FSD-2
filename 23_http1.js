// http module
var http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h3> Welcome Students </h3>");
    res.end();
}).listen(5001,()=>{console.log("Server Started at http://localhost:5001")});

