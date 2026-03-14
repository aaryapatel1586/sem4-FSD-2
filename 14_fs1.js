var fs = require("fs");
// fs.mkdirSync("abc");   //for create Folder
fs.writeFileSync("temp.txt", "Hello")  //create file

// fs.writeFileSync("./abc/temp.txt")
// fs.writeFileSync("abc/temp.txt")

var r = fs.readFileSync("temp.txt");
console.log(r);  //it will give output in buffer language
console.log(r.toString());

fs.appendFileSync("temp.txt", "\n How Are you???");
var r1 = fs.readFileSync("temp.txt", "utf-8");
console.log(r1);

fs.renameSync("temp.txt", "newtemp.txt");
fs.unlinkSync("newtemp.txt");  //for delete particular file
fs.rmdirSync("abc"); //for delete folder