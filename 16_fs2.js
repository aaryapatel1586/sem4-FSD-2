// Sync/Async Example
var fs = require("fs");
fs.writeFileSync("b2.txt", "Hello! How are you");
console.log("Sync operation done");
fs.writeFile("b3.txt", "Hii", function (e) {
    if (e) console.log(e);
    else console.log("Async task completed");
})
console.log("Last line");