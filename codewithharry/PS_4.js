//print = ("har\"".lenth)

let a = 'har\''
console.log(a.length)

// include, startwith and endwith function

const sen = 'the quick fox fucked himself and win the competition'
let word = 'fox'
console.log(sen.includes(word))
console.log(sen.startsWith('the'))
console.log(sen.endsWith('tion'))

// convert into lower 

let w = 'yaSh'
console.log(w.toLowerCase())

// extract the amount "please give rs 1000"

let x = "please give rs 1000"
console.log(x.slice(-4))

// change 4th char of string 

let y = x.replace(x[4],'x')
console.log(y)