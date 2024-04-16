const prompt = require('prompt-sync')();
let n = parseInt(prompt('enter iteration:'))
let temp = n
let sum = 0
let len = n.toString().length

while(temp>0){
    let digit = temp%10
    sum += digit**len
    temp = parseInt(temp/10)
}
if (sum == n){
    console.log(n + ' is an Armstrong number.');
}
else{
    console.log(n + ' is not an Armstrong number.');
}