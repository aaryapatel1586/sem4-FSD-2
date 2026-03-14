var fs = require("fs");
// fs.mkdirSync("fs"); 
fs.writeFileSync("fs/my.txt", "B2 Students");
fs.appendFileSync("fs/my.txt", "\n Node JS tutorial");
var r1 = fs.readFileSync("fs/my.txt", "utf-8");
console.log(r1);
fs.writeFileSync("fs/mynew.txt", "JSON Complete");
fs.appendFileSync("fs/mynew.txt", r1);
var r2 = fs.readFileSync("fs/mynew.txt", "utf-8");
console.log(r2);

fs.copyFileSync("fs/my.txt", "test.txt");  

