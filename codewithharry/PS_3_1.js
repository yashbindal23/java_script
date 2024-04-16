// write a program to print the marks of a student in an using for loop

let marks = {
    yash: 60,
    vikas: 50,
    vikrant: 50
}

for(let i=0;i<Object.keys(marks).length;i++){
    console.log(Object.keys(marks)[i]+': '+marks[(Object.keys(marks)[i])])
}
