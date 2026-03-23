var http = require("http");
var fs = require("fs");
http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end('<img src="img.jpg"/>');
}
else if (req.url === "/img.jpg") {
      var i = fs.readFileSync("img.jpg");
      res.writeHead(200, { "Content-Type": "image/png" });
      res.end(i);
    }
  else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h2> Page Not Found </h2>");
    }
}).listen(7001, () => { console.log("Server Started at http://localhost:7001") });
