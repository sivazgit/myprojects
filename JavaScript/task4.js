// number positive or negative?

var num = 7

if(num>0){
    console.log("The number entered is positive");
}
else if(num<0){
    console.log("The number entered is negative");
}
else{
    console.log("The number is equal to zero");
}


// instead if else . we can use ternary operator
// Ternary operator : condition? true stats : false stats

var num = 0

num>0?console.log("+ve") : num<0?console.log("-ve") : console.log("neither positive nor negative")
    