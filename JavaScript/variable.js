// difference between var / let / const

// by giving let to define for loop
var i =10 // var means globally scope
// let means scope is inside where is declared
// const means its constant throughout program
console.log("i initially="+i)


for(let i=0; i<5; i++){
    // i=0; i<5; true then i= 0+1;
    // i=1; i<5; true then i=1+1;
    // i=2; i<5; true then i=2+1;
    // i=3; i<5; true then i=3+1;
    // i=4; i<5; true then i=4+1;
    // 1=5; i<5; false then end of the loop
console.log("i inside loop=" +i)
}

console.log("i after loop="+i)


// if we are giving var instead of let in the code
var i =10
console.log("i initially="+i)


for(var i=0; i<5; i++){
console.log("i inside loop=" +i)
}

console.log("i after loop="+i)


// by giving nothing to define for loop
 i =10
console.log("i initially="+i)


for(var i=0; i<5; i++){
console.log("i inside loop=" +i)
}

console.log("i after loop="+i)




