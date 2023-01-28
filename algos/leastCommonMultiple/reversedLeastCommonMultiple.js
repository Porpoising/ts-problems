const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    returnMinimalLCM(+input)
    rl.close()
})

const returnMinimalLCM = function (input) {
    let min = 1
    if (input % 2 === 0) {
        min = input / 2

    } else if (input % 3 === 0) {
        min = input / 3
        
    } else if (input % 5 === 0) {
        min = input / 5

    } else if (input % 7 === 0) (
        min = input % 7
    )
    console.log(min, input - min)
}