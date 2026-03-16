var fs = require("fs");
// fs.mkdirSync("ARYA");
fs.writeFileSync("ARYA/d.txt", "HI!How are you? \n Welcome to LJ University");
var data = fs.readFileSync("ARYA/d.txt", "utf-8");
var i = 0;
var v = "aeiouAEIOU";
for (let a = 0; a < data.length; a++){
    if (v.includes(data[a])) {
        i++;
    }
}
fs.appendFileSync("ARYA/d.txt", "\n Number of vowels" + i);
console.log("Task Completed");