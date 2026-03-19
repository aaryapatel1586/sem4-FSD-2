var eventemitter = require("events");
var ee = new eventemitter();
var fun1 = (m) => {
    if (m < 0) {
        console.log("Enter valid radius")
    }
    else {
        var s = 4 * m
        console.log(`perimeter of square:${s}`)
    };
}
var fun2 = (m) => {
    if (m < 0) {
        console.log("Enter valid value")
    }
    else {
        var c = 2 * 3.14 * m
        console.log(`perimeter of circle:${c}`)
    };
}
ee.on("e1", fun1);
ee.on("e2", fun2);
ee.emit("e1",8);
ee.emit("e2", -8);