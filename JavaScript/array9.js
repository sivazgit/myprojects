//  OPERATIONS IN AN ARRAY

// 1. FILTER() - Create a new array with elements satisfy with condition by a function

// a = [10,11,12,13,14,15]


// // 1. print all even numbers

// function numcheck(num){
//     return num%2==0
// }

// evens = a.filter(num=>num%2==0)
// console.log(evens);

// // Method 2 using filter function only

// console.log(a.filter(num=>num%2==0));


// // 2. Print all numbers greater than 12 from the given array

// console.log(a.filter(num=>num>12));

// // // // // // // //

// // 2. MAP - map() - create new array from calling a function for every array element

// a=[10,11,12,13,14,15]
// // 1. print square of all element in array
// console.log(a.map(num=>num**2));

// // 2. print cube of all elements present in array
// console.log(a.map(num=>num**3));

// // // // // // // //

// a1 = [1,2,3,4,5,6,7]
// // 2. Create a new array with items are, if number>5 then increment number
// // else decrement number
// // output[0,1,2,3,4,7,8]

// console.log(a1.map(num=>num>5?num+1:num-1));

// // // // // // // // //

// // 3. FIND - find() - To find details about a particular item and it return only the
// // first item whosesatisfy the condition

// // 1. print the details of laisha
// employee= [
//     [1002,'MAxwell','QA','kochi',35000,4],
//     [1003,'Vyom','QA','kochi',45000,5],
//     [1004,'Laisha','tester','TVM',55000,7],
//     [1005,'Aahan','developer','TVM',15000,1],
// ]

// console.log(employee.find(emp=>emp[1]=='Laisha'));

// // // // // // // // //

// 4. REDUCE - reduce() - It will apply a function to all the elements and return a single value
// highest value/minimum value/total sum/maximum

a = [1,2,3,4,5,6,7]

// Sum
console.log(a.reduce((num1,num2)=>num1+num2));

// Smallest

console.log(a.reduce((num1,num2)=>num1<num2?num1:num2));

// Largest

console.log(a.reduce((num1,num2)=>num1>num2?num1:num2));


// 5. SOME - some() - Apply where it returns true or false

// eg. is there any product with available stock > 100
console.log(products.some(p=>p[3]>100));

// 6. FOREACH - forEach() - Help to fetch each item from an array

// eg:
products.forEach(p=>console.log(p[1]));

// 7. INCLUDES - includes() - 