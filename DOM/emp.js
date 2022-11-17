function addEmp(){
    // employee object
    employee={
        id:empid.value,
        eName:empname.value,
        Addr:empaddr.value,
        Desig:empdesg.value,
        exp:empexp.value,
        Salary:empsal.value

    }
    if(employee.id in localStorage){
        alert("Already existing data")
    }
    else{
        localStorage.setItem(employee.id,JSON.stringify(employee))
        alert("Employee details added!!!")
    }

}

function searchId(){
    key = searchkey.value

    if(key in localStorage){
        employee=JSON.parse(localStorage.getItem(key))
        output.innerHTML = `<p> Employee Id : ${employee.id}</p>
        <p> Employee Name : ${employee.eName}</p>
        <p> Employee Address : ${employee.Addr}</p>
        <p> Employee Designation : ${employee.Desig}</p>
        <p> Employee Experience : ${employee.exp}</p>
        <p> Employee Salary : ${employee.Salary}</p>`
                            
    }
    else{
        output.innerHTML = ""
        alert("invalid employee id")
    }
}
