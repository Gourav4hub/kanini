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

hello(34,21,add) // add()
hello(45,23,mul) // mul()