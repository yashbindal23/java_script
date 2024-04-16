const prompt = require('prompt-sync')();
let u = prompt('enter number:')
let v = prompt('enter number:')
let x = prompt('enter number:')
let y = prompt('enter number:')
let z = prompt('enter number:')

if(u>v && u>x && u>y && u>z){
    console.log('u is largest')
}
else if(u<v && v>x && v>y && v>z){
    console.log('v is largest')
}
else if(u<x && v<x && x>y && x>z){
    console.log('x is largest')
}
else if(u<y && v<y && x<y && y>z){
    console.log('y is largest')
}
else if(u<z && v<z && x<z && y<z){
    console.log('z is largest')
}
else{
    console.log('invalid input')
}