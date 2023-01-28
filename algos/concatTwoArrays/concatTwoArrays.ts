import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

let entries = 0;
let arr1: number[] = [];
let arr2: number[] = [];

console.log("input numbers array through a space");
console.log("hit 'Enter'");
rl.on("line", (input: string) => {
  const numArr: number[] = input.split(" ").map((num: string) => {
    return parseInt(num, 10);
  });

  entries++;
  if (entries === 1) {
    arr1 = numArr;
  } else {
    arr2 = numArr;
    console.log("Initial Arrs:", arr1, arr2);
    concatArrays(arr1, arr2);

    rl.close();
  }
});

function concatArrays(arr1: number[], arr2: number[]): number[] {
  const result =
    arr1.length < arr2.length ? sumArrays(arr1, arr2) : sumArrays(arr2, arr1);

  console.log('Result', result);
  return result;
}

function sumArrays(arr1: number[], arr2: number[]): number[] {
  let resultingArr: number[] = arr2;

  arr1.forEach((num: number, index: number) => {
    resultingArr[index] += num;
  });

  resultingArr.forEach((num: number, index: number) => {
    if (!resultingArr[index + 1] && num > 9) {
      resultingArr.push(1);
      resultingArr[index] -= 10;

    } else if (num > 9) {
      resultingArr[index] -= 10;
      resultingArr[index + 1] += 1;
    }
  });
  return resultingArr;
}
