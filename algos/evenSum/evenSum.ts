import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter an array numbers through a space");
rl.on("line", (input: string) => {
  const numArray: number[] = input.split(" ").map((num: string) => {
    return parseInt(num, 10);
  });
  console.log(evenSum(numArray));

  rl.close();
});

function evenSum(numArray: number[]): number {
  return numArray.reduce((prev: number, curr: number) => {
    return curr % 2 === 0 ? prev + curr : prev;
  }, 0);
}
