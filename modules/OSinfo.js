var os = require("os");
var timeFormatter = require("./TimeFormatter");
var colors = require("colors");

function getOSinfo() {
    var type = os.type();

    if (type === "Darwin") {
        type = "OSX";
    } else if (type === "Windows_NT") {
        type = "Windows";
    }

    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();

    console.log(colors.gray("System:"), type);
    console.log(colors.red("System release:"), release);
    console.log(colors.blue("CPU model is:"), cpu);
    timeFormatter.print();
    console.log(colors.yellow("User's name is: ") + userInfo.username + " and their catalog location is: " + userInfo.homedir);
}

exports.print = getOSinfo;
