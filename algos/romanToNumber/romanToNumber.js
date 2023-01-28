const romanString = "MCMXCVII"

const romanNums = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

const romanToInt = function (s) {
    let output = null;
    let previous = null;
    let count = 1;

    for (let i = 0; i < s.length; i++) { //"CDXXXIII"
        let current = romanNums[s[i]]

        if (i >= 1 && previous < current) {
            output += current - (previous * 2 * count)
            previous = current
            if (count > 1) {
                count = 1
            }

        } else if (previous === current) {
            count += 1
            output += current
            
        } else {
            previous = current
            output += current
            if (count > 1) {
                count = 1
            }
        }
    }
    delete previous
    delete current
    console.log(output)
};
