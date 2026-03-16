var fs = require("fs");
fs.writeFile("help.txt", "You are creating the file", (e) => {
    if (e) throw e;
    else {
        fs.appendFile("help.txt", "\n You are appending the data", (e) => {
            if (e) throw e;
            else {
                fs.readFile("help.txt", "utf-8", (e, data) => {
                    if (e) throw e;
                    else {
                        console.log("Thank you for using my program");
                        fs.copyFile("help.txt", "newhelp.txt", (e) => {
                            if (e) throw e;
                            else {
                                fs.unlink("help.txt", (e) => {
                                    if (e) throw e;
                                    console.log("Task ended");
                                })
                            }
                        })
                    }
                })
            }
        });
    }
});
