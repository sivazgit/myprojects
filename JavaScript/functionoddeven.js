function numcheck(num){
    if (num%2==0) {
        return "even" ;  
    }
    else{
    return "odd";
    }
}

result = numcheck(8)
console.log(result);



// method 2

function numcheck(num){
    return num%2==0?"even":"odd"

}

result = numcheck(7)
console.log(result);

    



