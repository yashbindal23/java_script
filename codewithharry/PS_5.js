const prompt = require('prompt-sync')()
// let a = [1,2,4,5,34,34,5,3,34]
// let b = parseInt(prompt('enter number:'))
// a.push(b)
// console.log(a)

// let a = [1, 2, 4, 5, 34, 34, 5, 3, 34]
// let b
// do {
//     b = parseInt(prompt('enter number:'))
//     a.push(b)
// } while (b != 0)
// console.log(a)

// let a = [1, 2, 4, 5, 34, 34, 5, 3, 34, 50, 100]
// let n = a.filter((e) => {
//     return e % 10 == 0
// })
// console.log(n)


// let a = [1, 2, 4, 5, 34, 34, 5, 3, 34, 50, 100]
// let x = a.map((e)=>{
//     return e*e
// })
// console.log(x)


let a = [1, 2, 3, 4, 5]
let x = a.reduce((e,f)=>{
    return e*f
})
console.log(x)