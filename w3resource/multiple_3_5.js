// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

const prompt = require('prompt-sync')();
let n = prompt('enter iteration:')

for (let i=0;i<n;i++){
    if (i%3==0 && i%5==0){
        console.log(i + ' fizzbuzz')
    }
    else if (i%3==0){
        console.log(i + ' fizz')
    }
    else if (i%5==0){
        console.log(i + ' buzz')
    }
    else{
        console.log(i)
    }
    
}