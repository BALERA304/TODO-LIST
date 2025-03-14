
import readline from "readline";

import { ArrayObjects } from "./models/ArrayObjects.js";

let arr = new ArrayObjects
arr.append('Динозавр1')
arr.append('кукла2')
arr.append('ребенок2')
console.log(arr.view())
arr.completeTask(0)
console.log(arr.view())


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'иди нахуй> '
});
rl.prompt(); // Показываем подсказку
let lines = [];

rl.on('line', (input) => {
    if (input === 'end') {
        console.log('Ввод завершен. Содержимое:');
        console.log(lines.join('\n'));
        rl.close();
    } else {
        lines.push(input);
    }
});