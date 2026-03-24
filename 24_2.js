// Write node.js script to print “Welcome to Home Page” with two links containing two pages
//  named as “About Us” and “Contact Us” on home page of server. If user request for About Us page
// it should display “Welcome to LJ University” in bold font-style with blue color and if user request
// for Contact Us page it should display “Email:abc@ljinstitutes.edu.in” in italic font-style with red
// color if any other request is requested it shows “Page not found” message in plaintext.
var http = require("http");
var fs = require("fs");
var url = require("url");
http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1> Welcome to my website </h1>
                 <a href="/about">About Us</a>
                 <a href="/contact">Content Us</a>`);
    }
    else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(`<h1 style="color:blue;font-style:italic"> About page </h1>`);
        res.write("<h2> lorem100 </h2>");
        res.end("HII");
    }
    else if (req.url === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(`<h1 style="color:blue;font-style:italic"> Contact page </h1>`);
        res.write("<h2> lorem200 </h2>");
        res.end("email:abc@gmail.com");
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
}).listen(8008);