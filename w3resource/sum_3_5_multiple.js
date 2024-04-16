let y = 1000
let z = 0
for (let x = 0; x < y + 1; x++) {
    if (x % 3 == 0) {
        z += x
    }
    else if (x % 5 == 0) {
        z += x
    }
}
console.log(z)