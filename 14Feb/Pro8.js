function fun1(num) // return boolean
{
    return num%2==0;
}

var arr1 = [55,66,44,33,22,26,54,21,78,86,54]

var arr2 = arr1.filter(fun1)

console.log(arr1)
console.log(arr2)