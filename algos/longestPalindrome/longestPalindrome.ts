import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter a string");
rl.on("line", (input: string) => {
  longestPalindrome(input);

  rl.close();
});

function longestPalindrome(s: string): string {
  let leftBorder = 0;
  let rightBorder = 2;
  let currentPalindrome = s[0];

  while (leftBorder < s.length) {
    while (rightBorder < s.length + 1) {
      let currentSubstr = s.slice(leftBorder, rightBorder);
      if (currentPalindrome.length <= currentSubstr.length) {
        currentPalindrome =
          currentSubstr === currentSubstr.split("").reverse().join("")
            ? currentSubstr
            : currentPalindrome;
      }

      continue
    }

    rightBorder = leftBorder + 2;
  }

  console.log(currentPalindrome);
  return currentPalindrome
}
