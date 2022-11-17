// w a p to find the exponent of number and display the number whose exponent is in range of 8 & 36
// input, exponent 2
// 1**2=2
// 2**2=4


var exponent = 3
var low = 8
var up = 36
var result = 0
var i = 1

while(i<=up){
     result = i**exponent

     if (result>=low && result<=up) {
          console.log(i);     
     }
          i++

}
