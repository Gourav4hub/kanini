// Javascript Object
var ob1 = {
    rollNumber : 101,
    studName : 'John',
    age : 23,
    marks : 345.65
}

//var ob2 = ob1
var ob2 = {
    ...ob1
}
ob2.age = 45

console.log(ob1)
console.log(ob2)