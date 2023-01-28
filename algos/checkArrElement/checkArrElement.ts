import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let entries = 0
let arr1: string[]
let arr2: string[]

console.log("Enter 2 different arrays with elements through space");
rl.on("line", (input: string) => {
  entries++
  if (entries === 1) {
    arr1 = input.split(' ')
  } else {
    arr2 = input.split(' ')
    console.log(checkElements(arr1, arr2))
    rl.close();
  }
});

function checkElements(arr1: string[], arr2: string[]) {
  return arr1.filter((elem: string) => !arr2.includes(elem))
}
