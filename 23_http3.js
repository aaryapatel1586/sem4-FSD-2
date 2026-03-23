var http = require("http");
http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1> Welcome Students </h1>");
    // res.write("ended");
    // console.log("end");
}).listen(5001,()=>{console.log("Server Started at http://localhost:5001")});