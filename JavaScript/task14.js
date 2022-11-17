// FINDING COMMON ELEMENT IN TWO ARRAYS

// Method 1

a1=[10,12,11,20,30]
a2=[11,20,21,22,30]
count=0
    for(let num1 of a1){
        for(let num2 of a2){
            if(num1==num2){
            console.log(num1);
        }
        count++
    }
}

// Method 2

a1=[10,12,11,20,30]
a2=[11,20,21,22,30]
count=0
a1.sort((n1,n2)=>n1-n2)
p1=0
p2=0
while(p1<a1.length && p2<a2.length){
    if(a1[p1]==a2[p2]){
        console.log(`common element is : ${a1[p1]}`);
        p1++
        p2++
    }
    else if(a1[p1]<a2[p2]){
    p1++
    }
    else if(a1[p1]>a2[p2]){
        p2++
    }
    count++
}


console.log("total iteration: ",count);