"use strict";
exports.__esModule = true;
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
console.log("Enter a string and number of rows through space");
rl.on("line", function (input) {
    var inputArr = input.trim().split(" ");
    convert(inputArr[0], +inputArr[1]);
    rl.close();
});
function convert(s, numRows) {
    var index = 0;
    var reversed = false;
    var finalStringParts = {};
    for (var i = 0; i < s.length; i++) {
        finalStringParts[index] = !(index in finalStringParts)
            ? s[i]
            : finalStringParts[index] + s[i];
        if (!reversed) {
            if (index === numRows - 1) {
                reversed = true;
                index--;
            }
            else {
                index++;
            }
        }
        else {
            if (index === 0) {
                reversed = false;
                index++;
            }
            else {
                index--;
            }
        }
    }
    console.log(Object.values(finalStringParts).join(''));
    return Object.values(finalStringParts).join('');
}
