import { createInterface } from "readline";
import { runInThisContext } from "vm";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Enter a string");
rl.on("line", (input: string) => {
  cppAtoi(input);

  rl.close();
});

function cppAtoi(str: string) {
  let sign = 1;
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "-") {
      if (result === 0) {
        sign = -1;
        continue;
      }
      console.log(result);

      break
    }

    // console.log(str[i].match(/[a-zA-z]/) && !parseInt(result, 10));

    if (str[i].match(/[a-zA-z]/) && result === 0) {
      console.log(0);

      return 0;
    }

    result = parseInt(str[i], 10) ? result * 10 + parseInt(str[i], 10) : result;
  }

  console.log(result > 0x7fffffff ? sign * 0x7fffffff + 1 : sign * result);
}
