// spread operator : used to provide space for number of arguments if it is not mentioned while calling
//                 : used to merge two different array to a single array (flat is used to convert nested array to single array)

function sum(...arg){
    return arg.reduce((n1,n2)=>n1+n2)
}

console.log(sum(10,20,30,40,50));

// largest number

function max(...arg){
    return arg.reduce((n1,n2)=>n1>n2?n1:n2)
}

console.log(max(10,20,80,30,40,50));