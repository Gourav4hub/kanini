var arr1 = [55,66,44,33,22,26,54,21,78,86,54]

var arr2 = [] // push all the even numbers from arr1 into arr2

for(var x of arr1) 
{
    if(x%2==0)
    {
        arr2.push(x)
    }
}

console.log(arr1)
console.log(arr2)