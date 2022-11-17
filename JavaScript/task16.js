//[ id,name,designation,location,salary,experience]
employee = [
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',15000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

//1. print all employee name

//2.print total number of employee

//3. print developer employee details

//4. print employee whose salary > 30000

//5. print details of employee Laisha

//6. Sort employee based on their salary in descending order

//7. Sort employee based on their experience in ascending order


// 1.
//  for(let emp of employee){
//     console.log(emp[1]);  
//     }

// console.log(employee.map(emp=>emp[1]));

// // 2.
// for(let emp of employee){
// }
// console.log(employee.length);



// // 3.
//  for(let emp of employee){
//     if(emp[2]=='developer'){
//         console.log(emp);
//     }
//     }

// // method 2

//     console.log(employee.filter(emp=>emp[2]=='developer'));



// // 4.  
// for(let emp of employee){
//         if(emp[4]>30000){
//             console.log(emp); 
//         }
//     }

// // 5.
// for(let emp of employee){
//     if(emp[1]=='Laisha'){
//         console.log(emp);
//     }
// }

// method 2
// console.log(employee.find(emp=>emp[1]=='Laisha'));


// // 6.
// employee.sort((emp1,emp2)=>emp2[4]-emp1[4])
// console.log(employee);


// // 7.
// employee.sort((emp1,emp2)=>emp1[5]-emp2[5])
// console.log(employee);


// // // 8. total sum of salary (using maping and reducing)
// console.log(employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1+sal2));


// // // 9. Minimum of salary (using maping and reducing)

console.log(employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1<sal2?sal1:sal2));

console.log(employee.reduceRight((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2));




// // 10. Maximum of salary (using maping and reducing)

// console.log(employee.map(emp=>emp[4]).reduce((sal1,sal2)=>sal1>sal2?sal1:sal2));
