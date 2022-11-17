// total expense, largest and smallest expense

var expense = [10000,15000,24000,12000,17000,20000]

// total expense

total=0
for(let amount of expense){
    total+=amount
}
console.log("Total expense is: "+total);

// largest amount in expense array

maxExp=0
minExp=expense[0]

for(let amount of expense){
    if(maxExp<amount){
        maxExp=amount
    }
    if(amount<minExp){
    minExp=amount
}
}
console.log(maxExp);
console.log(minExp);