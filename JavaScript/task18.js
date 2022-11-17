//[id,name,price,stock]
products=[
    [1,'hide and seek',50,20],
    [2,'lays',20,80],
    [3,'oreo',40,100],
    [4,'parleG',25,10],
    [5,'tiger',20,30],
    [6,'unibic',60,20],
    [7,'good day',70,20]
]

//1. display all product name - map()

//2. display list of product under 50 Rs -  filter()

//3. print details of 'oreo' - filter()


// // 1.
// console.log(products.map(val=>val[1]));

// // 2.
// console.log(products.filter(val=>val[2]<50).map(val=>val[1]));

// // 3.
// console.log(products.filter(val=>val[1]=='oreo'));

// // // // // // // // //

//1.print most costly product details

//2. display out of stock product

//3. print details of 'oreo'

//4. sort product based on available stock by descending 

//5. print product having maximum available stock

// 1.
// console.log(products.map((item=>item[2])).reduce((num1,num2)=>num1>num2?num1:num2));

console.log(products.reduce((item1,item2)=>item1[2]>item2[2]?item1[2]:item2[2])); 

// 2.
// console.log(products.map((item=>item[3])).reduce((num1,num2)=>num1<num2?num1:num2));