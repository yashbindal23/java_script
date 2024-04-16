//print 'try again' until the user enter correct number

const prompt = require('prompt-sync')()
let a

do {
    console.log('try again')
    a = parseInt(prompt('enter number'))
} while (a != 100)
console.log('well done')
