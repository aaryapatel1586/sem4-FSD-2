// task
var p = require("path");
var fs = require("fs");
var mypath = "myfile/first.txt";
var base = p.basename(mypath);
var dir = p.dirname(mypath);
var newpath = dir + "/" + base;
fs.mkdir(dir, (e) => {
    if (e) { throw e; }
    else {
        console.log("folder created");
    }
});
fs.writeFile(newpath, "Hello", (e) => {
    if (e) { throw e; }
    else {
        fs.copyFile(newpath, dir + "/second.txt", (e) => {
            if (e) { throw e; }
            else {
                fs.unlink(newpath, (e) => {
                    if (e) { throw e; }
                    else {
                        console.log("Completed!!")
                    }
                })
            }
        })
    }
})


