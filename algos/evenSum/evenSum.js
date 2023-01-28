"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Enter an array numbers through a space");
rl.on("line", function (input) {
    var numArray = input.split(" ").map(function (num) {
        return parseInt(num, 10);
    });
    console.log(evenSum(numArray));
    rl.close();
});
function evenSum(numArray) {
    return numArray.reduce(function (prev, curr) {
        return curr % 2 === 0 ? prev + curr : prev;
    }, 0);
}
