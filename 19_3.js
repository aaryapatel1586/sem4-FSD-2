var eventemitter = require("events");
var ee = new eventemitter();
ee.on("add", (a, b) => {
    console.log(`Addition  is ${a + b}`);
})
ee.on("add", () => { console.log("Done") })
ee.emit("add", 5,10);