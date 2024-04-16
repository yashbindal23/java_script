const prompt = require('prompt-sync')();
// age of a person lies between 10 -20

let b = 15
if (b>10 && b<20){
    console.log('yes!!!')
}
else{
    console.log('no!!!')
}




// demonstrate the use of switch case
let c = prompt('enter case:')
switch (c) {
    case 'yash':
        console.log('hi i am first name')
        break;
    case 'bindal':
        console.log('hi i am last name')
        break;

    default:
        console.log('fuck off!!')
        break;
}




// number is divisible by 2 and 3

let d = prompt('enter number:')
if (d%3==0 && d%2==0){
    console.log('d is divisible by both 2 and 3')
}
else{
    console.log('d is not divisible by both')
}




// number is divisible by 2 or 3

let e = prompt('enter number:')
if (e%2==0){
    console.log('d is divisible by 2')
}
else if (e%3==0){
    console.log('d is divisible by 3')
}
else{
    console.log('d is not divisible by both')
}




// candidate is eligible to drive
let a = prompt('enter your age:')
a = parseInt(a)
if (a>18){
    console.log('you are eligible to drive')
}
else if (a==18){
    console.log('you are eligible to drive')
}
else{
    console.log('fuck off!!!')
}

//2nd method

let f = a>18?'you can drive':'fuck off!!! short'
console.log(f)