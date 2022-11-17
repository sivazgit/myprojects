// w a p to print a pattern
// input    2           3                   4
// output   2+22=24     3+33+333=369        4+44+444+4444=4936

// method 1

var input=4
str = ""
var i=1
total=0
while(i<=input){
    str+=input
    total+=Number(str)
    i++
}
console.log(total)


// method 2

var input=4
var i=1
var sum =0
var total=0
while(i<=input){ //1<4 t 2<4 t
    sum = sum*10+input
    total+=sum
    i++
}
console.log(total)