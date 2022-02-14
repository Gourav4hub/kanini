function add(a,b)
{
    var c = a + b;
    console.log("Add Result : " , c)
}
function mul(a,b)
{
    var c = a * b;
    console.log("Mul Result : " , c)
}

function hello(a,b,operation)
{
    console.log("Hello All ..... ")   
    operation(a,b)
    console.log("Good Morning !")
}

// Annonymous Function
hello(75,25,function(a,b)
{
    var c = a - b
    console.log("Sub : ",c)
}) // sub():


