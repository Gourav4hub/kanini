// Javascript Object
var ob1 = {
    rollNumber : 101,
    studName : 'John',
    age : 23,
    marks : 345.65,
    address : {
        area : 'LIG Colony',
        city : 'delhi',
        pincode : 452005
    }
}

//var ob2 = ob1
var ob2 = {
    ...ob1, address : { ...ob1.address }
}

ob2.address.city = 'pune'

console.log(ob1)
console.log(ob2)