import { ArrayObjects } from "./models/ArrayObjects.js";

let arr = new ArrayObjects


console.log(arr.view())
arr.delete(0)

arr.append('Динозавр1')
arr.append('кукла2')
arr.append('мяч3')
arr.append('Динозавр4')
arr.append('кукла5')
arr.append('мяч6')
arr.append('Динозавр7')
arr.append('кукла8')
arr.append('мяч9')

console.log(arr.view())


arr.delete(5)
arr.complite(2)
arr.complite(20)
console.log(arr.view())
