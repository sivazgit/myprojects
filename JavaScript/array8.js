var a=[2,3,4,5]
pairsum = 17
count = 1
a.sort((n1,n2)=>n1-n2)
low=0
up=a.length-1
status = 0
while (low<up) {
    cursum = a[low] + a[up]

    if (cursum == pairsum) {
        status=1
        console.log("pairs are: ",a[low],a[up]);
        break
    }
    else if(cursum < pairsum){
        low++
    }
    else if(cursum > pairsum){
        up--
    }
    count++
    }

    if(status==0){
        console.log("pairs not found");
    }
    console.log("total iteration: ",count);