// Inheritance : IS-A

class ABC
{
    constructor(a)
    {
        this.a = a
    }
    show(){
        console.log("A : ",this.a)
    }
}

class XYZ extends ABC
{
    constructor(x,a){
        super(a)
        this.x = x
    }
    show(){
        super.show()
        console.log("X : ",this.x)
    }
}

var ob = new XYZ(34,42)

ob.show()
  

