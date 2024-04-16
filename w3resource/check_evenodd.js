const prompt = require('prompt-sync')();
let n = prompt('enter iteration:')
for (let i = 1; i <= n; i++){
    if (i%2==0){
        console.log(i + ' is a even number')
    }
    else{
        console.log(i + ' is a odd number')
    }
}