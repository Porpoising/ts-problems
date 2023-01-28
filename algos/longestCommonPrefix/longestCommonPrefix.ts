import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter a number");
rl.on("line", (input: string) => {
  longestCommonPrefix(+input)

  rl.close();
});
