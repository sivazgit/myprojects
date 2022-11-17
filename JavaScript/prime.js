// W A P to check a number prime or not


var num=16

for(i=2;i<=num;i++){
    if(num%i==0){
        break;
    }
}
if(num==i){
console.log("the number is prime");
}
else{
    console.log("not a prime");
}
