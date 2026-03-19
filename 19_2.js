// Event Module
var eventemitter = require("events");
var ee = new eventemitter();
// ee.emit(event, arg1, arg2,...);
// ee.on(event, (p1, p2) => { });
// ee.addListener(",");
// ee.removeListener(event);
// ee.removeAllListeners(event);
ee.on("start",()=>{console.log("First execute")})
ee.emit("start");
