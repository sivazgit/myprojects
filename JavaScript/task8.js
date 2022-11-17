// W A P to print a number in reverse order eg: input = 123 output=321

var num=123
var rev=0
var lastdigit = 0

while(num!=0){
    lastdigit = num % 10;
    rev = rev * 10 + lastdigit;
    num = Math.floor(num / 10)
}
    console.log(rev);


// Method 2

var input=1234567
str=""
while(input!=0){
    var lastdigit=input%10
    str+=lastdigit
    input= Math.floor(input/10)
}
console.log(Number(str));




    