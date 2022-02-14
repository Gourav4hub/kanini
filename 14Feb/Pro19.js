// Rest Parameters
function operation(...num)
{
    console.log(num)
}

function operation2(x,y,...num)
{
    console.log(x,y,num)
}

operation(23,34)
operation(3,4,5,6,7,89,21)

operation2(54,21,3,4,5,4,3,4,5)
