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

    console.log("System:".green, type);
    console.log("System release:".red, release);
    console.log("CPU model is:".blue, cpu);
    timeFormatter.print();
    console.log("User's name is: ".yellow + userInfo.username + " and their catalog location is: " + userInfo.homedir);
}

exports.print = getOSinfo;
