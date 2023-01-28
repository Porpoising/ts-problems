"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
console.log("Enter a number");
rl.on("line", function (input) {
    reverse(+input);
    rl.close();
});
function reverse(num) {
    var absolute = Math.abs(num);
    var result = 0;
    var sign = num < 0;
    while (absolute > 0) {
        result = result * 10 + (absolute % 10);
        absolute = Math.floor(absolute / 10);
    }
    return result > 0x7fffffff ? 0 : sign ? -result : result;
}
