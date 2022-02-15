var students = [{
    rollNumber : 101,
    studName : 'John',
    age : 23,
    marks : 345.65,
    address : {
        area : 'LIG Colony',
        city : 'delhi',
        pincode : 452005
    }
},
{
    rollNumber : 102,
    studName : 'Lokesh',
    age : 24,
    marks : 245.65,
    address : {
        area : 'Raj Colony',
        city : 'indore',
        pincode : 452001
    }
},
{
    rollNumber : 103,
    studName : 'Rajesh',
    age : 21,
    marks : 321.65,
    address : {
        area : 'Mahesh Colony',
        city : 'pune',
        pincode : 412005
    }
}]

console.log(students)
console.log(typeof students)
// JSON : Javascript Object Notation

// Sender : JS Object to JSON
var jsonStr = JSON.stringify(students)
console.log(jsonStr)
console.log(typeof jsonStr)

// Receiver : JSON to JS Object
var obj = JSON.parse(jsonStr)
console.log(obj)
console.log(typeof obj)

