// generate new array after subtracting each item from the total sum
// of the item present in that array:
// input : var arr = [4,5,6]
// output : var arr = [11,10,9]

var arr = [4,5,6]
var arr1 = []
total=0

for(let item of arr){
    total+=item
    arr1[0]=total-arr[0]
    arr1[1]=total-arr[1]
    arr1[2]=total-arr[2]
}
console.log(arr1);

// method 2

var arr = [4,5,6]
total=0

for(let item of arr){
    total+=item
}
for(let index in arr){
    arr[index] = total-arr[index]
}

console.log(arr);



