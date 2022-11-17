function subtract(num1,num2){
   return num1>num2?num1-num2:num2-num1
}

result = subtract(3,30)
console.log(result);


// method 2

function subtract(num1,num2){
    result=num1-num2
    return Math.abs(result)
 }
 
 result = subtract(4,30)
 console.log(result);
 

