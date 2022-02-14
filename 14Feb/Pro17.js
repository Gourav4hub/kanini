// Javascript Object
var ob1 = {
    rollNumber : 101,
    studName : 'John',
    age : 23,
    marks : [55.65,66.45,88.43,99.43,54.55],
    address : {
        area : 'LIG Colony',
        city : 'delhi',
        pincode : 452005
    }
}
// immutable , immer

//var ob2 = ob1
var ob2 = {
    ...ob1, address : { ...ob1.address } , marks : [...ob1.marks]
}

console.log(ob1)
console.log(ob2)