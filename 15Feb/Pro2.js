// Class and Object (Members : Data / Function)
// Encapsulation
class Student
{
    constructor(roll,name,age,marks)
    {
        this.roll = roll;
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    show()
    {
        console.log("\nRoll : ",this.roll)
        console.log("Name : ",this.name)
        console.log("Age : ",this.age)
        console.log("Marks : ",this.marks)
    }
}

var ob1 = new Student(101,'John',21,456.54);
var ob2 = new Student(102,'Kalpana',24,432.21);
var ob3 = new Student()


ob1.show()
ob2.show()
ob3.show()
