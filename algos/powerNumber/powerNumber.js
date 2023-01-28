"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.on('line', function (input) {
    selfPower(+input);
    rl.close();
});
function selfPower(num) {
    console.log(Math.pow(num, num));
    return Math.pow(num, num);
}
