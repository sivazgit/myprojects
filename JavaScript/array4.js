var arr=[10,11,1,2,3,14]
// check element = 2 is present in the array

for(let item of arr){
   if(item==2){
   }
}
console.log("2 is present in the array");

// Method 2

var arr=[10,11,1,2,3,14]
var element=21
var status=0

for(let item of arr){
    if(item==element){
        status =1
        break
    }
 }
 console.log(status==1? "number available":"number not available");
