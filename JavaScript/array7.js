// to check pairsum in an array
var a=[2,3,4,5]
pairsum = 5
count = 1
for(num1 of a){
    for(num2 of a){
        count++

        if (num1+num2==pairsum){
            console.log("pairs are: ",num1,num2);
            break;

        }
        
    }    
}
console.log("total iteration: ",count);