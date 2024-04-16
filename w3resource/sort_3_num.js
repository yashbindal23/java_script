const prompt = require('prompt-sync')();
let x = prompt('enter number:')
let y = prompt('enter number:')
let z = prompt('enter number:')

if(x>y && x>z){
    if(y>z){
        console.log(z,y,x)
    }
    else if(y<z){
        console.log(y,z,x)
    }
}
else if(x<y && y>z){
    if(x>z){
        console.log(z,x,y)
    }
    else if(x<z){
        console.log(x,z,y)
    }
}
else if(z>y && x<z){
    if(y>x){
        console.log(x,y,z)
    }
    else if(y<x){
        console.log(y,x,z)
    }
}