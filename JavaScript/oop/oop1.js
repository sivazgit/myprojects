// OOP - Object oriented programming

// 1. class - blue print , eg : car, TV
// 2. object - eg: MI, LG tv 
// 3. reference - eg : remote


// class
// syntax : class class-name{properties,function}

// create employee with class properties(id,name,age,gender,salary,designation)
// function ( setEmployee(), printEmployee() )

class Employee{
    setEmployee(id,name,age,gender,salary,desg){
        this.id=id, // instance initialisation
        this.name=name,
        this.age=age,
        this.gender=gender,
        this.salary=salary,
        this.desg=desg

    }
    printEmployee(){
        console.log(this.id,this.name,this.age,this.gender,this.salary,this.desg);
    }
}

// object creation
// syntax : object-name = new class-name()
emp = new Employee()// object/instance
emp.setEmployee(100,'max',23,'male',30000,'developer')
emp.printEmployee()