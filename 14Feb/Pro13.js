function hello()
{
    console.log("Hello All ....")
}

//setInterval(hello,3000) // 1000 MilliS : 1 Second

//setTimeout(hello,5000)

var intervalObj = setInterval(hello,1000)

setTimeout(()=>clearInterval(intervalObj),10000)