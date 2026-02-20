import { random } from './random.js'
let r = random()
const arr = r.arr(5,true,1,10,"abc",3,undefined,undefined,1)
let str = ""
console.log(arr)
for(let i = 0 ; i <= arr.length - 1;i++){
    str += String(arr[i])
}
console.log(str)
console.log(arr.join(""))
