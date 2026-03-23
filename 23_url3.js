var fs = require("fs");
var url = require("url");
var p = "https://www.example.com/test?t1=20&t2=25&t3=22&t4=21"
var up = url.parse(p,true);
console.log(up);
var T1 = parseInt(up.query.t1);
var T2 =parseInt( up.query.t2);
var T3 =parseInt( up.query.t3);
var T4 =parseInt(up.query.t4);
var total = T1 +T2 + T3 + T4;

fs.writeFileSync("marks.txt", "marks");
fs.appendFileSync("marks.txt", `\n marks of t1: ${T1}`);
fs.appendFileSync("marks.txt", `\n marks of t1: ${T2}`);
fs.appendFileSync("marks.txt", `\n marks of t1: ${T3}`);
fs.appendFileSync("marks.txt", `\n marks of t1: ${T4}`);
fs.appendFileSync("marks.txt", `\n Total marks: ${total}`);
var r1 = fs.readFileSync("marks.txt", "utf-8");
console.log(r1);
process.noDeprecation = true;
