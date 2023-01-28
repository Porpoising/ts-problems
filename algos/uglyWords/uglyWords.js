import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

[entries, letterSize, structName, color] = [0, 0, '', '']

rl.on('line', (input) => {
    entries++
    if (entries === 1) {
        letterSize = +input
    } else if (entries === 2) {
        structNameArray = input.split(" ")
    } else {
        color = input
        checkUgliness(letterSize, structNameArray, color)
        rl.close()
    }
})

const checkUgliness = function (letterSize, structNameArray, color) {
    let uglyWords = 0
    let colorIndex = 0

    for (let wordIndex = 0; wordIndex < structNameArray.length; wordIndex++) {
        let remainingWordLength = structNameArray[wordIndex].length

        while (colorIndex < letterSize) {
            console.log('Word:', structNameArray[wordIndex])
            console.log('colorIndex:', colorIndex)

            if (!color[colorIndex + 1] || remainingWordLength === 0) {
                console.log('Block 2:', !color[colorIndex + 1], remainingWordLength);
                console.log('--------------------------');
                break
            } else if (color[colorIndex] === color[colorIndex + 1] && color[colorIndex + 1]) {
                console.log('Block 1:', color[colorIndex], color[colorIndex + 1]);
                colorIndex += remainingWordLength
                uglyWords++
                console.log('Block 1:', colorIndex, remainingWordLength);
                console.log('--------------------------');
                break
            }
            colorIndex++
            remainingWordLength--
            console.log('NoBlock:', remainingWordLength);
            console.log('--------------------------');
        }
    }
    console.log(uglyWords)
}