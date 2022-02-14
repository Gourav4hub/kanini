var arr1 = [55,66,44,33,22,26,54,21,78,86,54]

// even: +10 , odd: *10
// var arr2 = arr1.map(num=>num%2==0?num+10:num*10)
var arr2 = arr1.map(num=>num%2==0?num:num*10)

console.log(arr1)
console.log(arr2)