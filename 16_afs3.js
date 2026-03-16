var fs = require("fs");
// fs.mkdir("afs", (e) => {
//     if(e) throw e;
//     console.log("folder created");
// });
// fs.writeFile("afs/my1.txt", "Asynchronous Task", (e) => {
//     if(e) throw e;
//     console.log("Written");
// });
// fs.appendFile("afs/my1.txt", "Hi", (e) => {
//     if(e) throw e;
//     console.log("appended");
// });
// fs.readFile("afs/my1.txt", "utf-8", (e, data) => {
//     if(e) throw e;
//     console.log(data);
// })
// fs.rename("afs/my1.txt", "afs/newmy1.txt", (e) => {
//     if (e) throw e;
//     console.log("renamed");
// });
// fs.unlink("afs/newmy1.txt", (e) => {
//     if (e) console.log("No such file found" + e);
//     console.log("Deleted");
// });
// fs.copyFile("afs/newmy1.txt", "mynew.txt", (e) => {
//     if (e) throw e;
//     console.log("Content Copied");
// });
fs.rmdir("afs", (e) => {
    if (e) throw e;
    console.log("Folder Deleted");
})