class Student{
    // instance initialisation - constructor()
    constructor(rol,name,course,total){
        this.rol=rol, // instance initialisation
        this.name=name,
        this.course=course,
        this.total=total
        
    }
    printStudent(){
        console.log(this.rol,this.name,this.course,this.total);
    }
}

st = new Student(100,'max','MEARN',400)// object/instance
// st.setStudent(100,'max','MEARN',400)
st.printStudent()

st1 = new Student(101,'manu','flutter',300)// object/instance
// st1.setStudent(101,'manu','flutter',300)
st1.printStudent()


