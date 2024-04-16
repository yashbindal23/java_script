const prompt = require('prompt-sync')();
let student = [['david', 80], ['vinod', 77], ['divya', 88], ['ishitha', 95], ['thomas', 68]]
let t_marks = 0

for (let i = 0; i < student.length; i++) {
    t_marks += student[i][1]
}

let avg = t_marks / student.length
console.log(avg + ' is the avg marks')

if (avg < 60) {
    console.log('f grade')
}
else if (avg < 70) {
    console.log('d grade')
}
else if (avg < 80) {
    console.log('c grade')
}
else if (avg < 90) {
    console.log('b grade')
}
else if (avg < 100) {
    console.log('a grade')
}
else {
    console.log('invalid')
}