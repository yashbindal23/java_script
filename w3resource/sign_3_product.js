const prompt = require('prompt-sync')();
let x = prompt('enter number:')
let y = prompt('enter number:')
let z = prompt('enter number:')

if (x > 0 && y > 0 && z > 0) {
    console.log("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
    console.log("The sign is -");
} else if (x > 0 && y < 0 && z < 0) {
    console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
    console.log("The sign is +");
} else {
    console.log("The sign is -");
}
