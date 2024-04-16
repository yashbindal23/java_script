const math = require('mathjs')
const prompt = require('prompt-sync')()
const rand = parseInt(math.random() * 100)
// console.log(rand)
let a
let b = 0

do {
    a = parseInt(prompt('enter number:'))
    if (a < rand) {
        console.log('you going lower please enter higher number')
    }
    else if (a > rand) {
        console.log('you going higher please enter lower number')
    }
    else if (a == rand) {
        console.log('well done you won the game')
    }
    b += 1
} while (a != rand)

console.log(b + ' is the total count')
console.log('your turn left ' + (100 - b))
