var fs = require("fs");
const shape = [
    {
        "name": "circle",
        "d":8
    },
    {
        "name": "square",
        "s":10
    }

]
var d=JSON.stringify(shape)
fs.writeFileSync("shape.txt", d);
var cp = 3.14 * shape[0].d;
var sp = 4 * shape[1].s;
fs.appendFileSync("shape.txt", `perimeter of circle is ${cp}`);
fs.appendFileSync("shape.txt", `perimeter of circle is ${sp}`);
var r2 = fs.readFileSync("shape.txt", "utf-8");
console.log(r2);

