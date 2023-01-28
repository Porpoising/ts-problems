import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter a string with number");
rl.on("line", (input: string) => {
  maxArea(
    input.split(" ").map((el) => {
      return +el;
    })
  );

  rl.close();
});

function maxArea(height: number[]): number {
  console.log(height);
  let currentMaxSquare = 0;
  let leftBorder = 0;
  let rightBorder = height.length - 1;

  while (leftBorder < rightBorder) {
    let distance = rightBorder - leftBorder;
    let leftElem = height[leftBorder]
    let rightElem = height[rightBorder]

    currentMaxSquare = Math.max(
      currentMaxSquare,
      Math.min(leftElem, rightElem) * distance
    );
    leftElem <= rightElem ? leftBorder++ : rightBorder-- 
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
