// w.a.p to print "fizz" if number/3 . print "buzz" if number/5 . print "fizzbuzz" if number/15

var number = 10

if(number%15==0){
    console.log("fizzbuzz");
}
else if(number%3==0){
    console.log("fizz");
}
else if(number%5==0){
    console.log("buzz");
}
else{
    console.log("the number is not a fizz,buzz,fizzbuzz")
}

