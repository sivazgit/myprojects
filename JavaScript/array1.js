// Used to store more than one value in a variable
// Linear data structure
// Size of the array is not fixed
// can hold different types of data
// Ṭo fetch item from array - use its index and it start from zero

// SYNTAX

// var array-name = [item1,item2....itemn]


// variable creation
var collection = 10

// array creation
var car = ["Benz","BMW","Audi"]

console.log(typeof(car));

// To fetch item from array - use its index
console.log(car[0]);
console.log(car.length-1);

// To find length of the array
console.log(car.length);

// Insert item in an existing array
car.push("Skoda")
console.log(car);

car[car.length]="Porche"
console.log(car);

// Displaying elements of an array one below the other
for(let item of car){
    console.log(item);
}
// of gives values of an array


// display index
for(let index in car){
    console.log(index);
}
// in gives index of an array
