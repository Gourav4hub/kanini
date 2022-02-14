function test(){
    console.log("Hello Testing .... ")
}

function hello(){
    console.log("Hello Candidates .... ")
}

var num = [44,33,43,23]

//module.exports = test
module.exports = {
    fun1 : test,
    fun2 : hello,
    data : num
}