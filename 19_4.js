var eventemitter = require("events");
var ee = new eventemitter();
ee.on("add", (a, b) => {
    console.log(`Addition  is ${a + b}`);
})
ee.on("add", () => {
    console.log("Done");
    ee.emit("success");
 })
ee.on("success", () => {
    console.log("Task Completed");
})
ee.emit("add", 10, 5);