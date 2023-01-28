import { createInterface } from 'readline';

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input: string) => {
    selfPower(+input)
    rl.close()
})

function selfPower(num: number): number {
    console.log(num ** num)
    return num ** num
}