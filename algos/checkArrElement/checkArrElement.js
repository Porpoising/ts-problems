"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
var entries = 0;
var arr1;
var arr2;
console.log("Enter 2 different arrays with elements through space");
rl.on("line", function (input) {
    entries++;
    if (entries === 1) {
        arr1 = input.split(' ');
    }
    else {
        arr2 = input.split(' ');
        console.log(checkElements(arr1, arr2));
        rl.close();
    }
});
function checkElements(arr1, arr2) {
    return arr1.filter(function (elem) { return !arr2.includes(elem); });
}
