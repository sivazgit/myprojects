// check element = 2 is present in the array
// Linear search

var arr=[10,11,1,2,3,14]
var element=21
var status=0
count = 0

for(let item of arr){
    if(item==element){
        status =1
        break
    }
    count ++
 }
 console.log(status==1? "number available":"number not available");
 console.log("total iteration: ",count);
