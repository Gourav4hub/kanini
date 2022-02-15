// Inheritance : IS-A

class ABC
{
    fun1(){
        console.log('ABC Fun1 ..... ')
    }

    fun2(){
        console.log("ABC Fun2 ..... ")
    }

    fun3(){
        console.log("ABC Fun3 ..... ")
    }
}

class XYZ extends ABC
{
    hello(){
        console.log("XYZ hello ....")
    }

    fun2(){
        console.log("XYZ Fun2 .... ")
    }

    fun3(){
        super.fun3()
        console.log("XYZ Fun3 .... ")
    }
}

var ob = new XYZ()

ob.hello() // Own Function
ob.fun1() // Inherited Function
ob.fun2() // Override Function
ob.fun3()


  

