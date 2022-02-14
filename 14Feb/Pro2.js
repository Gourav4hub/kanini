function fun1()
{
    console.log('Hello Everyone ..... ')
    console.log('Good Morning !')
}
//var fun2 = fun1;
//fun2()
function hello(ob)
{
    ob()
    console.log("How r u?")
}

hello(fun1)

