import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter a number");
rl.on("line", (input: string) => {
  reverse(+input);

  rl.close();
});

function reverse(num: number): number {
  let absolute = Math.abs(num);
  let result = 0;
  let sign = num < 0;

  while (absolute > 0) {
    result = result * 10 + (absolute % 10);
    absolute = Math.floor(absolute / 10);
  }

  return result > 0x7fffffff ? 0 : sign ? -result : result;
}
