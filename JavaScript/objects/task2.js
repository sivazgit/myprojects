products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]

//1. print product name only
//2. print all mobile details whose display is lcd
//3. print 5g mobile phone name
//4. filter mobile based on price
//5. print costly mobile
//6. print low cost mobile

// 1.
products.forEach(data=>console.log(data["pName"]));

// 2.
products.filter(data=>data["display"]=="lcd").forEach(data=>console.log(data));

// 3.
products.filter(data=>data["band"]=="5g").forEach(data=>console.log(data["pName"]));

// 4.
products.sort((itm1,itm2)=>itm2["price"]-itm1["price"]).forEach(itm=>console.log(itm.pName));

// 5.
console.log(products.reduce((item1,item2)=>item1["price"]>item2["price"]?item1:item2).pName);

// 6.
console.log(products.reduce((item1,item2)=>item1["price"]<item2["price"]?item1:item2).pName);
