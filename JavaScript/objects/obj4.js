// print count of each item in the given array
a = [10,10,20,20,30,30,40,40,50,50,50]
// output : {}

output={}
a.map(item=>item in output?output[item]+=1:output[item]=1)
console.log(output);