"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
console.log("Enter a string with number");
rl.on("line", function (input) {
    maxArea(input.split(" ").map(function (el) {
        return +el;
    }));
    rl.close();
});
function maxArea(height) {
    console.log(height);
    var currentMaxSquare = 0;
    var leftBorder = 0;
    var rightBorder = height.length - 1;
    while (leftBorder < rightBorder) {
        var distance = rightBorder - leftBorder;
        var leftElem = height[leftBorder];
        var rightElem = height[rightBorder];
        currentMaxSquare = Math.max(currentMaxSquare, Math.min(leftElem, rightElem) * distance);
        leftElem <= rightElem ? leftBorder++ : rightBorder--;
    }
    // BRUTE FORCE!!!
    // for (let i = 0; i < hLen - 1; i++) {
    //   for (let j = i + 1; j < hLen; j++) {
    //     let minHeight = height[i] < height[j] ? height[i] : height[j];
    //     let distance = j - i
    //     currentMaxSquare =
    //       currentMaxSquare > minHeight * distance
    //         ? currentMaxSquare
    //         : minHeight * distance;
    //   }
    // }
    console.log(currentMaxSquare);
    return currentMaxSquare;
}
