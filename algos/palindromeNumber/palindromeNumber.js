"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
console.log("Enter a number");
rl.on("line", function (input) {
    isPalindrome(+input);
    rl.close();
});
function isPalindrome(num) {
    if (num < 0) {
        console.log(false);
        return false;
    }
    var toReverse = num;
    var revertedNum = 0;
    while (toReverse > 0) {
        revertedNum = revertedNum * 10 + (toReverse % 10);
        toReverse = (toReverse - (toReverse % 10)) / 10;
        console.log(toReverse, revertedNum);
    }
    console.log(revertedNum === num ? true : false);
    return revertedNum === num ? true : false;
}
