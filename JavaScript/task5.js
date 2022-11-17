// w a p to input 3 numbers and print largest number second largest number
// also display them in sorted order

var num1 = 100
var num2 = 300
var num3 = 200

if(num1>num2 && num1>num3){
 console.log("largest :",num1);
   if(num2>num3){
   console.log("second largest :",num2);
   console.log("sorted order is :",num1,num2,num3);
   }
}
 else if(num2>num1 && num2>num3){
 console.log("largest :",num2);
 if(num3>num1){
    console.log("second largest :",num3);
     console.log("sorted order is:",num2,num3,num1);
    }
 }
 else if(num3>num1 && num3>num2){
 console.log("largest :",num3);
 if(num1>num2){
    console.log("second largest :",num2);
    console.log("sorted order is:",num3,num1,num2);
    }
 }
 else{
    console.log("wrong command")
 }