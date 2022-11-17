// Print all elements is less than 10 from the given array
a = [   [1,2],[11,3],[14,15],[5,6]   ]

    for(let subArray of a){
        // console.log(subArray);
        for(let num of subArray){
            if(num<10){
                console.log(num);
        }
    }
    }