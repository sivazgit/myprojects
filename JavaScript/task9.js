// w a p to find factorial of number 4

var i = 1
var fact = 1
var limit = 5

while(i<=limit){
    fact=fact*i
    i++
}
console.log(fact);

// Method 2

var num = 4
fact = 1
while(num>=1){
fact*=num
num--
}
console.log(fact);