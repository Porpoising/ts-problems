import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter a number");
rl.on("line", (input: string) => {
  isPalindrome(+input);

  rl.close();
});

function isPalindrome(num: number): boolean {
  if (num < 0) {
    console.log(false);

    return false;
  }

  let toReverse = num;
  let revertedNum = 0;
  while (toReverse > 0) {
    revertedNum = revertedNum * 10 + (toReverse % 10);
    toReverse = (toReverse - (toReverse % 10)) / 10;
    
    console.log(toReverse, revertedNum);
  }

  console.log(revertedNum === num ? true : false);
  return revertedNum === num ? true : false;
}
