// W A P to find GCD / HCF of 2 numbers 24 and 36

var num1=24
var num2=36


for ( i = 1; i <= num1 && i <= num2; i++) {

    // check if is factor of both integers
    if( num1 % i == 0 && num2 % i == 0) {
        hcf = i;
    }
}

// display the hcf
console.log(`HCF of ${num1} and ${num2} is ${hcf}.`);