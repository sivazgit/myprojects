// products=[
//     [1,'hide and seek',50,20],
//     [2,'lays',10,80],
//     [3,'oreo',40,100],
//     [4,'parleG',25,10],
//     [5,'tiger',20,30],
//     [6,'unibic',60,20],
//     [7,'good day',70,20]
// ]

// // 1. is there any product can purchase by 10 Rs
// console.log(products.some(p=>p[2]<=10));


// // 2. is there any product with available stock > 100
// console.log(products.some(p=>p[3]>100));


// // 3. is there any product available in the range of 10 to 20
// console.log(products.some(p=>p[2]>=10 && p[2]<=20)); 



// // 4. print all product in the range of 10 to 20 Rs - filter()
// console.log(products.filter(p=>p[2]>=10 && p[2]<=20).map(item=>item[1])); 

// foreach 

// flat() - To flatten array - reduce nested array

a = [   [10,50],
        [20,60],
        [1,5],
        [15,25],
        [3,8],
        [100,500]  ]

    // 1. print all numbers > 10

    // 2. print square of all number

    // print total sum

    // print highest number

    // 1.
    console.log(a.flat().filter(num=>num>10).forEach(num=>console.log(num)));

    // 2.
    console.log(a.flat().map(num=>num**2).forEach(num=>console.log(num)));

    // 3.
    console.log(a.flat().reduce((num1,num2)=>num1=num1+num2));

    // 4.
    console.log(a.flat().reduce((num1,num2)=>num1>num2?num1:num2));

    