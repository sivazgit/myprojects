// object - real world entities
// var object-name = {key:value}

var a = [10,20,30]

var a = {0:10,1:20,2:30}

// create object for employeewith keys as : id,name,designation,salary,experience

var employee = {
    id:1000,
    name:"max",
    designation:"developer",
    salary:35000,
    exp:3
}


var student = {
    rollno:101,
    name:"merry",
    course:"meanstack",
    mark:98
}

// to fetch values from object : using key
// object-name["key-name"] / object-name.key-name

// display name of the employee

console.log(employee["name"]);
console.log(student.name);

// check whether a key is present or not in object : using in operator

console.log("exp" in employee);
console.log("grade" in student);

// To insert new key-value pair in an object
// object-name["key-value"] = value

// insert gender into employee
employee["gender"]="male"
console.log(employee);

// insert Isvaccinated into student
student.Isvaccinated=true
console.log(student);

// insert vaccine:covidshield into student
student.vaccine='covidshield'
console.log(student);

// update key-value pair in object
// update employee vaccine as cowaxin

student.vaccine='cowaxin'
console.log(student);

// update salary of employee incremented by 5000
employee.salary+=5000
console.log(employee);

// display all key-value pairs in object - in operator

for(let key in employee){
    console.log(`${key} : ${employee[key]}`);

}

