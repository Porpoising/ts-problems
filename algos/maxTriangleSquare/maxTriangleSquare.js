import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    calculateSquare(+input)
    rl.close()
})

const calculateSquare = function (numOfAngles) {
    let innerAngle = ((Math.PI * (numOfAngles - 2)) / numOfAngles)
    possibleTrianglesNum = Math.floor(numOfAngles / 3)
    let square = possibleTrianglesNum * Math.sin(innerAngle) / 2

    console.log(square.toFixed(6))
}