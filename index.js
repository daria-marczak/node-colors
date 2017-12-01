var os = require("os");
var OSinfo = require("./modules/OSinfo");
var colors = require("colors");

process.stdin.setEncoding("utf-8");



process.stdin.on("readable", function() {

    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case "/exit":
                process.stdout.write("Quitting app!\n");
                process.exit();
                break;
            case "/version":
                process.stdout.write("Node version is: " + process.versions.node + "\n");
                break;
            case "/getOSinfo":
                OSinfo.print();
                break;
            default:
                process.stderr.write("Wrong instruction!\n");
                break;
        }
    }
});
