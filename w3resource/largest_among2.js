const prompt = require("prompt-sync")();
let a = prompt('enter first number')
let b = prompt('enter second number')

let c = a>b?'a is larger':'b is larger'
console.log(c)