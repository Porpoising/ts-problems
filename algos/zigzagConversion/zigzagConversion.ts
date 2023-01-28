import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter a string and number of rows through space");
rl.on("line", (input: string) => {
  const inputArr = input.trim().split(" ");
  convert(inputArr[0], +inputArr[1]);

  rl.close()
});

function convert(s: string, numRows: number): string {
  let index = 0;
  let reversed = false
  const finalStringParts: Record<string, string> = {};

  for (let i = 0; i < s.length; i++) {
    finalStringParts[index] = !(index in finalStringParts)
      ? s[i]
      : finalStringParts[index] + s[i];

    if (!reversed) {
      if (index === numRows - 1) {
        reversed = true
        index--

      } else {
        index++
      }

    } else {
      if (index === 0) {
        reversed = false
        index++

      } else {
        index--
      }
    }
  }
  console.log(Object.values(finalStringParts).join(''));
  return Object.values(finalStringParts).join('')
}
