var url = require("url");
var addr = "https://video.google.com:8080/ljuniversity/about?branch=CSE&year=2025#students";
var up = url.parse(addr,true);
console.log(up);
var y = up.query.year;
if (y % 4 == 0) { console.log("leap year") }
else { console.log("Not a leap year") }
process.noDeprecation = true;

