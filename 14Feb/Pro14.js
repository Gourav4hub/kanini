// var , let and const

// var : function scoped
// let : block scoped

function hello()
{
    var x = 10; // Local Variable
    let y = 10; // 

    console.log("Before Block : X - ",x , " Y - ", y)
    {
        var x = 20;
        let y = 20;
        console.log("Inside Block : X - ",x, " Y - ", y)
    }
    console.log("Outside Block : X - ",x, " Y - ", y)
}

hello()
//console.log(x)

const z = 10;
z = 23;