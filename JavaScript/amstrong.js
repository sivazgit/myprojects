// W A P to create amstrong number

// input = 153
// output = 1*3 + 5*3 + 3*3 = 1+125+27=153

// Method 1

var input = 153
var num=input
var sum = 0
while(num!=0){
    lastdigit = num%10
    sum+=lastdigit**3
    num=Math.floor(num/10)
}
console.log(sum);

if(sum==input){
    console.log("armstrong");   
}
else{
    console.log("not an amstrong")
}



// Method 2

var input = 158
var num=input
var lastdigit = 0
var sum = 0
var cube = 0

    while(num!=0){

        lastdigit=num%10
        cube=lastdigit**3
        sum+=cube
        num=Math.floor(num/10)
    }
    console.log(sum);

    if (input==sum) {
        console.log("the number is amstrong");
    }
    else{
        console.log("the number is not an amstrong");
    }